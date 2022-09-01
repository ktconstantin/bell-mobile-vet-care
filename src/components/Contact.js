import React from 'react';
import { MdEmail, MdMessage } from 'react-icons/md';


export default function Contact() {
  return (
    <div>
      <h2>Feel free to reach out with any questions you have via email or text</h2>
      <h3>Don't you fucking call though</h3>

      <div className="contact__container">
        <MdEmail className="contact__icon"/>
        <div className="contact__info"><a href="mailto:bellmobilevetcare@gmail.com">Email</a></div>
      </div>

      <div className="contact__container">
        <MdMessage className="contact__icon"/>
        <div className="contact__info">
          Text: (123) 456-7890
        </div>
      </div>
    </div>
  )
}


