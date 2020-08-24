import React, { useState } from 'react'
import '../../sass/_navbar.scss'

const NavBar = () => {
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
            <div className="hamburger">
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
        </div>
    )
}

export default NavBar