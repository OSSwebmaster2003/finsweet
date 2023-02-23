import React from 'react';
import what_we_do from "../../assets/what_we_do/what_we_do.png";
import building from "../../assets/icons/building.png";
import protect_land from "../../assets/icons/protect_land.png";
import tree_planting from "../../assets/icons/tree_planting.png";
import water from "../../assets/icons/water.png";
import animal_safety from "../../assets/icons/animal_safety.png";
import biodiversity from "../../assets/icons/biodiversity.png";
import {Projects} from "../../components/index"
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
      <div className="for_environment_section">
        <div className="environment_wrapper">
          <div className="environment_header">
            <h1>What we do for the environment</h1>
          </div>
          <div className="environment_info">
            <div className="environment_card">
              <img src={building} alt="" />
              <div className="card_info">
                <h2>Build healthy cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="environment_card">
              <img src={protect_land} alt="" />
              <div className="card_info">
                <h2>Protect land and water</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="environment_card">
              <img src={tree_planting} alt="" />
              <div className="card_info">
                <h2>Tree plantation</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="environment_card">
              <img src={water} alt="" />
              <div className="card_info">
                <h2>Water sustainability</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="environment_card">
              <img src={animal_safety} alt="" />
              <div className="card_info">
                <h2>Animal safety</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
            <div className="environment_card">
              <img src={biodiversity} alt="" />
              <div className="card_info">
                <h2>Biodiversity</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects_section">
        <Projects/>
      </div>
    </div>
  );
}

export default Activity;