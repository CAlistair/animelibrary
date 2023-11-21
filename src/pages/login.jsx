import React, { useState } from 'react'
import Menu from '../components/menu';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { login } from '../app/userSlice';
import { auth } from "../firebase"

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const signIn = (e) => {
      e.preventDefault();


      // email and password inputs are ran through and dispacthed with login action
      auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        
        // .push pushes the user to another route if sign in successful
      }).catch((error) => alert(error.message))
      // If sign in not successful error messgae
    };


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
                    <button className='form__btn primary--btn' onClick={signIn}>Login</button>
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
