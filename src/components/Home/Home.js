import React, { useEffect, useState } from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import landingVideo from '../../assets/LandingVideo/landing4.mp4'
import landingAudio from '../../assets/audio/streets.mp3'

import ReactAudioPlayer from 'react-audio-player'

const Home = () => {
    // const [ audio, setAudio ] = useState(null)
    // const [ toggleBtn, setToggleBtn ] = useState(false)

    // const stopPlayer = () => {
    //     setAudio( <ReactAudioPlayer
    //         src={landingAudio}
    //         muted
    //     />)
    //     setToggleBtn(!toggleBtn)
    // }
    // const resumePlayer = () => {
    //     setAudio( <ReactAudioPlayer
    //         src={landingAudio}
    //         autoPlay
    //         loop
    //     />)
    //     setToggleBtn(!toggleBtn)
    // }

    // useEffect(() => {
    //         setAudio( <ReactAudioPlayer
    //             src={landingAudio}
    //             autoPlay
    //             loop
    //         />)
    // }, [])

    return (
        <div className="home">
            <div className="home__inner">
                <div className="home__content">
                    <p className="name">Inés Vogelfang | Interactive Map</p>
                    <h1>You Play Here</h1>
                    <p>
                       As Immigrants, how do we find our communities?<br />
                       Can it be through a recreational activity in a public space?<br /> In this
                       project you'll hear me trying to find the answer while you navigate 
                       through a made up map of New York City's public spaces
                    </p>
                    <h2 className="button"><Link to="/play">Play Here</Link></h2>
                </div>
                <video playsInline autoPlay muted loop className="landing-video">
                    <source src={landingVideo} type="video/mp4" />
                </video>
            </div>
            {/* {
            toggleBtn ? 
            <div className="pause-btn">
                <button onClick={resumePlayer}>Resume</button>
            </div>
            :
            <div className="pause-btn">
                <button onClick={stopPlayer}>Pause</button>
            </div>
            } */}
        </div>
    )
}

export default Home