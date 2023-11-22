import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout, selectUser } from "../app/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () =>{
    auth.signOut().then(() =>{
        dispatch(logout())
        navigate('/')
    }).catch((error) => alert(error.message))
}



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
        { user ? (
          <Link to="/account">
          <button className="btn login">Account</button>
        </Link>
        ) : (
        <Link to="/login">
          <button className="btn login">Login</button>
        </Link>
        )
        }
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
