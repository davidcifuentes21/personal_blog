import React from 'react';
import "./AboutStyles.css";

function TitleSection({ title }) {
  return (
    <>
      <div className="title-section">
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default TitleSection;