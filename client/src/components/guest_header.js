import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
        <a href="/home">My Pantry</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="/signup">Sign Up</NavItem>
        <NavItem href="/login">Log In</NavItem>
      </Nav>
    </Navbar>
  )
}

module.exports = Header
