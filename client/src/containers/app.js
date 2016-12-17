import React, { Component } from 'react';
import { connect } from 'react-redux'
import GuestHeader from '../components/guest_header'
import LoggedInHeader from '../components/logged_in_header'
import '../../public/App.css'

class App extends Component {
  render() {
    return (
      <div>
        {this.props.logged_in ? <LoggedInHeader /> : <GuestHeader /> }
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { logged_in: state.session }
}

export default connect(mapStateToProps)(App);
