import React from 'react';
import Input from "../Input/index";
import './index.scss'

//TODO -- валидация!!! html5 + js

export default () => {
  return (
    <form className='login-regist__form regist'>
      <Input type='text' name='firstname' placeholder='First name' required={true}/>
      <Input type='text' name='lastname' placeholder='Last name' required={true}/>
      <Input type='email' name='email' placeholder='Email' required={true}/>
      <Input type='username' name='username' placeholder='Username' required={true}/>
      <Input type='password' name='password' placeholder='Password' required={true}/>
      <Input type='date' name='birthday' required={false}/>
      <Input type='phone' name='phone' placeholder='+38-XXX-XXX-XX-XX' required={false}/>
      <label>
        Male
        <Input type='radio' name='gender' required={true}/>
      </label>
      <label>
        Female
        <Input type='radio' name='gender' value='fmail' required={true}/>
      </label>
      <select name="status">
        <option value="married">Married</option>
        <option value="unmarried">Unmarried</option>
        <option value="active">Actively looking</option>
        <option value="developer">Developer</option>
      </select>
      <button className='login-regist__btn' type='submit'>Sign up</button>
    </form>
  );
};

