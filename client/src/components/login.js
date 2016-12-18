import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/signin'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {credentials: { email: '', password: ''} }
    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }

  onChange(event) {
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    this.setState({credentials: credentials})
  }

  handleClick(event) {
    event.preventDefault()
    this.props.login(this.state.credentials)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <label>Email</label>
          <input type="text" placeholder="email" name="email" onChange={this.onChange} value={this.state.credentials.email} />
          <label>Password</label>
          <input type="password" placeholder="password" name="password" onChange={this.onChange} value={this.state.credentials.password} />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login);
