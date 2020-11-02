import React from 'react'
import '../../sass/_more.scss'

import SecondaryNav from '../SecondaryNav/SecondaryNav'
import ContactForm from '../ContactForm/ContactForm'

const More = () => {
    return (
        <div className="more">
            <SecondaryNav />
            <ContactForm />
        </div>
    )
}

export default More