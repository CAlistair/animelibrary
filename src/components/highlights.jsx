import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Highlights() {
  return (
    <div className="landing__info">
                <div className="landing__container">
                    <FontAwesomeIcon className='landing__icon' icon="bookmark" />
                    <h2><span className='highlight'>BookMark</span></h2>
                    <p>
                        Add any anime to your list and build upon it
                    </p>
                </div>
                <div className="landing__container">
                    <FontAwesomeIcon className='landing__icon' icon="server" />
                    <h2><span className='highlight'>Wide Range</span></h2>
                    <p>
                        Over 5000 animes to pick from
                    </p>
                </div>
                <div className="landing__container">
                    <FontAwesomeIcon className='landing__icon' icon="fast-forward" />
                    <h2><span className='highlight'>Fast and easy</span></h2>
                    <p>
                        Easy to use applications just hit search and add
                    </p>
                </div>
            </div>
  )
}

export default Highlights
