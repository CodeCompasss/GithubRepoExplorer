// src/components/RepoCard.tsx
import React, { useEffect, useRef } from 'react';
import './RepoCard.css';

interface RepoCardProps {
  title: string;
  description: string;
  link: string;
}

const RepoCard: React.FC<RepoCardProps> = ({ title, description, link }) => {
  const starContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const starContainer = starContainerRef.current;
    if (!starContainer) return;

    const starCount = 100;
    const cardWidth = starContainer.offsetWidth;
    const cardHeight = starContainer.offsetHeight;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 1;
      const xPosition = Math.random() * cardWidth;
      const yPosition = Math.random() * cardHeight;
      const opacity = Math.random() * 0.5 + 0.3;

      star.classList.add('star');
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${xPosition}px`;
      star.style.top = `${yPosition}px`;
      star.style.opacity = opacity.toString();

      starContainer.appendChild(star);
    }

    return () => {
      while (starContainer.firstChild) {
        starContainer.removeChild(starContainer.firstChild);
      }
    };
  }, []);

  return (
    <div className="repo-card">
      <div className="star-container" ref={starContainerRef}></div>
      <div className="repo-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Repo
        </a>
      </div>
    </div>
  );
};

export default RepoCard;