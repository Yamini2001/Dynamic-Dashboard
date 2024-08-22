import React from 'react';
import './TopBar.css';
import { FaSearch, FaChevronDown, FaBell, FaUser } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="breadcrumb">
        <span className="breadcrumb-home">Home</span>
        <span className="breadcrumb-separator">{' > '}</span>
        <span className="breadcrumb-current">Dashboard V2</span>
      </div>

      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search anything"
        />
         </div>
        <div className="icon-container">
          <FaChevronDown className="dropdown-icon" />
          <FaBell className="bell-icon" />
          <FaUser className="user-icon" />
        </div>
     
    </div>
  );
};

export default TopBar;
