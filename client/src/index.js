import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import { Router, browserHistory } from 'react-router'
import Routes from './routes'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={Routes} />
  </Provider>
  ,
  document.getElementById('root')
);
