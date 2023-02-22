import React from 'react';
import { Link } from 'react-router-dom';
import { Banner, Events, HomeChart, Projects, Swiper } from '../../components';
import about_us from "../../assets/home/about_us.png";
import video_player_icon from "../../assets/icons/video_play_icon.png";
import what_we_do from "../../assets/home/what_we_do.png";
import building from "../../assets/icons/building.png";
import tree_planting from "../../assets/icons/tree_planting.png";
import protect_land from "../../assets/icons/protect_land.png";
import animal_safety from "../../assets/icons/animal_safety.png";
import "./home.scss";
import JoinTeam from '../../components/JoinTeam/JoinTeam';
import NewsSlider from '../../components/NewsSlider/NewsSlider';

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
      <div className="supporters_section">
        <div className="supporters_wrapper">
          <div className="supporters_header">
            <h1>our Supporters</h1>
            <div className="empty_line"></div>
          </div>
          <div className="supporters_info">
            <Swiper/>
          </div>
        </div>
      </div>
      <div className="what_we_do_section">
        <div className="what_we_do_wrapper">
          <div className="what_we_do_info">
            <div className="empty_line"></div>
            <div className="what_we_do_content">
              <h3>What we do</h3>
              <div className="what_we_do_header">
                <h1>We care for earth, care for the coming birth</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
              </div>
              <div className="what_we_do_body">
                <div className="what_we_do_card">
                  <img src={building} alt="" />
                  <div className="card_body">
                    <h1>Build Healthy Cities</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
                <div className="what_we_do_card">
                  <img src={tree_planting} alt="" />
                  <div className="card_body">
                    <h1>Tree Plantation</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
                <div className="what_we_do_card">
                  <img src={protect_land} alt="" />
                  <div className="card_body">
                    <h1>Protect Land and Water</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
                <div className="what_we_do_card">
                  <img src={animal_safety} alt="" />
                  <div className="card_body">
                    <h1>Animal Safety</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="what_we_do_img">
            <img src={what_we_do} alt="" />
          </div>
        </div>
      </div>
      <div className="projects_section">
        <Projects/>
      </div>
      <div className="chart_section">
        <div className="chart_wrapper">
          <div className="chart_info">
            <h1>How we spend your donations and where it goes</h1>
            <p>We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.</p>
            <div className="chart_percents">
              <div className="chart_percent">
                <div className="green_btn"></div>
                <h4>40% planting trees</h4>
              </div>
              <div className="chart_percent">
                <div className="violet_btn"></div>
                <h4>35% cleanliness program</h4>
              </div>
              <div className="chart_percent">
                <div className="less_yellow_btn"></div>
                <h4>10% helping people</h4>
              </div>
              <div className="chart_percent">
                <div className="yellow_btn"></div>
                <h4>10% animal safety</h4>
              </div>
              <div className="chart_percent">
                <div className="purple_btn"></div>
                <h4>5% feeding the poor</h4>
              </div>
            </div>
          </div>
          <div className="chart_img">
            <HomeChart/>
          </div>
        </div>
      </div>
      <div className="join_team_section">
        <div className="join_team_wrapper">
          <JoinTeam/>
        </div>
      </div>
      <div className="news_section">
        <div className="news_wrapper">
          <div className="news_header">
            <h1>Read Our News</h1>
            <div className="empty_line"></div>
          </div>
          <div className="news_info">
            <NewsSlider/>
          </div>
        </div>
      </div>
      <div className="events_section">
        <div className="events_wrapper">
          <Events/>
        </div>
      </div>
    </div>
  );
}

export default Home;