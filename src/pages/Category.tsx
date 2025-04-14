// src/pages/Category.tsx
import React from 'react';
import RepoCarousel from '../components/RepoCarousel';
import { useParams } from 'react-router-dom';
import '../App.css';

interface Repo {
  title: string;
  description: string;
  link: string;
}

interface CategoryProps {
  repos: { [key: string]: Repo[] };
}

const Category: React.FC<CategoryProps> = ({ repos }) => {
  const { category } = useParams<{ category: string }>();
  const categoryRepos = category ? repos[category.replace('-', ' ')] || [] : [];

  return (
    <div className="app-container">
      <h1>{category?.replace('-', ' ').toUpperCase()}</h1>
      <div className="separator">
        <RepoCarousel repos={categoryRepos} />
      </div>
    </div>
  );
};

export default Category;