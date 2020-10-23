import React from 'react'
import '../../sass/_about.scss'

import SecondaryNav from '../SecondaryNav/SecondaryNav'

import profile from '../../assets/images/profile/profile.jpg'

const About = () => {
    return (
        <div className="about">
            <SecondaryNav />
            <div className="about__inner">
                <div className="about-profile">
                    <img src={profile} alt="Inés Vogelfang | Profile Picture" />
                </div>
                <div className="about-content">
                    <p>Inés Vogelfang is a Brooklyn based editor from Argentina. She studied film at The University of Buenos Aires, and holds a Masters in Media Studies and Documentary Film degree from The New School in New York City.</p> 
                    <p>
                        Some short documentaries she directed and edited were screened at DOCNYC, Corto Circuito, Offside Film Fest, Alamo Drafthouse, and purchased by Filmin in Europe. A fiction short Inés edited, “Leo’s Shoulder” by Carlos Ledesma, was screened at BAFICI. She was part of the editing team in feature documentaries that went onto IFP labs, and International Film Festivals like DOCNYC, Venice Film Festival, and SXSW.
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