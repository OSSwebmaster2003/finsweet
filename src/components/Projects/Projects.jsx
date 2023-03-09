import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSingleProject } from "../../slice/articles";
import "./projects.scss";

function Projects(props) {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.articlesSlice);
  const chooseSingleProject = (id) => {
    const index = projects.findIndex((item) => item.id === id);
    dispatch(getSingleProject(projects[index]));
  };
  return (
    <div className="projects_wrapper">
      <div className="projects_header">
        <div className="empty_line"></div>
        <div className="projects_header_content">
          <h3>Projects we have done</h3>
          <h1>
            We are Creating sustainable society, for everyone and forever.
          </h1>
        </div>
      </div>
      <div className="projects_body">
        {projects.map((project) => (
          <div
            className="project_card"
            key={project.id}
            style={{
              backgroundImage: `url(${project.bg_img})`,
            }}
          >
            <h1>{project.title}</h1>
            <p>{project.short_desc}</p>
            <button>
              <Link
                to={`/project-read-more/${project.id}`}
                onClick={() => chooseSingleProject(project.id)}
              >
                See more
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
