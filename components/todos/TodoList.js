"use client";
import React from "react";
import { Droppable } from "@hello-pangea/dnd"; // Use maintained fork
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  // Simple reordering function
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="space-y-3"
        >
          {todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={index}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
