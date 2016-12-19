import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/signin'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'


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
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="/home">My Pantry</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="/newpantry">Add a Pantry</NavItem>
          <NavItem href="/" onClick={this.logout}>Log Out</NavItem>
        </Nav>
      </Navbar>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoggedInHeader)
