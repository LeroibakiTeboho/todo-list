'use client';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function AddTodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, priority);
      setText('');
      setPriority('medium');
    }
  };

  return (
    <div className="card bg-base-100 dark:bg-gray-800 shadow-xl mb-6">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-grow input input-bordered bg-base-200 dark:bg-gray-700 dark:text-white"
          />
          
          <div className="flex gap-3">
            <select 
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="select select-bordered bg-base-200 dark:bg-gray-700 dark:text-white"
            >
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            
            <button 
              type="submit"
              className="btn btn-primary flex items-center"
            >
              <FiPlus className="mr-2" /> Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}