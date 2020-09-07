import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <div className="home__overlay">
                <div className="home__content">
                    <h1>You Play Here</h1>
                    <p>Interactive map and mini documentaries by Ines Vogelfang</p>
                    <button><Link to="/play">Play Here</Link></button>
                </div>
            </div>
            <div className="home__inner">
            </div>
        </div>
    )
}

export default Home