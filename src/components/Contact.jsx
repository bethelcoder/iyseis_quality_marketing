import '../styles/Contact.css'
import React from 'react'
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'
import white_arrow from '../assets/white-arrow.png'
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6b39dd6-be0a-4cae-95fd-31915e6113c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };

  return (
    <section className='contact-container' style={{paddingTop:5 + 'rem'}}>
      <h2 className='section-title service-h2'>Get In Touch</h2>
      <div className='title-underline'></div>
      <p className="section-description">
      Ready to elevate your brand? Let's start a conversation about your marketing needs.
          </p>
      <section className='contact'>
        <div className='contact-col' role='section'>
            {/* <p>Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community</p> */}
            <ul>
                <li><Mail size={24} className='contact-icon'/>iyseisquality@gmail.com</li>
                <li><Phone size={24} className='contact-icon'/></li>
                <li><MapPin size={24} className='contact-icon'/></li>
            </ul>

        </div>

        <div className='contact-col' role='section'>
            <form onSubmit={onSubmit}>
              <input type='text' name='name' placeholder='Enter your name' required />
              <input type='tel' name='phone' placeholder='Enter your mobile number' required />
              <input type='email' name='email' placeholder='Enter your email address' required />
              <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
              <button type='submmit' className='btn btn-primary'>Send message</button>
            </form>
            <span>{result}</span>
        </div>
    </section>
    </section>
    
  )
}

export default Contact