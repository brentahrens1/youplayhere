import React from 'react'
import '../../sass/_home.scss'

import Nav from '../NavBar/NavBar'

import { Link } from 'react-router-dom'

import landingVideo from '../../assets/LandingVideo/landing4.mp4'

const Home = () => {

    return (
        <div className="home">
            <div className="home__inner">
                <div className="home__content">
                    <h1>You Play Here</h1>
                    <h2>Ines Vogelfang | Interactive Map</h2>
                    <p>
                       As Immigrants, how do we find our communities? 
                       Can it be through a recreational activity in a public space? / In this
                       project you'll hear me trying to find the answer while you navigate 
                       through a made up map of New York City's public spaces
                    </p>
                    <button><h2><Link to="/play">Play Here</Link></h2></button>
                </div>
                <video autoPlay muted loop className="landing-video">
                    <source src={landingVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Home