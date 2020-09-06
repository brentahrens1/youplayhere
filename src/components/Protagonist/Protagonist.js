import React from 'react'
import '../../sass/_protagonist.scss'

import Grannies from '../../assets/images/protagonist/grannies.jpg'
import Cricket from '../../assets/images/protagonist/cricket.jpg'
import Soccer from '../../assets/images/protagonist/soccer.jpg'

const Protagonist = () => {
    return (
        <div className="protagonist">
            <div className="protagonist__content">
                <h2>Protagonist</h2>
                <h3>Meet Hua Pan and the grannies from the MuLan Art Group, The New York Himalayan Cricket Clubs, and the Prospect Park soccer team & Alex Austin.</h3>
                <div className="protagonist__content-image">
                    <img src={Grannies} alt="grannies" />
                </div>
                <h2>THE MULAN ART GROUP</h2>
                <p>Square dancing in public spaces is a tradition for the grannies in China, they keep the tradition alive in New York City, also using this space to create community and sisterhood.</p>
                <div className="protagonist__content-image">
                    <img src={Cricket} alt="cricket" />
                </div>
                <h2>THE NEW YORK HIMALAYAN CRICKET CLUBS</h2>
                <p>While staying in refugee camps in India, these men met and took on the Indian tradition of cricket (brought to India by the British colony). They gather to practice and arrange championships, in these gatherings they also have the opportunity to build camaraderie, recommend each other for jobs, and arrange hang outs.</p>
                <div className="protagonist__content-image">
                    <img src={Soccer} alt="soccer" />
                </div>
                <h2>PROSPECT PARK HAITIAN SOCCER TEAM</h2>
                <p>Every Friday at the same time and in the same place these men, in the majority from Haiti, gather to play soccer and to speak Creole. Some men go just for the purpose of speaking their native Creole!</p>
            </div>
        </div>
    )
}

export default Protagonist