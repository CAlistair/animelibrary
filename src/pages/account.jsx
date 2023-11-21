import React from 'react'
import Navbar from '../components/navbar'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Account({ isMenuOpen, setIsMenuOpen }) {
  return (
    <section className='account'>
                  <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu/>}
            <div className="account__container">
                <div className="account--info">
                    <div className="account--header">
                        <ul>
                            <h1>Account: Name</h1>
                        </ul>
                    </div>
                    <div className="account--list">

                    </div>
                </div>
            </div>
            <Footer />
    </section>
  )
}

export default Account
