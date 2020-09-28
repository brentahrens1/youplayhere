import React from 'react'
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
import pigeon from '../../assets/images/symbols/Pigeon.png'
import rat from '../../assets/images/symbols/rat.png'
import sunset from '../../assets/images/symbols/sunset-park-bid_0.jpg'

// maps

import brooklyn from '../../assets/images/maps/_Brooklyn02.png'
import chinatown from '../../assets/images/maps/_Chinatown02.png'
import eastRiver from '../../assets/images/maps/_East_River_02.png'
import queens from '../../assets/images/maps/_Queens_02.png'
import uptown from '../../assets/images/maps/_Uptown_02.png'


const PlayHere = () => {
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
                <div className="play__grid-piece symbol symbol-one">
                    <img src={cricketBug} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-two">
                    <img src={cricketWhite} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-three">
                    <img src={squirrel} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-four">
                    <img src={apple} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-five">
                    <img src={rat} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-six">
                    <img src={music} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-seven">
                    <img src={pigeon} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-eight">
                    <img src={bridge} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-nine">
                    <img src={location} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-ten">
                    <img src={cup} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-eleven">
                    <img src={globe} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-twelve">
                    <img src={bench} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-thirteen">
                    <img src={location} alt="Uptown" />
                </div>
                <div className="play__grid-piece symbol symbol-fourteen">
                    <img src={sunset} alt="Uptown" />
                </div>
            </div>
        </div>
    )
}

export default PlayHere