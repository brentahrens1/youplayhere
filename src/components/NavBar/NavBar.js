import React, { useState } from 'react'

const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav__logo">
                <h1>You Play Here</h1>
            </div>
            <div className="nav__list">
                <ul>
                    <li>Home</li>
                    <li>Home
                        <ul className="nav__dropdown">
                            <li>What's You Play Here?</li>
                            <li>Protagonist</li>
                            <li>More about Ines / Contact</li>
                        </ul>
                    </li>
                    <li>News</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar