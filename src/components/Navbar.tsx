// src/components/Navbar.tsx
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { repositories } from '../data/repositories';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  // Derive categories from repositories.ts
  const categories = Object.keys(repositories).map((key) => ({
    name: key.replace(/\b\w/g, (c) => c.toUpperCase()), // Capitalize words
    path: `/category/${key.replace(/\s+/g, '-')}`, // Convert to URL-friendly path
  }));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          GitHub Explorer
        </Link>

        <button
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-icon"></span>
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/repositories" onClick={toggleMobileMenu}>
                Repositories
              </Link>
            </li>
            <li className="navbar-dropdown">
              <button
                className="navbar-dropdown-toggle"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                aria-expanded={isCategoriesOpen}
              >
                Categories {/*<span className="dropdown-arrow">▼</span> */}
              </button>
              {isCategoriesOpen && (
                <ul className="navbar-dropdown-menu">
                  {categories.map((category) => (
                    <li key={category.name} style={{ margin: 0 }}>
                      <Link
                        to={category.path}
                        onClick={() => {
                          toggleMobileMenu();
                          setIsCategoriesOpen(false);
                        }}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
          </ul>

          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="navbar-search-input"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;