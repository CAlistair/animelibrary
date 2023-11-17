import React, { useState } from 'react'
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <section id='login'>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
        <div className="container">
            <div className="login__info">
                <h1>Sign In</h1>
                <form className="login__form">
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
                    <button className='form__btn primary--btn' onClick="">Login</button>
                    </div>
                </form>
                <div className="login__cut">
                <h2> OR</h2>
                </div>
                    <Link to="/signup">
                    <button className='form__btn secondary--btn'>Sign Up</button>
                    </Link>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Login
