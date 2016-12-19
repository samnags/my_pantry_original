import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/signin'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'
import '../../public/App.css'


class LoggedInHeader extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  renderPantries() {
    return this.props.pantries.map(pantry => {
       return <NavItem><Link to={`/pantries/${pantry.id}`}>{pantry.location}</Link></NavItem>
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
          <Link to='/home'>My Pantry</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Link to='/newpantry'>Add a Pantry</Link></NavItem>
          <NavItem><Link to='/' onClick={this.logout}>Log Out</Link></NavItem>
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
  return {pantries: state.pantry.pantries }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader)
