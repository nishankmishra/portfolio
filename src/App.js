import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  // Always follow system theme
  useEffect(() => {
    const applyTheme = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    applyTheme(); // Set theme on mount

    // Listen for system theme change
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', applyTheme);

    return () => mq.removeEventListener('change', applyTheme);
  }, []);

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
