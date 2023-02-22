import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import right_arrow from "../../assets/icons/right_arrow.png";
import "./events.scss";

function Events(props) {
  const {events} = useSelector(state => state.articlesSlice);
  return (
    <div className='events'>
      <div className="events_header">
        <h1>Our Events</h1>
        <div className="empty_line"></div>
      </div>
      <div className="events_body">
        {events.map((item) => (
          <div className="events_card" key={item.id}>
            <div className="card_wrapper">
              <div className="card_date">
                <h1>{item.date}</h1>
                <p>{item.month}</p>
              </div>
              <div className="card_info">
                <div className="card_info_header">
                  <h2>Next Events</h2>
                  <div className="empty_line"></div>
                </div>
                <h3>{item.title}</h3>
              </div>
              <div className="full_card">
                <Link>
                  <img src={right_arrow} alt="" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;