import React from "react";
import donation_banner from "../../assets/donation/donation_banner.png";
import "./donation.scss";

function Donation(props) {
  return (
    <div className="donation_page">
      <div className="donation_wrapper">
        <div className="donating_section">
          <div className="donating_section_body">
            <div className="body_header">
              <div className="empty_line"></div>
              <h2>Donate</h2>
            </div>
            <div className="body_info">
              <h1>Making a donation for Nature.</h1>
              <p>
                When you donate, you’re supporting effective solutions to big
                environmental challenges—an investment in the future of our
                planet.
              </p>
              <button>Donate now</button>
            </div>
          </div>
          <div className="donating_section_img">
            <img src={donation_banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
