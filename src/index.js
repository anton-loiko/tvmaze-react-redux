/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
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
  <BrowserRouter>
    <App store={store}/>
  </BrowserRouter>,
  document.getElementById('root')
);
