import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import location from "../../assets/icons/location.svg";
import date from "../../assets/icons/date.svg";
import right_arrow from "../../assets/icons/right_arrow.png";
import "./fullEvent.scss";
import { getSingleEvent } from "../../slice/articles";

function FullEvent(props) {
  const { singleEvent } = useSelector((state) => state.articlesSlice);
  const { events } = useSelector((state) => state.articlesSlice);
  const otherEvents = events.filter((item) => item.id !== singleEvent.id);
  const dispatch = useDispatch();

  const chooseSingleEvent = (id) => {
    const index = events.findIndex((item) => item.id === id);
    dispatch(getSingleEvent(events[index]));
  };
  return (
    <div className="single_event_page">
      <div className="single_event_wrapper">
        <div className="single_event_header">
          <h1>{singleEvent.title}</h1>
          <div className="details">
            <p>
              <img src={location} alt="" /> 8 Brewery Drive, Hudson, NH 03051,
              USA
            </p>
            <p>
              <img src={date} alt="" /> {singleEvent.month} {singleEvent.date},
              2023 8:30 AM
            </p>
          </div>
        </div>
        <div className="single_event_body">
          <h1>About</h1>
          <p>{singleEvent.descr}</p>
        </div>
        <div className="other_events">
          <div className="other_events_header">
            <h1>Other events</h1>
            <div className="empty_line"></div>
          </div>
          <div className="other_events_body">
            {otherEvents.map((item) => (
              <div className="other_event_card" key={item.id}>
                <div className="other_event_wrapper">
                  <div className="card_info">
                    <div className="card_date">
                      <h1>{item.date}</h1>
                      <p>{item.month}</p>
                    </div>
                    <div className="card_details">
                      <div className="details_header">
                        <h2>Next Events</h2>
                        <div className="empty_line"></div>
                      </div>
                      <h1>{item.title}</h1>
                    </div>
                    <Link
                      to={`/events-read-more/${item.id}`}
                      onClick={() => chooseSingleEvent(item.id)}
                    >
                      <img src={right_arrow} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullEvent;
