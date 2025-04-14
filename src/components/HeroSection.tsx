import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const getPlanetColor = (i: number): string => {
  const colors = [
    'radial-gradient(circle at 30% 30%, #88f3ff, #003344)',
    'radial-gradient(circle at 30% 30%, #ffd36e, #a85e00)',
    'radial-gradient(circle at 30% 30%, #ff7f7f, #a80000)',
    'radial-gradient(circle at 30% 30%, #c8ffbe, #1a5200)',
    'radial-gradient(circle at 30% 30%, #cab8ff, #4a00a8)',
  ];
  return colors[i % colors.length];
};

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const starContainer = document.querySelector('.star-container') as HTMLElement;
    if (!starContainer) return;

    const starCount = 300;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 1;
      const xPosition = Math.random() * window.innerWidth;
      const yPosition = Math.random() * window.innerHeight;
      const opacity = Math.random() * 0.7 + 0.3;

      star.classList.add('star');
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${xPosition}px`;
      star.style.top = `${yPosition}px`;
      star.style.opacity = opacity.toString();
      star.style.animationDelay = `${Math.random() * 5}s`;

      starContainer.appendChild(star);
    }

    return () => {
      while (starContainer.firstChild) {
        starContainer.removeChild(starContainer.firstChild);
      }
    };
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default link behavior
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass query to parent
  };

  return (
    <div className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Explore GitHub Treasures</h1>
        <p className="hero-subtitle">
          A curated collection of elegant and useful GitHub repositories across various domains. Discover tools, tricks, and libraries that empower your development journey.
        </p>
        <a href="#repos" className="hero-button" onClick={handleButtonClick}>
          Browse Repositories
        </a>
        {isSearchVisible && (
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search repositories..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        )}
      </div>

      <div className="star-container" aria-hidden="true" />

      {[...Array(10)].map((_, i) => (
        <div
          className="shooting-star"
          key={`star-${i}`}
          style={{
            top: `${Math.random() * 40}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 50}s`,
            transform: `rotate(${Math.random() * 30 + 300}deg)`,
          }}
        />
      ))}

      {[...Array(10)].map((_, i) => (
        <div
          className={`planet-orbit orbit-${i}`}
          key={`orbit-${i}`}
          style={{
            animationDuration: `${25 + i * 12}s`,
            transform: `rotateX(60deg) rotateZ(${i * 60}deg)`,
          }}
        >
          <div
            className={`planet planet-${i}`}
            style={{
              transform: `translateX(${180 + i * 70}px) translateZ(${i % 2 === 0 ? 50 : -50}px)`,
              width: `${18 + i * 5}px`,
              height: `${18 + i * 5}px`,
              background: getPlanetColor(i),
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;