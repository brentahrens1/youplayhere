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
                        <li>What's You Play Here?</li>
                        <li>Protagonist</li>
                        <li>More about Ines / Contact</li>
                    </ul>
                </li>
                <li className="nav__list-item">News</li>
            </ul>
        </div>
    )
}

export default NavBar