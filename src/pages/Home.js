import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaArrowRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
} from 'react-icons/si';

const stats = [
  { label: 'Years Learning', value: '2+' },
  { label: 'Projects Built', value: '6+' },
  { label: 'Internships Completed', value: '3' },
  { label: 'Always', value: 'Learning & Improving' },
];

const techStack = [
  { name: 'React', icon: SiReact, color: 'text-sky-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-zinc-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'Git & GitHub', icon: SiGit, color: 'text-red-400' },
];

const featuredProjects = [
  {
    title: 'Indiaca Association of India',
    description:
      'Official web platform for Indiaca Association of India with tournament management, rankings, news & more.',
    url: 'https://www.indiacaindia.com/',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'WBC Amateur Muaythai India',
    description:
      'Official website for WBC Amateur Muaythai India featuring events, athletes & championships.',
    url: 'https://www.wbcamateurmuaythaiindia.com/',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Real-time Chat App',
    description:
      'Real-time chat application with rooms, private messaging, and authentication using WebSockets.',
    url: 'https://chat-app-4d9x.vercel.app/',
    tags: ['MERN Stack', 'Socket.io'],
  },
  {
    title: 'Weather App',
    description:
      'Weather app that shows real-time weather data for any city using a public weather API.',
    url: 'https://weatherapp2-u7jj.vercel.app/',
    tags: ['React', 'API', 'Tailwind CSS'],
  },
];

const socialLinks = [
  { href: 'https://github.com/nishankmishra', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/nishankmishra', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:hello@nishankmishra.dev', icon: FaEnvelope, label: 'Email' },
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
];

export default function Home() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="relative grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="fade-in">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Full Stack Developer
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Nishank Mishra
            </span>
          </h1>

          <p className="mt-5 max-w-md text-zinc-400">
            A passionate Full Stack Developer skilled in the MERN stack. I build
            clean, responsive, and user-friendly web applications that solve
            real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              View My Work
              <FaArrowRight className="text-xs" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white"
            >
              <FaEnvelope className="text-xs" />
              Contact Me
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-violet-400/50 hover:text-white"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex justify-center fade-in">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 blur-2xl" />
            <div className="absolute inset-0 animate-floaty rounded-full border border-violet-400/30" />
            
            <img
               src="/photo.jpg"
               className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-full object-cover border border-white/10"
               alt="Nishank Mishra" />
                 
            <span className="absolute left-2 top-6 h-2 w-2 rounded-full bg-violet-400" />
            <span className="absolute bottom-10 right-0 h-2 w-2 rounded-full bg-blue-400" />

            <div className="absolute -bottom-4 left-1/2 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-surface2/90 p-3 text-center shadow-glow backdrop-blur">
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for work
              </p>
              <p className="mt-0.5 text-xs text-zinc-400">Let's build something amazing!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="fade-in rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</p>
              <p className="mt-1 text-sm text-zinc-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About + Tech Stack */}
      <section className="mt-20 grid gap-8 md:grid-cols-2 md:items-start">
        <div className="fade-in">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            About Me
          </span>
          <h2 className="font-display text-3xl font-bold text-white">
            Building seamless digital experiences
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            I'm a creative and driven web developer with hands-on experience in
            building real-time applications, intuitive admin panels, and
            visually appealing portfolios. I specialize in{' '}
            <span className="font-semibold text-violet-300">React</span>,{' '}
            <span className="font-semibold text-blue-300">Tailwind CSS</span>,
            and modern frontend engineering practices. My goal is to craft
            seamless user experiences that blend function with style.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white"
          >
            More About Me
          </Link>
        </div>

        <div className="fade-in rounded-2xl border border-white/10 bg-surface/60 p-6">
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-zinc-300">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {techStack.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-surface2/60 py-4 transition-transform hover:-translate-y-0.5"
              >
                <Icon className={`text-2xl ${color}`} />
                <span className="text-center text-xs text-zinc-400">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mt-20 fade-in">
        <div className="flex items-end justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Featured Projects
            </span>
            <h2 className="font-display text-3xl font-bold text-white">Some things I've built</h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white sm:inline-flex"
          >
            View all projects
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map(({ title, description, url, tags }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-surface/60 p-5 transition-all hover:-translate-y-1 hover:border-violet-400/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                <FaExternalLinkAlt className="text-xs text-zinc-500 transition-colors group-hover:text-violet-300" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <Link
          to="/projects"
          className="mt-6 flex items-center justify-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white sm:hidden"
        >
          View all projects
          <FaArrowRight className="text-xs" />
        </Link>
      </section>
    </div>
  );
}
