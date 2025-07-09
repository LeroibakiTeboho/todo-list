'use client';
import React from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header({ darkMode, setDarkMode, activeCount }) {
  return (
    <header className="flex justify-between items-center mb-10">
      <div>
        <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Productivity Pro
        </h1>
        <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {activeCount} active task{activeCount !== 1 ? 's' : ''} remaining
        </p>
      </div>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </header>
  );
}