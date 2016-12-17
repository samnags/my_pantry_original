import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUp from './components/sign_up'
import Login from './components/login'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from './reducers/index';
import { Router, Route, browserHistory } from 'react-router'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={App} >
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
