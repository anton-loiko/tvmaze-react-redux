import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../../components/Table';

export default () => {
  return (
    <div>
    <Link to='/details'>
      go to details
    </Link>
      <Table className='home-table'/>
    </div>
  );
};

