'use client';
import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className={`btn ${darkMode ? 'btn-primary' : 'btn-secondary'} btn-circle`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}