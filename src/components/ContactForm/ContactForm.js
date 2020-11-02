import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import '../../sass/_more.scss'

export default function ContactUs() {
  const [ emailSent, setEmailSent ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ message, setMessage ] = useState('')

  function clearInputs() {
    setEmail('')
    setName('')
    setMessage('')
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('youplayhere', 'template_292n6oy', e.target, 'user_VlUhrdqDHdrVLUA2r0Fv7')
      .then((result) => {
        setEmailSent(<p>Thank you, Your message has been sent.</p>)
        clearInputs()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h1>This project is meant to keep growing so if you have any questions or if you'd like to participate with your community connect here</h1>
      {emailSent}
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Email</label>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Message</label>
      <textarea rows="10" name="message" required value={message} onChange={(e) => setMessage(e.target.value)} />
      <input className="button" type="submit" value="Send" />
    </form>
  );
}