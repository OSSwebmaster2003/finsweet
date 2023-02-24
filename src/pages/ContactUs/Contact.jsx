import React from 'react';
import facebook_icon from "../../assets/icons/facebook_icon.png";
import twitter_icon from "../../assets/icons/twitter_icon.png";
import linkedin_icon from "../../assets/icons/linkedin_icon.png";
import "./contact.scss";
import YandexMap from '../../components/Map/YandexMap';

function Contact(props) {
  return (
    <div className='contact_page'>
      <div className="contact_us_section">
        <div className="contact_wrapper">
          <div className="contact_main">
            <div className="contact_main_header">
              <div className="empty_line"></div>
              <h2>Contact us</h2>
            </div>
            <div className="contact_main_body">
              <h1>We'd love to hear from you</h1>
              <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
            </div>
          </div>
          <div className="contact_details">
          <div>
            <h1>Let's talk! </h1>
            <span><p>+1 23 456 789</p> <p>hello@finsweet.com</p></span>
          </div>
          <div>
            <h1>Headoffice</h1>
            <p>8 Brewery Drive, Hudson, NH 03051 USA</p>
          </div>
          <div>
            <h1>Branch Office</h1>
            <p>178 Marconi St., Venice, 34293 Italy</p>
            <div className="buttons">
              <a href="https://www.facebook.com/thatsfinsweet/" target="blank">
                <img src={facebook_icon} alt="" />
              </a>
              <a href="https://twitter.com/thatsfinsweet?lang=en" target="blank">
                <img src={twitter_icon} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/finsweet/" target="blank">
                <img src={linkedin_icon} alt="" />
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="form_section">
        <div className="form_wrapper">
          <form action="">
            <div>
              <div className="inner_div">
                <label htmlFor="name">First Name</label>
                <input type="text" id='name' placeholder='John' />
              </div>
              <div className="inner_div">
                <label htmlFor="surname">Last Name</label>
                <input type="text" id='surname' placeholder='Doe' />
              </div>
            </div>
            <div>
              <div className="inner_div">
                <label htmlFor="email">Email Id</label>
                <input type="email" id='email' placeholder='johndoe@gmail.com' />
              </div>
              <div className="inner_div">
                <label htmlFor="subject">Subject</label>
                <input type="text" id='subject' placeholder='' />
              </div>
            </div>
            <div className="comments">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" placeholder='Type your Messege'></textarea>
            </div>
            <button type='submit'>Send message</button>
          </form>
        </div>
      </div>
      <div className="map_section">
        <YandexMap/>
      </div>
    </div>
  );
}

export default Contact;