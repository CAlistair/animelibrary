import React, { useState } from 'react'
import Menu from '../components/menu'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    <button className='form__btn primary--btn' onClick="">Sign Up</button>
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
