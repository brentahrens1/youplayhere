import React, { useState } from 'react'
import '../../sass/_navbar.scss'

const NavBar = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <div className="nav">
            <div className="nav__logo">
                <h2>You Play Here</h2>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item">Home</li>
                <li className="nav__list-item dropdown-trigger">About
                    <ul className="nav__dropdown">
                        <li className="nav__dropdown-item">What's You Play Here?</li>
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
                    <li className="overlay__item overlay__trigger">About
                        <ul className="overlay__dropdown">
                            <li className="overlay__dropdown-item">What's You Play Here?</li>
                            <li className="overlay__dropdown-item">Protagonist</li>
                            <li className="overlay__dropdown-item">More about Ines / Contact</li>
                        </ul>
                    </li>
                    <li className="overlay-item">News</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar