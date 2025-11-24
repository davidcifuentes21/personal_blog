import React from 'react';
import "./AboutStyles.css";

function AboutMeSection({ text }) {
  return (
    <>
      <div className="about-me-section">
        <p>{text}</p>
      </div>
    </>
  );
}

export default AboutMeSection;