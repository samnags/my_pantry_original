import React, { Component }  from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUp } from '../actions/signin'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {name: '', email: '', password: ''}

    this.handleClick = this.handleClick.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleClick(event) {
    event.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <label>Name</label>
          <input type="text" placeholder="name" onChange={this.onNameChange} value={this.state.name}/>
          <label>Email</label>
          <input type="text" placeholder="email" onChange={this.onEmailChange} value={this.state.email}/>
          <label>Password</label>
          <input type="password" placeholder="password" onChange={this.onPasswordChange} value={this.state.password}/>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp);
