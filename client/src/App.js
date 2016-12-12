import React, { Component } from 'react';
import SignUp from './components/sign_up'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <Login />
      </div>
    );
  }
}

export default App;
