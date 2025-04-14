// src/pages/About.tsx
import React from 'react';
import '../App.css';

const About: React.FC = () => {
  return (
    <div className="app-container">
      <h1>About GitHub Explorer</h1>
      <div className="separator">
        <p>
          GitHub Explorer is a curated collection of valuable GitHub repositories
          across various domains. Our mission is to help developers discover
          useful tools, libraries, and resources to enhance their development
          journey.
        </p>
        <p>
          We categorize repositories into different domains such as Web Development,
          App Development, Data Science, and more, making it easy for you to find
          relevant resources for your projects.
        </p>
      </div>
    </div>
  );
};

export default About;