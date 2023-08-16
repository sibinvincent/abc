import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link className='textdecor' to = '/'  >
        <h1>EcomStore</h1>
      </Link>

        <Link to='/logout'>

        <button className='login-button'> Logout</button>
        </Link>

    </header>

  )
}

export default Header

