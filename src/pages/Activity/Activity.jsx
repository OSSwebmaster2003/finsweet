import React from 'react';
import what_we_do from "../../assets/what_we_do/what_we_do.png";
import "./activity.scss";

function Activity(props) {
  return (
    <div className='activity_page'>
      <div className="what_we_do_section">
        <div className="what_we_do_info">
          <div className="info_header">
            <div className="empty_line"></div>
            <h3>What we do</h3>
          </div>
          <div className="info_body">
            <h1>We are working worldwide</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </div>
        </div>
        <div className="what_we_do_img">
          <img src={what_we_do} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Activity;