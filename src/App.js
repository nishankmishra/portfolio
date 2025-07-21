import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  // theme: 'dark' | 'light' | 'system'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return 'system';
  });

  // Determine actual mode based on theme and system
  const actualMode = theme === 'system' ? getSystemTheme() : theme;

  useEffect(() => {
    if (actualMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [actualMode]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system changes if 'system' is selected
  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setTheme('system'); // Triggers a re-render and update
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  // Button logic for cycling through modes
  const nextTheme = () => {
    if (theme === 'light') return setTheme('dark');
    if (theme === 'dark') return setTheme('system');
    return setTheme('light');
  };

  const buttonLabel =
    theme === 'system'
      ? `System (${actualMode === 'dark' ? 'Dark' : 'Light'} Mode)`
      : theme.charAt(0).toUpperCase() + theme.slice(1) + ' Mode';

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-100 dark:bg-gray-800">
          <div className="text-2xl font-bold">Nishank Mishra</div>
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'underline' : undefined}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'underline' : undefined}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={({ isActive }) => isActive ? 'underline' : undefined}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : undefined}>Contact</NavLink>
            </li>
          </ul>
          <button
            aria-label="Toggle Theme"
            onClick={nextTheme}
            className="ml-4 px-3 py-1 border rounded text-sm"
          >
            {buttonLabel}
          </button>
        </nav>
        <main className="max-w-5xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="text-center p-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Nishank Mishra. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
