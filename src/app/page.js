"use client";
import React, { useState } from 'react';
import './page.css';

import Sidebar from './Sidebar';
import ThemeProfile from './ThemeProfile';


const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <ThemeProfile />
    </div>
  );
};

export default App;