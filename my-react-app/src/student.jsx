// import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'A cool project.', link: '#' },
    { title: 'Project 2', description: 'Another cool project.', link: '#' },
    { title: 'Project 3', description: 'Yet another cool project.', link: '#' },
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map(function (project, index) {
          return (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
