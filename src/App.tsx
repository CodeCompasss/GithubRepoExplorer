// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import RepoCarousel from './components/RepoCarousel';
import HeroSection from './components/HeroSection';
import ErrorBoundary from './components/ErrorBoundary';
import Repositories from './pages/Repositories';
import Category from './pages/Category';
import About from './pages/About';
import './App.css';
import { repositories, allRepos } from './data/repositories';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRepos = Object.keys(repositories).reduce(
    (acc, category) => ({
      ...acc,
      [category]: repositories[category].filter(
        (repo) =>
          repo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          repo.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }),
    {} as { [key: string]: typeof repositories[string] }
  );

  const filteredAllRepos = allRepos.filter(
    (repo) =>
      repo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="app-container">
        <Navbar onSearch={setSearchQuery} />
        <ErrorBoundary>
          <Routes>
            <Route
              path="/GITHUBREPOEXPLORER/"
              element={
                <>
                  <HeroSection onSearch={setSearchQuery} />
                  <div className="separator">
                    {Object.keys(repositories).map((category) => (
                      <React.Fragment key={category}>
                        <h2>{category.replace(/\b\w/g, (c) => c.toUpperCase())}</h2>
                        <RepoCarousel repos={filteredRepos[category]} />
                      </React.Fragment>
                    ))}
                  </div>
                </>
              }
            />
            <Route
              path="/repositories"
              element={<Repositories repos={filteredAllRepos} />}
            />
            <Route
              path="/category/:category"
              element={<Category repos={filteredRepos} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;