/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import myHistory from 'myHistory';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import store from 'store';
import {parseResponseInNewArray} from 'myHelpers'
import setTrueStatusPendingActions from 'actions/setTrueStatusPendingActions'
import setTrueStatusSuccessActions from 'actions/setTrueStatusSuccessActions'
import setDataParsedActions from 'actions/setDataParsedActions'
import setDataActions from 'actions/setDataActions'


fetch(`http://api.tvmaze.com/search/shows?q=${store.getState().userRequest}`)
  .then(r => r.json())
  .then(r => {
    store.dispatch(setDataActions(r));
    store.dispatch(setDataParsedActions(parseResponseInNewArray(r)));
    store.dispatch(setTrueStatusSuccessActions());
    console.log(store.getState())
  })
  .catch(() => store.dispatch(setTrueStatusPendingActions()));


ReactDOM.render(
  <Provider store={store}>
    <Router history={myHistory}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
