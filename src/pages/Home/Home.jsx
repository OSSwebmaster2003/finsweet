import React from 'react';
import { Link } from 'react-router-dom';
import { Banner } from '../../components';
import about_us from "../../assets/home/about_us.png";
import video_player_icon from "../../assets/icons/video_play_icon.png";
import "./home.scss";

function Home(props) {
  return (
    <div className='home_page'>
      <div className="home_banner">
        <Banner/>
      </div>
      <div className="about_us_section">
        <div className="about_us_wrapper">
          <div className="about_us_info">
            <div className="empty_line"></div>
            <div className="about_us_content">
              <h3>Know About us</h3>
              <h1>We help nature smile and survive everywhere</h1>
              <div className="about_us_description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <p>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <button>
                <Link to="/about">Learn more</Link>
              </button>
            </div>
          </div>
          <div className="about_us_photo">
            <img src={about_us} alt="" />
            <img src={video_player_icon} alt="" className="video_player_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;