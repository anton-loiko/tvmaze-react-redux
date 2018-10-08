import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

export default () => {
  return (
    <div className='page-404'>
      <Link to='/' className='page-404__link'>
        Go back to the main page
      </Link>
    </div>
  );
};

