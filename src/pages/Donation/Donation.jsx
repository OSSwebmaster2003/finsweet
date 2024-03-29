import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import JoinTeam from "../../components/JoinTeam/JoinTeam";
import donation_banner from "../../assets/donation/donation_banner.png";
import "./donation.scss";

function Donation(props) {
  const { donation_tab } = useSelector((state) => state.articlesSlice);
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
        <div className="contributing_section">
          <div className="contributing_wrapper">
            <div className="contributing_info">
              <h1>How you can contribute to protect Earth</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className="contributing_tab">
              <Tabs defaultActiveKey="1" items={donation_tab} />
            </div>
          </div>
        </div>
        <div className="donation_usage_section">
          <div className="donation_usage_wrapper">
            <div className="usage_header">How we use your donation</div>
            <div className="usage_body">
              <div className="first_part">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Nunc ut sem vitae risus
                tristique posuere.
              </div>
              <div className="second_part">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh
                et justo cursus id rutrum lorem imperdiet.
              </div>
            </div>
          </div>
        </div>
        <div className="join_team_section">
          <div className="join_team_wrapper">
            <JoinTeam />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
