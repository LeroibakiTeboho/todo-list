'use client';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AddTodoForm from '@/components/todos/AddTodoForm';
import StatsOverview from '@/components/todos/StatsOverview';
import FilterBar from '@/components/todos/FilterBar';
import TodoList from '@/components/todos/TodoList';
import EmptyState from '@/components/ui/EmptyState';

export default function AdvancedTodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) setDarkMode(savedDarkMode === 'true');
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('darkMode', darkMode.toString());
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [todos, darkMode]);

  // Add a new todo
  const addTodo = (text, priority) => {
    const newTodoItem = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodoItem, ...todos]);
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit a todo
  const editTodo = (id, newText, newPriority) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText, priority: newPriority } : todo
    ));
  };

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter and search todos
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    
    switch (filter) {
      case 'active': return !todo.completed && matchesSearch;
      case 'completed': return todo.completed && matchesSearch;
      case 'high': return todo.priority === 'high' && matchesSearch;
      case 'medium': return todo.priority === 'medium' && matchesSearch;
      case 'low': return todo.priority === 'low' && matchesSearch;
      default: return matchesSearch;
    }
  });

  return (
    <Layout darkMode={darkMode}>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          activeCount={todos.filter(t => !t.completed).length}
        />
        
        <AddTodoForm addTodo={addTodo} />
        
        <StatsOverview todos={todos} />
        
        <FilterBar 
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          clearCompleted={clearCompleted}
        />
        
        {filteredTodos.length > 0 ? (
          <TodoList 
            todos={filteredTodos} 
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ) : (
          <EmptyState searchTerm={searchTerm} />
        )}
        
        <Footer />
      </div>
    </Layout>
  );
}