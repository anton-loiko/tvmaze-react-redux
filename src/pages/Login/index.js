import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from "../../components/Input/index";
import './index.scss'

//TODO -- валидация!!! html5 + js


export default class extends Component {
  onSubmit = event => {
    event.preventDefault();

    this.props.onLogin({
      userName: this.usernameInput.value,
      password: this.passwordInput.value
    });
  };

  render() {
    return (
      <div className='wrapper-login'>
        <form onSubmit={this.onSubmit} className='login-regist__form login'>
          <Input
            type='username'
            name='username'
            placeholder='Username'
            required={true}
            refcb={input => this.usernameInput = input} />
          <Input
            type='password'
            name='password'
            placeholder='Password'
            required={true}
            refcb={input => this.passwordInput = input}
            pattern='(?=.*[0-9])(?=.*[!@#$%^&*]?)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'/>

          <Link className='login-regist__link' to='/registration'>Don't have an account?</Link>
          <button className='login-regist__btn' type='submit'>Log in</button>
        </form>
      </div>
    );
  }
};

