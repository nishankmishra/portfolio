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

  // Compute effective mode
  const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;

  useEffect(() => {
    if (effectiveTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [effectiveTheme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system changes ONLY if using system theme
  useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setTheme('system'); // triggers re-render
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  // BUTTONS for explicit user control
  const handleSetLight = () => setTheme('light');
  const handleSetDark = () => setTheme('dark');
  const handleSetSystem = () => setTheme('system');

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
          <div className="ml-4 flex items-center space-x-2">
            <button
              aria-label="Light Mode"
              onClick={handleSetLight}
              className={`px-3 py-1 border rounded text-sm ${theme === 'light' ? 'font-bold' : ''}`}
            >
              Light
            </button>
            <button
              aria-label="Dark Mode"
              onClick={handleSetDark}
              className={`px-3 py-1 border rounded text-sm ${theme === 'dark' ? 'font-bold' : ''}`}
            >
              Dark
            </button>
            <button
              aria-label="System Mode"
              onClick={handleSetSystem}
              className={`px-3 py-1 border rounded text-sm ${theme === 'system' ? 'font-bold' : ''}`}
            >
              System
            </button>
          </div>
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
