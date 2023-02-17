import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineAlignLeft} from "react-icons/ai";
import {BsXLg} from "react-icons/bs";
import logo from "../../assets/main/logo.png";
import "./header.scss";

function Header(props) {
  const [mobileToggle , setMobileToggle] = useState(false);
  const handleMobileToggle = () => {
    setMobileToggle(prev => !prev)
  }
  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="navbar">
          <ul style={!mobileToggle ? {right : "-500px"} : {right : "0"} }>
            <BsXLg onClick={() => handleMobileToggle()}/>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/activity">What We Do</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button>
            <Link to="/donation">Donate</Link>
          </button>
        </nav>
        <div className="toggle_mobile">
          <AiOutlineAlignLeft onClick={() => handleMobileToggle()}/>
        </div>
      </div>
    </header>
  );
}

export default Header;