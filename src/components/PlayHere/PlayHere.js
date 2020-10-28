import React, { useState, useEffect } from 'react'
import '../../sass/_play-here.scss'

import SecondaryNav from '../SecondaryNav/SecondaryNav'

// symbols

import cricketBug from '../../assets/images/symbols/Cricketbugwhite.png'
import cricketWhite from '../../assets/images/symbols/Cricketwhite.png'
import squirrel from '../../assets/images/symbols/Squirrel.png'
import apple from '../../assets/images/symbols/apple.png'
import bench from '../../assets/images/symbols/bench.png'
import bridge from '../../assets/images/symbols/bridge.png'
import cup from '../../assets/images/symbols/cup.png'
import globe from '../../assets/images/symbols/globe.png'
import music from '../../assets/images/symbols/music (2).png'
import pigeon from '../../assets/images/symbols/PigeonS.png'
import rat from '../../assets/images/symbols/pizza_Rat.png'
import extraBushes from '../../assets/images/symbols/arbolito.png'
import projectCredits from '../../assets/images/symbols/project-credits.png'
import startHere from '../../assets/images/symbols/start-here.png'
import sunsetBack from '../../assets/images/symbols/sunset.png'

// maps

import brooklyn from '../../assets/images/maps/_Brooklyn02.png'
import chinatown from '../../assets/images/maps/_Chinatown02.png'
import eastRiver from '../../assets/images/maps/_East_River_02.png'
import queens from '../../assets/images/maps/_Queens_02.png'
import uptown from '../../assets/images/maps/_Uptown_02.png'

//videos 

import { videos } from '../../const/video'

import landingAudio from '../../assets/audio/nyc-landing.mp3'

import landingVideo from '../../assets/LandingVideo/landing.mp4'

import ReactAudioPlayer from 'react-audio-player'

// Small screen photo

import iPad from '../../assets/images/icons/ipad.png'
import macBook from '../../assets/images/icons/laptop.png'

const PlayHere = () => {
    const [ showVid, setShowVid ] = useState(false)
    const [currentVid, setCurrentVid] = useState("")
    const [ audio, setAudio ] = useState(null)
    const [ isActive, setIsActive ] = useState(14)
    const [ stopBounce, setStopBounce ] = useState(true)
    const [ endClip, setEndClip ] = useState(false)
    const [ introAnimation, setIntroAnimation ] = useState(true)

    const handleClick = (e) => {
        setShowVid(true)
        setCurrentVid(e.target.id)
        setAudio(<ReactAudioPlayer
            src={landingAudio}
            muted
        />)
        setStopBounce(!stopBounce)
    }

    const handleClear = (e) => {
        setShowVid(!showVid)
        setCurrentVid('')
        setAudio( <ReactAudioPlayer
            src={landingAudio}
            autoPlay
            loop
            muted
        />)
        setStopBounce(!stopBounce)

        isActive > 1 ? setIsActive(isActive - 1) : setIsActive(14)
    }

    useEffect(() => {
        setTimeout(function() {
            setIntroAnimation(!introAnimation)
        }, 4500)
    }, [])

    useEffect(() => {
        setTimeout(function() {
            setEndClip(!endClip)
        }, 2500)
    }, [])

    useEffect(() => {
        setAudio( <ReactAudioPlayer
            src={landingAudio}
            autoPlay
            loop
            muted
        />)
    }, [])

    return (
        <div className="container">
            <SecondaryNav />
        {
            endClip ? 
            <div className="play">
                {audio}
                <div className="play__grid">
                    <div className="play__grid-piece one">
                        <img src={brooklyn} alt="Brooklyn" />
                    </div>
                    <div className="play__grid-piece two">
                        <img src={chinatown} alt="Chinatown" />
                    </div>
                    <div className="play__grid-piece three">
                        <img src={eastRiver} alt="East River" />
                    </div>
                    <div className="play__grid-piece four">
                        <img src={queens} alt="Queens" />
                    </div>
                    <div className="play__grid-piece five">
                        <img src={uptown} alt="Uptown" />
                    </div>
                    <div className="play__grid-piece six">
                        <img src={extraBushes} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-one ${introAnimation ? 'intro-animation' : ''}  ${stopBounce && isActive == 14 ? "active-14" : ''}`}>
                        <img id="14" onClick={handleClick} src={startHere} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-two ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 13 ? "active-13" : ''}`}>
                        <img id="13" onClick={handleClick} src={bridge} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-three ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 12 ? "active-12" : ''}`}>
                        <img id="12" onClick={handleClick} src={squirrel} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-four ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 11 ? "active-11" : ''}`}>
                        <img id="11" onClick={handleClick} src={rat} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-five ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 10 ? "active-10" : ''}`}>
                        <img id="10" onClick={handleClick} src={music} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-six ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 9 ? "active-9" : ''}`}>
                        <img id="9" onClick={handleClick} src={bench} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-seven ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 8 ? "active-8" : ''}`}>
                        <img id="8" onClick={handleClick} src={pigeon} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-eight ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 7 ? "active-7" : ''}`}>
                        <img id="7" onClick={handleClick} src={apple} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-nine ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive ==  6 ? "active-6" : ''}`}>
                        <img id="6" onClick={handleClick} src={cricketBug} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-ten ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 5 ? "active-5" : ''}`}>
                        <img id="5" onClick={handleClick} src={globe} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-eleven ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 4 ? "active-4" : ''}`}>
                        <img id="4" onClick={handleClick} src={cricketWhite} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-twelve ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 3 ? "active-3" : ''}`}>
                        <img id="3" onClick={handleClick} src={cup} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-thirteen ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 2 ? "active-2" : ''}`}>
                        <img id="2" onClick={handleClick} src={sunsetBack} alt="Uptown" />
                    </div>
                    <div className={`play__grid-piece symbol symbol-fourteen ${introAnimation ? 'intro-animation' : ''} ${stopBounce && isActive == 1 ? "active-1" : ''}`}>
                        <img id="1" onClick={handleClick} src={projectCredits} alt="Uptown" />
                    </div>
                    <div className={showVid ? 'overlay-show' : 'overlay-hide'}>
                        {
                            videos.map((video, idx) => 
                                <div key={idx}>
                                    {currentVid === video.id ? video.video : null}
                                </div>
                            )
                        }
                        <div className="close" onClick={handleClear}>
                            <div className="close__bar" />
                            <div className="close__bar" />
                        </div>
                    </div>
                </div>
                <div className="small-screen">
                    <div className="small-screen__inner">
                        <h1>Rotate your screen to play.</h1>
                        <div className="ipad">
                            <img src={iPad} alt="Ines Vogelfang | Rotate your screen" />
                        </div>
                    </div>
                </div>
                <div className="mobile-screen">
                    <div className="mobile-screen__inner">
                        <h1>You cannot play here.</h1>
                        <p>Please use a tablet or desktop to enjoy the experience.</p>
                        <div className="mobile-flex">
                            <div className="ipad">
                                <img src={iPad} alt="Ines Vogelfang | You Cannot Play Here" />
                            </div>
                            <div className="macbook">
                                <img src={macBook} alt="Ines Vogelfang | You Cannot Play Here" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            :
            <>
            {audio}
            <video autoPlay muted loop className="landing-video">
                    <source src={landingVideo} type="video/mp4" />
            </video>
            </>
        }
        </div>
    )
}

export default PlayHere