import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
//----------------------------------------- END ----------------------------------------
import DetailsContainer from 'containers/DetailsContainer';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import PageNotFound from 'pages/PageNotFound';
import Registration from 'pages/Registration';
import UserProfile from 'pages/UserProfile';
import Header from 'components/Header';
import RounerContainer from 'containers/RouterContainer';
import PrivateRoutePropComponent from 'components/PrivateRoutes/PrivateRoutePropComponent';
import PrivateRoutePropRender from 'components/PrivateRoutes/PrivateRoutePropRender';
//----------------------------------------- END -----------------------------------------

class App extends Component {

  getStatusLogin = () => !!+localStorage.getItem('login') ;

  render() {
    return (
      <RounerContainer>
        <Route exact path='/' component={Header}/>
        <Route path='/details/:id?' component={Header}/>
        <Route path='/profile' component={Header}/>

        <Switch>
          <Route path='/logout' component={Logout}/>

          <PrivateRoutePropRender path='/registration'
                        login={!this.getStatusLogin()}
                        toregirect={this.getStatusLogin() ? '/' : '/registration'}
                        render={props => <Registration/>}/>
          <PrivateRoutePropRender path='/login'
                        login={!this.getStatusLogin()}
                        toregirect={!!this.getStatusLogin() ? '/' : '/login'}
                        render={props => <Login/>}/>

          <PrivateRoutePropComponent  path='/details/:id?'
                                     login={this.getStatusLogin()}
                                     toregirect='/login'
                                     component={DetailsContainer}/>

          <PrivateRoutePropRender exact path='/'
                        login={this.getStatusLogin()}
                        toregirect='/login'
                        render={props => <Home state={this.props.state}/>}/>

          <PrivateRoutePropComponent path='/profile'
                        login={this.getStatusLogin()}
                        toregirect='/login'
                        component={UserProfile}/>
          <Route component={PageNotFound}/>
        </Switch>
      </RounerContainer>
    );
  }
}

export default withRouter(App);
