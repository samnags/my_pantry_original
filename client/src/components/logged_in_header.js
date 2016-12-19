import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/signin'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import '../../public/App.css'


class LoggedInHeader extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  renderPantries() {
    return this.props.pantries.map(pantry => {
       return <NavItem href={`/pantries/${pantry.id}`}>{pantry.location}</NavItem>
    })
  }

  logout() {
    event.preventDefault()
    this.props.logout()
  }

  render() {
    return(
      <div>
      <Navbar className="main">
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
      <Navbar className="sub">
        <Nav>
          {this.renderPantries()}
        </Nav>
      </Navbar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {pantries: state.pantry }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader)
