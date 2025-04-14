// src/pages/Repositories.tsx
import React from 'react';
import RepoCarousel from '../components/RepoCarousel';
import '../App.css';

interface Repo {
  title: string;
  description: string;
  link: string;
}

interface RepositoriesProps {
  repos: Repo[];
}

const Repositories: React.FC<RepositoriesProps> = ({ repos }) => {
  return (
    <div className="app-container">
      <h1>All Repositories</h1>
      <div className="separator">
        <RepoCarousel repos={repos} />
      </div>
    </div>
  );
};

export default Repositories;