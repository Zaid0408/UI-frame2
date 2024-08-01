"use client";
import React, { useState } from 'react';
import './themeprofile.css';

const colors = [
  '#FFFFFF', '#F0F0F0', '#C0C0C0', '#909090', '#606060', '#303030', '#000000',
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF',
];

const linearGradients = [
  'linear-gradient(to right, #ff7e5f, #feb47b)',
  'linear-gradient(to right, #6a11cb, #2575fc)',
  'linear-gradient(to right, #ff6a00, #ee0979)',
  'linear-gradient(to right, #00c6ff, #0072ff)',
  'linear-gradient(to right, #f7ff00, #db36a4)',
  'linear-gradient(to right, #00f260, #0575e6)',
];

const radialGradients = [
  'radial-gradient(circle, #ff7e5f, #feb47b)',
  'radial-gradient(circle, #6a11cb, #2575fc)',
  'radial-gradient(circle, #ff6a00, #ee0979)',
  'radial-gradient(circle, #00c6ff, #0072ff)',
  'radial-gradient(circle, #f7ff00, #db36a4)',
  'radial-gradient(circle, #00f260, #0575e6)',
];
const foregroundColor=['black','white'];

const ThemeProfile = () => {
    const [theme, setTheme] = useState({
      background: '#FFFFFF',
      foreground: '#000000',
    });
    const [isEditing, setIsEditing] = useState(true);
  
    const handleSaveClick = () => {
      setIsEditing(!isEditing);
    };
  
    return (
      <div className="theme-profile">
        <div className="horizontal-container">
          <div className="title1">
            <h2>Themes</h2>
          </div>
          <div className="profile-icon">
            <span>Zaid Hasan</span>
            <img src="favicon.ico" alt="Profile Icon" className="icon-image" />
          </div>
        </div>
        <div className="header">
          <div className="title">
            <h2>Apply a skin to your profile</h2>
          </div>
          <div className="buttons">
            <button className="custom-button">+ Custom</button>
            <button className="save-button" onClick={handleSaveClick}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
        <div className="main-content">
          <div className="menu">
            <div className="theme-section">
              <h3>Solids</h3>
              <div className="color-options">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`color-swatch ${isEditing ? '' : 'disabled'}`}
                    style={{ backgroundColor: color }}
                    onClick={() => isEditing && setTheme({ ...theme, background: color })}
                  />
                ))}
              </div>
            </div>
  
            <div className="theme-section">
              <h3>Linear Gradients</h3>
              <div className="color-options">
                {linearGradients.map((gradient) => (
                  <div
                    key={gradient}
                    className={`color-swatch ${isEditing ? '' : 'disabled'}`}
                    style={{ background: gradient }}
                    onClick={() => isEditing && setTheme({ ...theme, background: gradient })}
                  />
                ))}
              </div>
            </div>
  
            <div className="theme-section">
              <h3>Radial Gradients</h3>
              <div className="color-options">
                {radialGradients.map((gradient) => (
                  <div
                    key={gradient}
                    className={`color-swatch ${isEditing ? '' : 'disabled'}`}
                    style={{ background: gradient }}
                    onClick={() => isEditing && setTheme({ ...theme, background: gradient })}
                  />
                ))}
              </div>
            </div>
            <div className="theme-section">
              <h3>Foreground Colors</h3>
              <div className="color-options">
                {foregroundColor.map((color) => (
                  <div
                    key={color}
                    className={`color-swatch ${isEditing ? '' : 'disabled'}`}
                    style={{ background: color }}
                    onClick={() => isEditing && setTheme({ ...theme, foreground: color })}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="profile-preview" style={{ background: theme.background }}>
            <div className="profile-header">
              <img src="the-mandalorian-5k-2560x1600_477555-mm-90.jpg" alt="Profile Header" className="header-image" />
            </div>
            <div className="profile-details" style={{ color: theme.foreground }}>
              <h2>Mason Parker</h2>
              <p>Graphics & UI/UX Designer</p>
              <p>Denver, United States</p>
              <p className="biography">
                I am a visionary Graphics and UI/UX Designer, seamlessly blending artistic flair with technical expertise.
                With a degree in Graphic Design, I consistently deliver visually stunning and user-centric solutions,
                leaving an indelible mark on the digital landscape. As a trusted collaborator, I am dedicated to crafting
                pixel-perfect UIs and captivating graphics that elevate user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ThemeProfile;