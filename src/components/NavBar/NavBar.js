import React, { useState } from 'react'
import '../../sass/_navbar.scss'

import { Link } from 'react-router-dom'

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isMobileDropdown, setMobileDropdown ] = useState(false)

    window.onresize = () => (window.innerWidth > 650 && isOpen) && setIsOpen(false)

    return (
        <div className="nav">
            <div className="nav__logo">
                <h2>You Play Here</h2>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item">Home</li>
                <li className="nav__list-item dropdown-trigger">About
                    <ul className="nav__dropdown">
                        <li className="nav__dropdown-item"><Link to="/about-you-play-here">What's You Play Here?</Link></li>
                        <li className="nav__dropdown-item">Protagonist</li>
                        <li className="nav__dropdown-item">More about Ines / Contact</li>
                    </ul>
                </li>
                <li className="nav__list-item">News</li>
            </ul>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
            <div className={`overlay ${isOpen ? 'show' : ''}`}>
                <ul className="overlay__list">
                    <li className="overlay__item">Home</li>
                    <li className={`overlay__item ${isMobileDropdown ? 'overlay__trigger-active' : 'overlay__trigger' }`} onClick={() => setMobileDropdown(!isMobileDropdown)}>About
                        <ul className={`overlay__dropdown ${isMobileDropdown ? 'overlay__dropdown-show' : ''}`}>
                            <li className="overlay__dropdown-item"><Link to="/about-you-play-here">What's You Play Here?</Link></li>
                            <li className="overlay__dropdown-item">Protagonist</li>
                            <li className="overlay__dropdown-item">More about Ines / Contact</li>
                        </ul>
                    </li>
                    <li className="overlay__item">News</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar