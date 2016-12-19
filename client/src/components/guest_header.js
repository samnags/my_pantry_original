import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/home'>My Pantry</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem><Link to='/signup'>Sign Up</Link></NavItem>
        <NavItem><Link to='/login'>Log In</Link></NavItem>
      </Nav>
    </Navbar>
  )
}

module.exports = Header
