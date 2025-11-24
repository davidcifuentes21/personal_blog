import React from 'react';
import "./AboutStyles.css";

function ContactLinksSection({ links }) {
  return (
    <>
      <div className="contact-links-section">
        <h2>Contacto</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ContactLinksSection;
