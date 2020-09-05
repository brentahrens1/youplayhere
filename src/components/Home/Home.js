import React from 'react'
import '../../sass/_home.scss'

const Home = () => {
    return (
        <div className="home">
            <div className="home__overlay">
                <div className="home__content">
                    <h1>You Play Here</h1>
                    <p>Interactive map and mini documentaries by Ines Vogelfang</p>
                    <button>Play Here</button>
                </div>
            </div>
            <div className="home__inner">
            </div>
        </div>
    )
}

export default Home