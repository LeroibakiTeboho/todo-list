'use client';
import React from 'react';
import { FiCheck, FiAlertTriangle } from 'react-icons/fi';

export default function StatsOverview({ todos }) {
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;
  const highPriorityCount = todos.filter(todo => 
    todo.priority === 'high' && !todo.completed
  ).length;

  const completionPercentage = Math.round((completedCount / Math.max(todos.length, 1)) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="stats bg-base-100 dark:bg-gray-800 shadow">
        <div className="stat">
          <div className="stat-title dark:text-gray-300">Total Tasks</div>
          <div className="stat-value dark:text-white">{todos.length}</div>
        </div>
      </div>
      
      <div className="stats bg-base-100 dark:bg-gray-800 shadow">
        <div className="stat">
          <div className="stat-title dark:text-gray-300">Completed</div>
          <div className="stat-value text-green-500">{completedCount}</div>
          <div className="stat-desc">
            {completionPercentage}% of tasks
          </div>
        </div>
      </div>
      
      <div className="stats bg-base-100 dark:bg-gray-800 shadow">
        <div className="stat">
          <div className="stat-title dark:text-gray-300">Urgent Tasks</div>
          <div className="stat-value text-red-500">{highPriorityCount}</div>
          <div className={`stat-desc ${highPriorityCount > 0 ? 'text-red-400' : 'dark:text-gray-400'}`}>
            {highPriorityCount > 0 ? 'Priority attention needed' : 'No urgent tasks'}
          </div>
        </div>
      </div>
    </div>
  );
}