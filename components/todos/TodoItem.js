'use client';
import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FiEdit, FiTrash2, FiCheck, FiX } from 'react-icons/fi';
import PriorityBadge from '@/components/ui/PriorityBadge';

export default function TodoItem({ todo, index, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText, editPriority);
      setIsEditing(false);
    }
  };

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`card shadow-lg bg-base-100 dark:bg-gray-800 ${
            todo.priority === 'high' && !todo.completed 
              ? 'border-l-4 border-red-500' 
              : todo.priority === 'medium' && !todo.completed 
                ? 'border-l-4 border-yellow-500' 
                : ''
          }`}
        >
          <div className="card-body py-4">
            {isEditing ? (
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="input input-bordered w-full bg-base-200 dark:bg-gray-700"
                  autoFocus
                />
                <div className="flex gap-2">
                  <select 
                    value={editPriority}
                    onChange={(e) => setEditPriority(e.target.value)}
                    className="select select-bordered flex-grow bg-base-200 dark:bg-gray-700"
                  >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                  <button onClick={handleSave} className="btn btn-success">
                    <FiCheck size={18} />
                  </button>
                  <button onClick={() => setIsEditing(false)} className="btn btn-error">
                    <FiX size={18} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="checkbox checkbox-primary mr-4"
                  />
                  <div className="flex flex-col">
                    <span className={`${todo.completed ? 'line-through text-gray-500' : 'dark:text-white'}`}>
                      {todo.text}
                    </span>
                    <PriorityBadge priority={todo.priority} completed={todo.completed} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="btn btn-sm btn-outline btn-info"
                  >
                    <FiEdit size={16} />
                  </button>
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
}