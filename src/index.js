/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import myHistory from 'myHistory';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import store from 'store';
import getFetchDataActions from 'actions/getFetchDataActions'

// Default request
store.dispatch(getFetchDataActions('girls'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={myHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
