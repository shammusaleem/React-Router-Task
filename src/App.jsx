import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import All from './pages/All';
import FullStack from './pages/FullStack';
import DataScience from './pages/DataScience';
import CyberSecurity from './pages/CyberSecurity';
import Career from './pages/Career';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/" style={linkStyle}>All</Link>
            </li>
            <li style={liStyle}>
              <Link to="/fullstack" style={linkStyle}>Full Stack Development</Link>
            </li>
            <li style={liStyle}>
              <Link to="/datascience" style={linkStyle}>Data Science</Link>
            </li>
            <li style={liStyle}>
              <Link to="/cybersecurity" style={linkStyle}>Cyber Security</Link>
            </li>
            <li style={liStyle}>
              <Link to="/career" style={linkStyle}>Career</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};

// Styles for Navigation Menu
const navStyle = {
  background: '#f8f9fa',
  padding: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'space-around',
};

const liStyle = {
  margin: '0 15px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '16px',
};

export default App;
