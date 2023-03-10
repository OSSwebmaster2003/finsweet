import React from "react";
import close_icon from "../../assets/icons/close_icon.png";
import "./playVideo.scss";

function PlayVideo(props) {
  return (
    <div className="play_video">
      <div className="closing_icon">
        <img src={close_icon} alt="" />
      </div>
      <div className="play_video_wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/zHiwGTgqh5o?feature=share"
        ></iframe>
      </div>
    </div>
  );
}

export default PlayVideo;
