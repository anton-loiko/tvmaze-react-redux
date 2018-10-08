import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ login, component: Component, data, ...rest }) => {
    console.log('ROute login', login);
  return (
    <Route {...rest} render={
      props => (

        login ? <Component data={data} {...props}/> : <Redirect to='/login'/>
      )
    }/>
  );
}
