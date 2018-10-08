import React from 'react';
import Input from "../Input/index";
import './index.scss'

//TODO -- валидация!!! html5 + js

export default () => {
  return (
    <div className='wrapper-reigst'>
      <form className='login-regist__form regist'>
        <Input type='text' name='firstname' placeholder='First name' required={true}/>
        <Input type='text' name='lastname' placeholder='Last name' required={true}/>
        <Input type='email' name='email' placeholder='Email' required={true}/>
        <Input type='username' name='username' placeholder='Username' required={true}/>
        <Input type='password' name='password' placeholder='Password' required={true}/>
        <Input type='text' name='birthday' placeholder="dd-mm-yyyy" required={false}/>
        <Input type='phone' name='phone' placeholder='+38-XXX-XXX-XX-XX' required={false}/>
        <div className="wrap-other-input">
          <div className="wrap-other-input-left">
            <label>
              Male
              <Input type='radio' name='gender' required={true} checked={true}/>
              <span className="slider"></span>
            </label>
            <label>
              Female
              <Input type='radio' name='gender' value='fmail' required={true}/>
              <span className="slider"></span>
            </label>
          </div>

          <div className="wrap-other-input-right">
            <select name="status">
              <option value="married">Married</option>
              <option value="unmarried">Unmarried</option>
              <option value="active">Actively looking</option>
              <option value="developer">Developer</option>
            </select>
          </div>
        </div>
        <button className='login-regist__btn' type='submit'>Sign up</button>
      </form>
    </div>
  );
};

