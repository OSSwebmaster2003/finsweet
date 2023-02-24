import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import NewsSlider from "../../components/NewsSlider/NewsSlider";
import {Events ,NewsSlider} from "../../components"
import "./media.scss";

function Media(props) {
  const {top_news} = useSelector(state => state.articlesSlice);
  return (
    <div className='media_page'>
      <div className="top_news_section">
        <div className="top_news_wrapper">
          <div className="top_news_info">
            <div className="top_news_info_header">
              <div className="empty_line"></div>
              <h2>Top news</h2>
            </div>
            <div className="top_news_info_body">
              <h1>Our goal is to make water available for everyone</h1>
              <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <button>
                <Link>Read more</Link>
              </button>
            </div>
          </div>
          <div className="top_news_cards">
            {top_news.slice(0,3).map((item) => (
              <div className="top_news_card" key={item.id}>
                <div className="card_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="card_info">
                  <Link>{item.title}</Link>
                  <p>{item.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="news_slider_section">
        <div className="news_slider_wrapper">
          <div className="news_slider_header">
            <h1>Read our Recent News</h1>
            <p>Edit this text to make it your own. To edit, simply click directly on the text to start We are served</p>
          </div>
          <div className="news_slider_info">
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

export default Media;