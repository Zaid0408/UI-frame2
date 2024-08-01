"use client";
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-section">
        <div className="logo">Logo Here</div>
        <nav className="menu1">
          <h4>Menu</h4>  
          <ul>
            <li>Home</li>
            <li>Schedule</li>
            <li>Recommendation</li>
            <li>Analytics</li>
            <li>Profile</li>
            <li>Inbox</li>
            <li>Themes</li>
          </ul>
        </nav>
      </div>
      <div className="account-section">
        <nav className="account-menu">
          <h4>Account</h4>
          <ul>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
