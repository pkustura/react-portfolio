// Portfolio.js

import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      image: 'https://via.placeholder.com/200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    },
    {
      id: 2,
      name: 'Project 2',
      image: 'https://via.placeholder.com/200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    },
    {
      id: 3,
      name: 'Project 3',
      image: 'https://via.placeholder.com/200x200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.'
    }
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-items">
        {projects.map((project) => (
          <Link to={`/portfolio/${project.id}`} key={project.id}>
            <div className="portfolio-item">
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
