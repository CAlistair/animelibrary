import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  console.log(isMenuOpen);

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link" href="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="nav__link" href="">
              Search
            </Link>
          </li>
          <li>
            <Link to="/random" className="nav__link" href="">
              Random
            </Link>
          </li>
        </ul>
        <Link to="/login">
          <button className="btn login">Login</button>
        </Link>
        <div
          className="btn__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          icon="bars"
        >
        {isMenuOpen ? (
          <FontAwesomeIcon icon="xmark" className="btn__menu" />
        ) : (
          <FontAwesomeIcon className="btn__menu" icon="bars" />
        )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
