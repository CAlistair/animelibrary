import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id='footer'>
      <div className="footer__container">
        <Link to="/">
          <img className='footer__logo' src={logo} alt="" />
        </Link>
          <ul className='footer__links'>
            <li><Link to="/" className='footer__link'>Home</Link></li>
            <li><Link to="/search" className='footer__link'>Search</Link></li>
            <li><Link to="/random" className='footer__link'>Random</Link></li>
          </ul>
          <div className="copyright">
            <p>AnimeLibrary &#169; 2023</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer
