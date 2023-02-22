import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "./newsSlider.scss";

function NewsSlider(props) {
  const {news} = useSelector(state => state.articlesSlice);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='for_slider'>
      <Slider {...settings}>
        {news.map((item) => (
          <div className="news_card" key={item.id}>
            <div className="card_wrapper">
              <div className="card_img">
                <img src={item.bg_img} alt="" />
              </div>
              <div className="card_body">
                <Link>{item.title}</Link>
                <p>{item.descr}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default NewsSlider;