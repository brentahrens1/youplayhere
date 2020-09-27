import React from 'react'
import '../../sass/_play-here.scss'

// symbols

import chinatownLong from '../../assets/images/symbols/Chinatownlong.png'
import chinatownLong2 from '../../assets/images/symbols/Chinatownlong2.png'
import cricket1 from '../../assets/images/symbols/Cricket1.png'
import sunset from '../../assets/images/symbols/sunset.png'

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
            </div>
        </div>
    )
}

export default PlayHere