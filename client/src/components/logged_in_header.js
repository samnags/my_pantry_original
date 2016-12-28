import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/signin'
import { fetchPantries } from '../actions/pantry'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import '../../public/App.css'

class LoggedInHeader extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  // handleClick() {
  //   debugger
  // }

  componentWillMount() {
    this.props.fetchPantries()
  }

  renderPantries() {
    return this.props.pantries.map((pantry) => {
      return(
        <LinkContainer key={pantry.id} to={`/pantries/${pantry.id}`}>
         <NavItem>{pantry.location}</NavItem>
        </LinkContainer>
      )
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
          <LinkContainer to='/newpantry'>
            <NavItem>Add a Pantry</NavItem>
          </LinkContainer>
          <IndexLinkContainer to='/'>
            <NavItem onClick={this.logout}>Log Out</NavItem>
          </IndexLinkContainer>
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
  return bindActionCreators({ fetchPantries, logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedInHeader)
{/* <NavItem>{pantry.location}</NavItem> */}
