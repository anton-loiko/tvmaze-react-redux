import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button'
import './index.scss'

// TODO --- если юзер в localStorage еимеется но username и password не соответствуют в юзере
// - выводим сообщения ошибки - "неверные имя или пароль".

export default class extends Component {
  onSubmit = event => {
    event.preventDefault();
    const userName = this.usernameInput.value;
    const password = this.passwordInput.value;
    const localUser = JSON.parse(localStorage.getItem('user'));
    this.props.onLogin({
      userName,
      password
    });

    if (userName === localUser.userName && password !== localUser.password) {
      this.form.classList.add('login-error');
      this.popupError.classList.add('popup-error');
      setTimeout(() =>{
        this.popupError.classList.remove('popup-error');
      }, 3000)
    }
  };

  render() {
    return (
      <div className='wrapper-login'>
        <form onSubmit={this.onSubmit} className='login-regist__form login' ref={form => this.form = form}>
        <div className="popup" ref={div => this.popupError = div}>sorry incorrect password</div>
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
            // pattern='(?=.*[0-9])(?=.*[!@#$%^&*]?)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'
          />

          <Link className='login-regist__link' to='/registration'>Don't have an account?</Link>
          <Button text='Log in'/>
        </form>
      </div>
    );
  }
};

