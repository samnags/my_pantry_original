import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/signup">Sign Up</Link></span>
      <span><Link to="/login">Log In</Link></span>
    </div>
  )
}

module.exports = Header
