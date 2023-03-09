import React from "react";
import { useSelector } from "react-redux";
import location from "../../assets/icons/location.svg";
import date from "../../assets/icons/date.svg";
import "./fullEvent.scss";

function FullEvent(props) {
  const { singleEvent } = useSelector((state) => state.articlesSlice);
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
      </div>
    </div>
  );
}

export default FullEvent;
