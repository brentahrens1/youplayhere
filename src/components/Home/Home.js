import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import landingVideo from '../../assets/LandingVideo/landing4.mp4'

const Home = () => {

    return (
        <div className="home">
            <div className="home__inner">
                <div className="home__content">
                    <p className="name">Inés Vogelfang | Interactive Map</p>
                    <h1>You Play Here</h1>
                    <p>
                       As Immigrants, how do we find our communities? 
                       Can it be through a recreational activity in a public space?<br />In this
                       project you'll hear me trying to find the answer while you navigate 
                       through a made up map of New York City's public spaces
                    </p>
                    <h2 className="button"><Link to="/play">Play Here</Link></h2>
                </div>
                <video playsInline autoPlay muted loop className="landing-video">
                    <source src={landingVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Home