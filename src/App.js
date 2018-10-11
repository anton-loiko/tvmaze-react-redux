// import lib
import React, {Component} from 'react';
// import { connect } from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
//----------------------------------------- END -----------------------------------------

// import other
import Details from 'pages/Details';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import PageNotFound from 'pages/PageNotFound';
import Registration from 'pages/Registration';
import UserProfile from 'pages/UserProfile';
import Header from 'components/Header';
import Content from 'containers/Content';
import PrivateRoutePropComponent from 'components/PrivateRoutes/PrivateRoutePropComponent';
import PrivateRoutePropRender from 'components/PrivateRoutes/PrivateRoutePropRender';
//----------------------------------------- END -----------------------------------------

class App extends Component {

  // login user: user ? set login true and push '/' : set login = false and push '/registration'
  login = user => {
    const localUser= JSON.parse(localStorage.getItem('user'));

    if (localUser) {
      if (localUser.userName === user.userName && localUser.password === user.password) {
        localStorage.setItem('login', '1');
        return this.props.history.push('/');
      }
      if (localUser.userName === user.userName && localUser.password !== user.password) {
        return
      }
    }

    localStorage.setItem('login', '0');
    return this.props.history.push('/registration');
  };
//----------------------------------------- END -----------------------------------------


  // logout user set in localStorage login ='0' (false) and push url '/login
  logout = () => {
    localStorage.setItem('login', '0');
    return this.props.history.push('/login');
  };
//----------------------------------------- END -----------------------------------------


  // registration user set in localStorage login ='1' (true) and push url '/' (home)
  register = () => {
    localStorage.setItem('login', '1');
    return this.props.history.push('/');
  };
//----------------------------------------- END -----------------------------------------


  getStatusLogin = () => !!+localStorage.getItem('login') ;
//----------------------------------------- END -----------------------------------------


  render() {
    return (
      <Content>
        <Route exact path='/' component={Header}/>
        <Route path='/details/:id?' component={Header}/>
        <Route path='/profile' component={Header}/>


        <Switch>
          <Route path='/logout' render={props => <Logout onLogout={this.logout}/>}/>

          <PrivateRoutePropRender path='/registration'
                        login={!this.getStatusLogin()}
                        toregirect={this.getStatusLogin() ? '/' : '/registration'}
                        render={props => <Registration onRegister={this.register}/>}/>
          <PrivateRoutePropRender path='/login'
                        login={!this.getStatusLogin()}
                        toregirect={!!this.getStatusLogin() ? '/' : '/login'}
                        render={props => <Login onLogin={this.login}/>}/>

          <PrivateRoutePropComponent  path='/details/:id?'
                                     login={this.getStatusLogin()}
                                     toregirect='/login'
                                     component={Details}/>

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
      </Content>
    );
  }
}

export default withRouter(App);
