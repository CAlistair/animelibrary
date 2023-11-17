import React, { useState } from 'react'
import Menu from '../components/menu'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id='signup'>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
        <div className="container">
            <div className="signup__info">
                <h1>Sign Up Now</h1>
                <form className="signup__form">
                <label htmlFor="fname">First Name</label>
                    <input 
                    type="text"
                    id='fname'
                    value={fname}
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label htmlFor="lname">Last Name</label>
                    <input 
                    type="text"
                    id='lname'
                    value={lname}
                    onChange={(e) => setEmail(e.target.value)} 
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
