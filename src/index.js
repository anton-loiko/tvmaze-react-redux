/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import myHistory from 'myHistory';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import store from 'store';

// import mainReducer from 'reducers';
// import {createStore, applyMiddleware} from 'redux';
// import {createStore} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

ReactDOM.render(
  <Provider store={store}>
    <Router history={myHistory}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
