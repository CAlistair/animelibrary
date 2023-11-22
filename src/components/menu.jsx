import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectUser } from '../app/userSlice'

function Menu() {

  const user = useSelector(selectUser)

  return (
    <div className='menu__bar'>
      <Link className='menu__item' to="/">Home</Link>
      <Link className='menu__item' to="/search">Search</Link>
      <Link className='menu__item' to="/random">Random</Link>
      {user ? (
      <Link to="/account">
        <button className="btn">Account</button>
      </Link> ) : (
        <Link to="/login">
        <button className="btn">Login</button>
      </Link>
      )
      }
    </div>
  )
}

export default Menu
