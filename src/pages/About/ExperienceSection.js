import React from 'react';
import "./AboutStyles.css";

function ExperienceSection({ experiences }) {
  return (
    <>
      <div className="experience-section">
        <h2>Experiencia Laboral</h2>
        <ul>
          {experiences.map((experience, index) => (
            <li key={index}>
              <h3>{experience.title}</h3>
              <p>{experience.company}</p>
              <p>{experience.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ExperienceSection;
