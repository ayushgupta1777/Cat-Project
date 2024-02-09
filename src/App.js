// src/App.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChartLine, faFire , faHome} from '@fortawesome/free-solid-svg-icons';


import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css'; 

const App = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Router>
      {/* Sidebar */}
      <div id="nav-bar" className={showNav ? 'show-nav' : ''}>
        <input type="checkbox" id="nav-toggle" checked={showNav} onChange={toggleNav} />
        <div id="nav-header">
          <a id="nav-title" href="https://projects-ayush.web.app" >
            Cat Pro-<i className="fab fa-codepen"></i>Ayush
          </a>
          <label htmlFor="nav-toggle">
            <span id="nav-toggle-burger"></span>
          </label>
          <hr />
        </div>
        <div id="nav-content">
          <Link to="/">
        <div className="nav-button">
          
            <i className="fas fa-palette"><FontAwesomeIcon icon={faHome} /></i><span>Home</span>
          
        </div>
          </Link>
          <div className="nav-button">
            <i className="fas fa-thumbtack"><FontAwesomeIcon icon={faHeart} /></i><span>Pinned Items</span>
          </div>
          <hr />
          <div className="nav-button">
            <i className="fas fa-heart"><FontAwesomeIcon icon={faChartLine} /></i><span>Following</span>
          </div>
          <div className="nav-button">
            <i className="fas fa-chart-line"><FontAwesomeIcon icon={faFire} /></i><span>Trending</span>
          </div>
    
          <hr />
          <div id="nav-content-highlight"></div>
        </div>
        <input type="checkbox" id="nav-footer-toggle" />
        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-avatar">
              <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="Avatar" />
            </div>
            <div id="nav-footer-titlebox">
              <a id="nav-footer-title" href="https://portfolio-ayush7.web.app">Ayush</a>
              <span id="nav-footer-subtitle">Admin</span>
            </div>
            <label htmlFor="nav-footer-toggle">
              <i className="fas fa-caret-up"></i>
            </label>
          </div>
        </div>
      </div>


      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
