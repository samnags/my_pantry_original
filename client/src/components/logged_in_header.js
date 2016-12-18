import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/signin'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class LoggedInHeader extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return(
      <div>
        <span><Link to="/home">Home</Link></span>
        <span><Link to="/newpantry">Add a Pantry</Link></span>
        <span><Link to="/" onClick={this.logout}>Log Out</Link></span>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoggedInHeader)
