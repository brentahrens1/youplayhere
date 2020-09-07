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
                <h2><Link to="/play">You Play Here</Link></h2>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item"><Link to="/">Home</Link></li>
                <li className="nav__list-item dropdown-trigger">About
                    <ul className="nav__dropdown">
                        <li className="nav__dropdown-item"><Link to="/about-you-play-here">What's You Play Here?</Link></li>
                        <li className="nav__dropdown-item"><Link to="/protagonist">Protagonist</Link></li>
                        <li className="nav__dropdown-item"><Link to="/contact">More about Ines / Contact</Link></li>
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
                    <li className="overlay__item" onClick={() => setIsOpen(!isOpen)}><Link to="/">Home</Link></li>
                    <li className={`overlay__item ${isMobileDropdown ? 'overlay__trigger-active' : 'overlay__trigger' }`} onClick={() => setMobileDropdown(!isMobileDropdown)}>About
                        <ul className={`overlay__dropdown ${isMobileDropdown ? 'overlay__dropdown-show' : ''}`}>
                            <li className="overlay__dropdown-item" onClick={() => setIsOpen(!isOpen)}><Link to="/about-you-play-here">What's You Play Here?</Link></li>
                            <li className="overlay__dropdown-item" onClick={() => setIsOpen(!isOpen)}><Link to="protagonist">Protagonist</Link></li>
                            <li className="overlay__dropdown-item" onClick={() => setIsOpen(!isOpen)}><Link to="/contact">More about Ines / Contact</Link></li>
                        </ul>
                    </li>
                    <li className="overlay__item">News</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar