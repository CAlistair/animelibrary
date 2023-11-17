import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu__bar'>
      <Link className='menu__item' to="/">Home</Link>
      <Link className='menu__item' to="/search">Search</Link>
      <Link className='menu__item' to="/random">Random</Link>
      <Link to="/login">
          <button className="btn">Login</button>
        </Link>
    </div>
  )
}

export default Menu
