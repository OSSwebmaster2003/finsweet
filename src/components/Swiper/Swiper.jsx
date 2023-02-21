import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import "./swiper.scss";

function Swiper(props) {
  const {supporters} = useSelector(state => state.articlesSlice);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint : 750,
        settings:{
          slidesToShow : 3,
          slidesToScroll : 1,
          infinite : false,
          dots : false
        }
      },
      {
        breakpoint : 600,
        settings:{
          slidesToShow : 2,
          slidesToScroll : 1,
          infinite : false,
          dots : false
        }
      },
      {
        breakpoint : 400,
        settings:{
          slidesToShow : 1,
          slidesToScroll : 1,
          infinite : false,
          dots : false
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {supporters.map((item) => (
        <div className="slider_card" key={item.id}>
          <img src={item.img} alt="" />
        </div>
      ))}
    </Slider>
  );
}

export default Swiper;