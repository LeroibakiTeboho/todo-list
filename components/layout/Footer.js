'use client';
import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="text-center text-gray-500 dark:text-gray-600 text-sm mt-10">     
      <p className="mt-2">Advanced Todo List © {year}</p>
    </footer>
  );
}