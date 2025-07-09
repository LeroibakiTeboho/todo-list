'use client';
import React from 'react';
import { FiFilter, FiSearch, FiTrash2 } from 'react-icons/fi';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function FilterBar({ 
  filter, 
  setFilter, 
  searchTerm, 
  setSearchTerm,
  clearCompleted
}) {
  return (
    <div className="card bg-base-100 dark:bg-gray-800 shadow-xl mb-6">
      <div className="card-body">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="join">
            <button 
              className={`btn join-item ${filter === 'all' ? 'btn-active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`btn join-item ${filter === 'active' ? 'btn-active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={`btn join-item ${filter === 'completed' ? 'btn-active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          
          <div className="join">
            <button 
              className={`btn join-item ${filter === 'high' ? 'btn-active' : ''}`}
              onClick={() => setFilter('high')}
            >
              <FaExclamationTriangle className="mr-2 text-red-500" /> High
            </button>
            <button 
              className={`btn join-item ${filter === 'medium' ? 'btn-active' : ''}`}
              onClick={() => setFilter('medium')}
            >
              Medium
            </button>
            <button 
              className={`btn join-item ${filter === 'low' ? 'btn-active' : ''}`}
              onClick={() => setFilter('low')}
            >
              Low
            </button>
          </div>
          
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search tasks..."
              className="w-full input input-bordered pl-10 bg-base-200 dark:bg-gray-700"
            />
            <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
          </div>
          
          <button 
            onClick={clearCompleted}
            className="btn btn-outline btn-error"
          >
            <FiTrash2 className="mr-2" /> Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}