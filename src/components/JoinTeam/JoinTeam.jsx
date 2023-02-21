import React from 'react';
import { Link } from 'react-router-dom';
import join_team from "../../assets/home/join_team.png";
import "./joinTeam.scss";

function JoinTeam(props) {
  return (
    <div className='join_team' style={{ backgroundImage: `url(${join_team})` }}>
      <div className="join_team_content">
        <h1>You can contribute to make the environment greener!</h1>
        <div className="join_team_content_buttons">
          <button className="volunteer_btn">
            <Link>Join as a volunteer</Link>
          </button>
          <button className="donation_btn">
            <Link>Donate</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinTeam;