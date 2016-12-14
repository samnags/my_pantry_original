import React, { Component } from 'react'
import SignUp from './sign_up'
import Login from './login'
import { connect } from 'react-redux'
import { logout } from '../actions/index'
import { bindActionCreators } from 'redux';

class Header extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    if (this.props.logged_in) {
      var button = <button onClick={this.logout}>Log Out</button>
    }
    return(
      <div>
        <SignUp />
        <Login />
        {button}
      </div>
    )
  }
}



function mapStateToProps(state) {
  return { logged_in: state.session }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
