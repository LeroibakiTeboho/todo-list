import React from "react";

export default function Layout({ children, darkMode }) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {children}
    </div>
  );
}
