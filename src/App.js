import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaBars, FaTimes, FaDownload } from 'react-icons/fa';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://github.com/nishankmishra', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/nishankmishra', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@nishankmishra.dev', icon: FaEnvelope, label: 'Email' },
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 font-display text-sm font-bold text-white">
        NM
      </span>
      <span className="font-display text-base font-bold tracking-wide text-white">
        NISHANK MISHRA
      </span>
    </Link>
  );
}

function NavLinkItem({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `relative py-1 text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            className={`absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-opacity ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      )}
    </NavLink>
  );
}

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-ink font-sans text-zinc-100">
        <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Logo />

            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLinkItem {...item} />
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <a
                href="/nishank_resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
              >
                <FaDownload className="text-xs" />
                Download CV
              </a>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-zinc-200 md:hidden"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </nav>

          {open && (
            <div className="border-t border-white/5 px-6 py-4 md:hidden">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-sm font-medium ${isActive ? 'text-white' : 'text-zinc-400'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a
                    href="/Nishank_Mishra_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white"
                  >
                    <FaDownload className="text-xs" />
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          )}
        </header>

        <main className="mx-auto max-w-6xl px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="mt-20 border-t border-white/5">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="text-center md:text-left">
                <Logo />
                <p className="mt-3 text-sm text-zinc-500">
                  Let's connect and build something great together.
                </p>
              </div>

              <ul className="flex flex-wrap items-center justify-center gap-6">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-violet-400/50 hover:text-white"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-8 border-t border-white/5 pt-6 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Nishank Mishra. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
