import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from "../../components/Input";
import Button from "../../components/Button";
import './index.scss'

export default class extends Component {
  // state = {
  //   user: {}
  // };

  userRegister = (obj) => {
    const strObj = JSON.stringify(obj);
    localStorage.setItem('user', strObj);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onRegister();
    const user = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        userName: this.userName.value,
        password: this.password.value,
        birthday: this.birthday.value,
        phone: this.phone.value,
        radioMale: this.radioMale.checked,
        radioFemale: this.radioFemale.checked,
        select: this.select.value
  };

    // this.setState({ user });
    this.userRegister(user);

    console.log('submit');
  };


  render() {
    return (
      <div className='wrapper-reigst'>

        <form onSubmit={this.onSubmit} className='login-regist__form regist'>
          <Input
            type='text'
            name='firstname'
            placeholder='First name'
            required={true}
            refcb={input => this.firstName = input}/>
          <Input
            type='text'
            name='lastname'
            placeholder='Last name'
            required={true}
            refcb={input => this.lastName = input}/>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            required={true}
            refcb={input => this.email = input}/>
          <Input
            type='username'
            name='username'
            placeholder='Username'
            required={true}
            refcb={input => this.userName = input}/>
          <Input
            type='password'
            name='password'
            placeholder='Password [0-9a-zA-Z!@#$%^&*]'
            required={true}
            pattern='(?=.*[0-9])(?=.*[!@#$%^&*]?)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}'
            refcb={input => this.password = input}/>
          <Input
            type='text'
            name='birthday'
            placeholder='YYYY/MM/DD'
            required={false}
            pattern='[0-9]{4}\/[0-9]{2}\/[0-9]{1,2}'
            refcb={input => this.birthday = input}/>
          <Input
            type='phone'
            name='phone'
            placeholder='+38-XXX-XXX-XX-XX'
            required={false}
            pattern='/(\+38)\-(0\d\d)\-(\d{3})(\-\d\d){2}/'
            refcb={input => this.phone = input}
            />

          <div className="wrap-other-input">
            <div className="wrap-other-input-left">
              <label>
                Male
                <Input
                  type='radio'
                  name='gender'
                  value='male'
                  required={true}
                  checked={true}
                  refcb={input => this.radioMale = input}/>
                <span className="slider" />
              </label>

              <label>
                Female
                <Input
                  type='radio'
                  name='gender'
                  value='female'
                  required={true}
                  refcb={input => this.radioFemale = input}/>
                <span className="slider" />
              </label>
            </div>

            <div className="wrap-other-input-right">
              <select name="status" ref={input => this.select = input}>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
                <option value="active">Actively looking</option>
                <option value="developer">Developer</option>
              </select>
            </div>
          </div>

          <Link to='/login' className='login-regist__link'>
            Back to login
          </Link>

          <Button text='Sign up'/>
        </form>
      </div>
    );
  }
};

