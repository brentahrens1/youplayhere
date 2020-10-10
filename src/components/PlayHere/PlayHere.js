import React, { useState } from 'react'
import '../../sass/_play-here.scss'

// symbols

import cricketBug from '../../assets/images/symbols/Cricketbugwhite.png'
import cricketWhite from '../../assets/images/symbols/Cricketwhite.png'
import squirrel from '../../assets/images/symbols/Squirrel.png'
import apple from '../../assets/images/symbols/apple.png'
import bench from '../../assets/images/symbols/bench.png'
import bridge from '../../assets/images/symbols/bridge.png'
import cup from '../../assets/images/symbols/cup.png'
import globe from '../../assets/images/symbols/globe.png'
import location from '../../assets/images/symbols/Location.png'
import music from '../../assets/images/symbols/music (2).png'
import pigeon from '../../assets/images/symbols/PigeonS.png'
import rat from '../../assets/images/symbols/pizza_Rat.png'
import sunset from '../../assets/images/symbols/sunset-park-bid_0.jpg'
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


const PlayHere = () => {
    const [ showVid, setShowVid ] = useState(false)
    const [currentVid, setCurrentVid] = useState("")

    const handleClick = (e) => {
        setShowVid(true)
        setCurrentVid(e.target.id)
        console.log(e.target.id)
        console.log(showVid)
    }

    const handleClear = () => {
        setShowVid(!showVid)
        setCurrentVid('')
    }

    return (
        <div className="play">
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
                <div className="play__grid-piece symbol symbol-one">
                    <img id="1" onClick={handleClick} src={cricketBug} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-two">
                    <img id="2" onClick={handleClick} src={cricketWhite} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-three">
                    <img id="3" onClick={handleClick} src={squirrel} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-four">
                    <img id="4" onClick={handleClick} src={apple} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-five">
                    <img id="5" onClick={handleClick} src={rat} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-six">
                    <img id="6" onClick={handleClick} src={music} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-seven">
                    <img id="7" onClick={handleClick} src={pigeon} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-eight">
                    <img id="8" onClick={handleClick} src={bridge} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-nine">
                    <img id="9" onClick={handleClick} src={startHere} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-ten">
                    <img id="10" onClick={handleClick} src={cup} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-eleven">
                    <img id="11" onClick={handleClick} src={globe} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-twelve">
                    <img id="12" onClick={handleClick} src={bench} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-thirteen">
                    <img id="13" onClick={handleClick} src={projectCredits} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-fourteen">
                    <img id="14" onClick={handleClick} src={sunset} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-fifthteen">
                    <img id="14" onClick={handleClick} src={sunsetBack} alt="Uptown" />
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
        </div>
    )
}

export default PlayHere