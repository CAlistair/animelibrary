import React, { useState } from 'react'
import Menu from '../components/menu'
import Navbar from '../components/navbar'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { login } from '../app/userSlice';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signUp = (e) => {
      e.preventDefault()

      if (!fName){
        return alert("Please enter your first name")
      }
      if (!lName){
        return alert("Please enter your last name")
      }

      auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
        //To sign up a profile first update a profile then login a user
        userAuth.user.updateProfile({
          displayName: fName
      }).then(() =>{
        //Have to dispatch an action called login
        dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: fName,
        })
        )
         navigate("/account")
      })
    }).catch((error) => alert(error.message))
    }

  return (
    <section id='signup'>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
        <div className="container">
            <div className="signup__info">
                <h1>Sign Up Now</h1>
                <form className="signup__form">
                <label htmlFor="fName">First Name</label>
                    <input 
                    type="text"
                    id='fName'
                    value={fName}
                    onChange={(e) => setFName(e.target.value)} 
                    />
                    <label htmlFor="lName">Last Name</label>
                    <input 
                    type="text"
                    id='lName'
                    value={lName}
                    onChange={(e) => setLName(e.target.value)} 
                    />
                    <label htmlFor="email">Email Address</label>
                    <input 
                    type="email"
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                    <div className="form__center">
                    <button className='form__btn primary--btn' onClick={signUp}>Sign Up</button>
                    </div>
                </form>
                <div className="signup__cut">
                <h2> OR</h2>
                </div>
                    <Link to="/login">
                    <button className='form__btn secondary--btn'>Login</button>
                    </Link>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Signup
