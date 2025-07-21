import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode, hasMounted]);

  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      { className: "min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500" },
      React.createElement(
        "nav",
        { className: "flex justify-between items-center px-6 py-4 shadow-md bg-gray-100 dark:bg-gray-800" },
        React.createElement("div", { className: "text-2xl font-bold" }, "Nishank Mishra"),
        React.createElement(
          "ul",
          { className: "flex space-x-6" },
          React.createElement("li", null,
            React.createElement(NavLink, {
              to: "/",
              end: true,
              className: ({ isActive }) => isActive ? 'underline' : undefined
            }, "Home")
          ),
          React.createElement("li", null,
            React.createElement(NavLink, {
              to: "/projects",
              className: ({ isActive }) => isActive ? 'underline' : undefined
            }, "Projects")
          ),
          React.createElement("li", null,
            React.createElement(NavLink, {
              to: "/skills",
              className: ({ isActive }) => isActive ? 'underline' : undefined
            }, "Skills")
          ),
          React.createElement("li", null,
            React.createElement(NavLink, {
              to: "/contact",
              className: ({ isActive }) => isActive ? 'underline' : undefined
            }, "Contact")
          )
        ),
        React.createElement(
          "button",
          {
            "aria-label": "Toggle Dark Mode",
            onClick: () => setDarkMode(prev => !prev),
            className: "ml-4 px-3 py-1 border rounded text-sm"
          },
          darkMode ? 'Light Mode' : 'Dark Mode'
        )
      ),
      React.createElement(
        "main",
        { className: "max-w-5xl mx-auto p-6" },
        React.createElement(
          Routes,
          null,
          React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
          React.createElement(Route, { path: "/projects", element: React.createElement(Projects, null) }),
          React.createElement(Route, { path: "/skills", element: React.createElement(Skills, null) }),
          React.createElement(Route, { path: "/contact", element: React.createElement(Contact, null) })
        )
      ),
      React.createElement(
        "footer",
        { className: "text-center p-6 text-sm text-gray-600 dark:text-gray-400" },
        `© ${new Date().getFullYear()} Nishank Mishra. All rights reserved.`
      )
    )
  );
}

export default App;
