import React from 'react'
import '../../sass/_more.scss'

import SecondaryNav from '../SecondaryNav/SecondaryNav'

const More = () => {
    return (
        <div className="more">
            <SecondaryNav />
            <form className="contact-form">
                <h1>This project is meant to keep growing so if you have any questions or if you'd like to participate with your community connect here</h1>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" rows="10" />
                <input className="button" type="submit" value="Send" />
            </form>
        </div>
    )
}

export default More