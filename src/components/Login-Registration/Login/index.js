import React from 'react';
import Input from "../Input/index";
import './index.scss'

//TODO -- валидация!!! html5 + js

export default () => {
  return (
    <div className='wrapper-login'>
      <form className='login-regist__form login'>
        <Input type='username' name='username' placeholder='Username' required={true}/>
        <Input type='password' name='password' placeholder='Password' required={true}/>
        <a href='/'>Don't have an account?</a>
        <button className='login-regist__btn' type='submit'>Log in</button>
      </form>
    </div>
  );
};

