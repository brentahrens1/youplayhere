import React, { useState } from 'react'
import '../../sass/_navbar.scss'

import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="nav">
            <div className="nav__logo">
                <h2><Link to="/play">You Play Here</Link></h2>
            </div>
            <ul className="nav__list">
                <li className="nav__list-item dropdown-trigger"><Link to="/more">More</Link></li>
            </ul>
        </div>
    )
}

export default NavBar