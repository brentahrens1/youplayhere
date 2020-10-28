import React from 'react'
import '../../sass/_about.scss'

import SecondaryNav from '../SecondaryNav/SecondaryNav'

import profile from '../../assets/images/profile/profile.jpg'
import laurel1 from '../../assets/images/profile/laurels/laurel1.jpg'
import laurel2 from '../../assets/images/profile/laurels/laurel2.png'
import laurel3 from '../../assets/images/profile/laurels/laurel3.png'

const About = () => {
    return (
        <div className="about">
            <SecondaryNav />
            <div className="about__inner">
                <div className="about-left">
                    <div className="about-profile">
                        <img src={profile} alt="Inés Vogelfang | Profile" />
                    </div>
                    <div className="about-content__laurels">
                        <div className="laurel">
                            <img src={laurel2} alt="Inés Vogelfang | Laurels" />
                        </div>
                        <div className="soul">
                            <img src={laurel3} alt="Inés Vogelfang | Laurels 2" />
                        </div>
                        <div className="dctv">
                            <img src={laurel1} alt="Inés Vogelfang | Laurels 3" />
                        </div>
                    </div>
                </div>
                <div className="about-content">
                    <p>Inés Vogelfang is a Brooklyn based editor from Argentina. She studied film at The University of Buenos Aires, and holds a Masters in Media Studies and Documentary Film degree from The New School in New York City.</p> 
                    <p>Some short documentaries she directed and edited were screened at DOCNYC, Corto Circuito, Offside Film Fest, Alamo Drafthouse, and purchased by Filmin in Europe. A fiction short Inés edited, “Leo’s Shoulder” by Carlos Ledesma, was screened at BAFICI. She was part of the editing team in feature documentaries that went onto IFP labs, and International Film Festivals like DOCNYC, Venice Film Festival, and SXSW.</p>
                    <p>
                        Inés is an alumna of the Imagine Science Film Festival, and with “You Play Here”, her interactive documentary about immigration and the public space, she was part of DCTV’s Documentary WIP Lab with Yance Ford. She was a 2019-20 mentee at the Karen Schmeer Diversity in The Edit Room Fellowship.
                        Inés speaks Spanish, French, Portuguese, and English, which enables her to edit projects from all over the world.
                    </p>
                </div>
            </div>
            <h1>About</h1>
        </div>
    )
}

export default About