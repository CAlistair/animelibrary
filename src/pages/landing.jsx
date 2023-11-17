import React, { useState } from 'react'
import Navbar from '../components/navbar'
import landingscreen from "../assets/landingscreen.png"
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Animeslider from '../components/animeslider'
import Imgcarousel from '../components/imgcarousel'
import Highlights from '../components/highlights'
import Menu from '../components/menu'

function Landing() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id='landing'>
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
        <div className="container">
            <div className="landing__header">
                <figure>
                    <img className="landing__img" src={landingscreen} alt="" />
                </figure>
                <div className="landing__header__info">
                <h1>Welcome to AnimeLibrary</h1>
                <p>
                    AnimeLibrary contains <span className='highlight'>over 5000 plus</span> animes,
                     find what fits you and when you do create your  
                     <span className='highlight'> anime list</span> with us and we'll keep it safe
                </p>
                </div>
            </div>
        </div>
        <Imgcarousel/>
        <Highlights/>
        <Footer />
    </section>
  )
}

export default Landing
