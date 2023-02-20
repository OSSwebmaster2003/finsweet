import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/home/banner.png"
import video_play_icon from "../../assets/icons/video_play_icon.png"
import "./banner.scss";

function Banner(props) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="banner_info">
        <div className="banner_header">Save the environment today for a better tomorrow</div>
        <div className="banner_button">
          <Link to="/activity">What we do</Link>
          <button><img src={video_play_icon} alt="" /> Play Video</button>
        </div>
        <div className="banner_bottom">
          <p>23,800 trees planted</p>
          <div className="empty_line"></div>
          <p>5840 donations collected</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;