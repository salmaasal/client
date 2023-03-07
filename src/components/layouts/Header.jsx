import React, { Component } from 'react'
import {Link } from 'react-router-dom'


const Header = () => {
  return (
  <>
    <nav class="navbar bg-dark">
    <Link to="/"><h1>DevConnector</h1></Link>
    <ul>
      <li><Link to="Profiles.html">Developers</Link></li>
      <li><Link to="/register">Signup</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
    </nav>
  </>
  )
}

export default Header
