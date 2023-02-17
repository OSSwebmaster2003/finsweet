import React from 'react';
import { Link } from 'react-router-dom';
import white_logo from "../../assets/main/white_logo.png";
import "./footer.scss";

function Footer(props) {
  return (
    <footer className='footer'>
      <div className="footer_wrapper">
        <div className="footer_logo">
          <img src={white_logo} alt="" />
        </div>
        <div className="footer_links">
          <h1>Our team</h1>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/activity">What we do</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer_more_links">
          <h1>More</h1>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/donation">Donate</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="footer_social_media">
          <h1>Connect </h1>
          <ul>
            <li>
              <a href="https://www.facebook.com/yahyo.rashid" target="blank">Facebook</a>
            </li>
            <li>
              <a 
              href="https://www.instagram.com/otabek_sobirjonovich_sodikov/" 
              target="blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/otabek_sodikov" target="blank">Twitter</a>
            </li>
            <li>
              <a href="https://t.me/Otabek_Sobirjonovich" target="blank">Telegram</a>
            </li>
          </ul>
        </div>
        <div className="footer_subscribing">
          <h2>Subscribe to get latest updates</h2>
          <div className="subscribing_wrapper">
            <input type="text" placeholder='Your email' />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;