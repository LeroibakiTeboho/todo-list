'use client';
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function PriorityBadge({ priority, completed }) {
  if (completed) return null;
  
  const getPriorityInfo = () => {
    switch (priority) {
      case 'high':
        return { text: 'High Priority', color: 'text-red-500', icon: <FaExclamationTriangle /> };
      case 'medium':
        return { text: 'Medium Priority', color: 'text-yellow-500' };
      case 'low':
        return { text: 'Low Priority', color: 'text-green-500' };
      default:
        return { text: '', color: '' };
    }
  };
  
  const info = getPriorityInfo();
  
  return (
    <div className={`flex items-center mt-1 text-xs ${info.color}`}>
      {info.icon && <span className="mr-1">{info.icon}</span>}
      {info.text}
    </div>
  );
}