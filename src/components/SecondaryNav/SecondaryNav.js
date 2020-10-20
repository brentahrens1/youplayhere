import React from 'react'

import { Link } from 'react-router-dom'

const SecondaryNav = () => {
    return (
        <>
        <div className="secondary-nav">
            <div className="nav__logo">
                <h2><Link to="/play">You Play Here</Link></h2>
            </div>
            <div className="hamburger">
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
        </div>
        <div className="overlay">
            <ul className="overlay__list">
                <li className="nav__list-item"><Link to="/more">About</Link></li>
                <li className="nav__list-item"><Link to="/more">Contact</Link></li>
            </ul>
        </div>
        </>
    )
}

export default SecondaryNav