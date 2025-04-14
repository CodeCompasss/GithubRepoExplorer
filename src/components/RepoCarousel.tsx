// src/components/RepoCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import RepoCard from './RepoCard';
import './RepoCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Repo {
  title: string;
  description: string;
  link: string;
}

interface RepoCarouselProps {
  repos: Repo[];
}

const RepoCarousel: React.FC<RepoCarouselProps> = ({ repos }) => {
  const settings = {
    dots: true,
    infinite: repos.length > 1,
    speed: 500, // Matches CSS transition duration
    slidesToShow: Math.min(repos.length, 4),
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    cssEase: 'ease-in-out', // Smooth easing for scrolling
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(repos.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (repos.length === 0) {
    return <div className="no-results">No repositories found.</div>;
  }

  return (
    <div className="repo-carousel">
      <Slider {...settings}>
        {repos.map((repo, index) => (
          <div key={`${repo.title}-${index}`} className="carousel-slide">
            <RepoCard
              title={repo.title}
              description={repo.description}
              link={repo.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RepoCarousel;