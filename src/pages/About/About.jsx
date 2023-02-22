import React from 'react';
import video_play_icon from "../../assets/icons/video_play_icon.png";
import banner from "../../assets/about/banner.png";
import "./about.scss";

function About(props) {
  return (
    <div className='about_us_page'>
      <div className="know_about_us_section">
        <div className="know_about_us_wrapper">
          <div className="know_about_us_header">
            <div className="empty_line"></div>
            <h2>Know about us</h2>
          </div>
          <div className="know_about_us_info">
            <h1>We are a nonprofit team working worldwide</h1>
            <div>
              <h3>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_section">
        <div className="banner_wrapper">
          <div className="white_bg"></div>
          <div className="green_bg"></div>
          <img src={banner} alt="" />
          <img className='play_icon' src={video_play_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;