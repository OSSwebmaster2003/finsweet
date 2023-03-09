import React from "react";
import { useSelector } from "react-redux";
import "./fullBlog.scss";

function FullBlog(props) {
  const { singleBlog } = useSelector((state) => state.articlesSlice);
  return (
    <div className="single_blog_page">
      <div className="single_blog_wrapper">
        <div className="single_blog_header">
          <h4>21 DEC 2021</h4>
          <h1>{singleBlog.title}</h1>
          <h3>
            Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis
            elit dignissim nibh sit.
          </h3>
        </div>
        <div className="single_blog_body">
          <img src={singleBlog.bg_img} alt="" />
          <p>{singleBlog.descr}</p>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
