import React, { useState } from "react";
import video_play_icon from "../../assets/icons/video_play_icon.png";
import facebook_icon from "../../assets/icons/facebook_icon.png";
import twitter_icon from "../../assets/icons/twitter_icon.png";
import linkedin_icon from "../../assets/icons/linkedin_icon.png";
import journey from "../../assets/about/journey.png";
import banner from "../../assets/about/banner.png";
import Swiper from "../../components/Swiper/Swiper";
import { useSelector } from "react-redux";
import JoinTeam from "../../components/JoinTeam/JoinTeam";
import NewsSlider from "../../components/NewsSlider/NewsSlider";
import Events from "../../components/Events/Events";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import "./about.scss";

function About(props) {
  const { awards } = useSelector((state) => state.articlesSlice);
  const { team } = useSelector((state) => state.articlesSlice);

  const [toggle, setToggle] = useState(false);
  const closePop = () => {
    setToggle(false);
  };
  return (
    <>
      <PlayVideo value={toggle} closePop={() => closePop()} />
      <div className="about_us_page">
        <div className="know_about_us_section">
          <div className="know_about_us_wrapper">
            <div className="know_about_us_header">
              <div className="empty_line"></div>
              <h2>Know about us</h2>
            </div>
            <div className="know_about_us_info">
              <h1>We are a nonprofit team working worldwide</h1>
              <div>
                <h3>
                  Aenean faucibus nibh et justo cursus id rutrum lorem
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim
                  elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_section">
          <div className="banner_wrapper">
            <div className="white_bg"></div>
            <div className="green_bg"></div>
            <img src={banner} alt="" />
            <img
              className="play_icon"
              src={video_play_icon}
              alt=""
              style={{ cursor: "pointer" }}
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
        <div className="missions_section">
          <div className="missions_wrapper">
            <div className="mission_card">
              <div className="card_wrapper">
                <h2>our mission</h2>
                <h1>We make the world we save our own environment</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
            </div>
            <div className="mission_card">
              <div className="card_wrapper">
                <h2>our Vision</h2>
                <h1>Plant more trees to make world air pollution free</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="supporters_section">
          <div className="supporters_wrapper">
            <div className="supporters_header">
              <h1>our Supporters</h1>
            </div>
            <div className="supporters_info">
              <Swiper />
            </div>
          </div>
        </div>
        <div className="awards_section">
          <div className="awards_wrapper">
            <h1>Awards & Recognitions</h1>
            <div className="awards_info">
              {awards.map((item) => (
                <div className="awards_card" key={item.id}>
                  <div className="card_img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="card_body">
                    <h1>{item.year}</h1>
                    <h2>{item.title}</h2>
                    <h3>{item.location}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="journey_section">
          <div className="journey_wrapper">
            <div className="journey_info">
              <h2>OUR JOURNEY </h2>
              <h1>How we raised 34M</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh.
              </p>
              <div className="statistics">
                <div>
                  <h3>34M+</h3>
                  <h4>Donation Received</h4>
                </div>
                <div>
                  <h3>400+</h3>
                  <h4>Volunters</h4>
                </div>
                <div>
                  <h3>40K+</h3>
                  <h4>Trees planted</h4>
                </div>
              </div>
            </div>
            <div className="journey_img">
              <img src={journey} alt="" />
            </div>
          </div>
        </div>
        <div className="team_section">
          <div className="team_wrapper">
            <div className="team_header">
              <h1>Meet our team</h1>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </h5>
            </div>
            <div className="team_members">
              {team.map(
                ({ id, name, job, img, facebook, linkedin, twitter }) => (
                  <div className="team_card" key={id}>
                    <div className="card_img">
                      <img src={img} alt="" />
                    </div>
                    <div className="card_body">
                      <h1>{name}</h1>
                      <h2>{job}</h2>
                      <div className="social_media">
                        <a href={facebook} target="blank">
                          <img src={facebook_icon} alt="" />
                        </a>
                        <a href={twitter} target="blank">
                          <img src={twitter_icon} alt="" />
                        </a>
                        <a href={linkedin} target="blank">
                          <img src={linkedin_icon} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="join_team_section">
          <div className="join_team_wrapper">
            <JoinTeam />
          </div>
        </div>
        <div className="news_section">
          <div className="news_wrapper">
            <div className="news_header">
              <h1>Read Our News</h1>
              <div className="empty_line"></div>
            </div>
            <div className="news_body">
              <NewsSlider />
            </div>
          </div>
        </div>
        <div className="events_section">
          <div className="events_wrapper">
            <Events />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
