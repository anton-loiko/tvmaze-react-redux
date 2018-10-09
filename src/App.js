import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Details from './pages/Details';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import PageNotFound from './pages/PageNotFound';
import Registration from './pages/Registration';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Content from './components/Content';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  login = user => {
    const localUser= JSON.parse(localStorage.getItem('user'));

    if (!localUser) {
      return;
    }

    if (localUser.userName === user.userName
      && localUser.password === user.password) {
      localStorage.setItem('login', '1');
      return this.props.history.push('/');
    }

    if (user.userName === localUser.userName && user.password !== localUser.password) {
      return
    }

    localStorage.setItem('login', '0');
    return this.props.history.push('/registration');
  };


  logout = () => {
    localStorage.setItem('login', '0');
    return this.props.history.push('/login');
  };

  register = () => {
    localStorage.setItem('login', '1');
    return this.props.history.push('/');
  };

  render() {
    // TODO --- переход на Details только из таблицы

    return (
      <div>
        <Content>

          <Route exact path='/' component={Header}/>
          <Route path='/details' component={Header}/>
          <Route path='/profile' component={Header}/>

          <Switch>
            <Route path='/registration' render={props => <Registration onRegister={this.register}/>}/>
            <Route path='/login' render={props => <Login onLogin={this.login}/>}/>

            <Route path='/logout' render={props => <Logout onLogout={this.logout}/>}/>
            {/*<Route exact path='/' component={Home}/>*/}

            <PrivateRoute exact path='/' login={Boolean(+localStorage.getItem('login'))} component={Home}/>
            <PrivateRoute path='/details' login={Boolean(+localStorage.getItem('login'))} component={Details}/>
            <PrivateRoute path='/profile' login={Boolean(+localStorage.getItem('login'))} component={UserProfile}/>
            <Route component={PageNotFound}/>
          </Switch>

        </Content>
      </div>
    );
  }
}

export default withRouter(App);
