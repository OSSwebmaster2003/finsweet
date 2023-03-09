import React from "react";
import { useSelector } from "react-redux";
import "./fullProject.scss";

function FullProject(props) {
  const { singleProject } = useSelector((state) => state.articlesSlice);
  console.log(singleProject);
  return (
    <div className="single_project_page">
      <div className="single_project_wrapper">
        <div className="project_section">
          <div className="project_header">
            <div className="empty_line"></div>
            <h2>Our project</h2>
          </div>
          <div className="project_body">
            <h1>{singleProject.title}</h1>
            <p>{singleProject.description}</p>
            <img src={singleProject.bg_img} alt="" />
            <h3>{singleProject.short_desc}</h3>
            <h5>{singleProject.description2}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullProject;
