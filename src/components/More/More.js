import React from 'react'
import '../../sass/_more.scss'

const More = () => {
    return (
        <div className="more">
            <form className="contact-form">
                <h1>Feel free to reach out if you would like to contribute!</h1>
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