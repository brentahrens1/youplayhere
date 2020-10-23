import React, { useState} from 'react'
import '../../sass/_navbar.scss'

import { Link } from 'react-router-dom'

const SecondaryNav = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    
    return (
        <div className="secondary-nav">
            <div className="nav__logo">
                <h2><Link to="/play">You Play Here</Link></h2>
            </div>
            <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <div className={`hamburger__bar ${isOpen ? "active" : "closed"}`} />
                <div className={`hamburger__bar ${isOpen ? "active" : "closed"}`} />
                <div className={`hamburger__bar ${isOpen ? "active" : "closed"}`} />
            </div>
            <div className={`overlay ${isOpen ? "show" : ""}`}>
                <ul className="overlay__list">
                    <li className="nav__list-item"><Link to="/about">About</Link></li>
                    <li className="nav__list-item"><Link to="/contact">Contact</Link></li>
                </ul>
                {/* <div className="close" onClick={() => setIsOpen(!isOpen)}>
                    <div className="close__bar" />
                    <div className="close__bar" />
                </div> */}
            </div>
        </div>
    )
}

export default SecondaryNav