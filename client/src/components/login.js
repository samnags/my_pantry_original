import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {email: '', password: ''}

    this.handleClick = this.handleClick.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleClick(event) {
    event.preventDefault()
    this.props.login(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <label>Email</label>
          <input type="text" placeholder="email" onChange={this.onEmailChange} value={this.state.email}/>
          <label>Password</label>
          <input type="password" placeholder="password" onChange={this.onPasswordChange} value={this.state.password}/>
          <input type="submit" value="Login"/ >
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login);
