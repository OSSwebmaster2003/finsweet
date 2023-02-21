import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./projects.scss";

function Projects(props) {
  const {projects} = useSelector(state => state.articlesSlice)
  return (
    <div className='projects_wrapper'>
      <div className="projects_header">
        <div className="empty_line"></div>
        <div className="projects_header_content">
          <h3>Projects we have done</h3>
          <h1>We are Creating sustainable society, for everyone and forever.</h1>
        </div>
      </div>
      <div className="projects_body">
        {projects.map((project) => (
          <div className="project_card" key={project.id} style={{ backgroundImage: `url(${project.bg_img})` }}>
            <h1>{project.title}</h1>
            <p>{project.short_desc}</p>
            <button>
              <Link>See more</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;