'use client';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';

export default function EmptyState({ searchTerm }) {
  return (
    <div className="text-center py-20 rounded-lg bg-base-100 dark:bg-gray-800 shadow">
      <div className="flex justify-center mb-4">
        <FaRegStar className="text-5xl text-yellow-400" />
      </div>
      <h3 className="text-xl font-bold dark:text-white mb-2">
        {searchTerm ? 'No matching tasks found' : 'Your task list is empty'}
      </h3>
      <p className="dark:text-gray-400">
        {searchTerm 
          ? 'Try adjusting your search or filter' 
          : 'Add a new task to get started!'}
      </p>
    </div>
  );
}