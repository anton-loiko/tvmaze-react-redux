/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import myHistory from 'myHistory';
// import {createStore, applyMiddleware} from 'redux';
import {createStore} from 'redux';
// import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import mainReducer from 'reducers';
import './index.scss';
import App from './App';

let store = createStore(mainReducer);

// store.dispatch()

ReactDOM.render(
  <Router history={myHistory}>
    <App store={store}/>
  </Router>,
  document.getElementById('root')
);
