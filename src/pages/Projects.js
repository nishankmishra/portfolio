import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Indiaca Association of India',
    subtitle: 'Official Web Platform',
    description:
      'Developed the official web application for the Indiaca Association of India featuring responsive UI, admin dashboard, tournament management, athlete rankings, news updates, and secure content management.',
    url: 'https://www.indiacaindia.com/',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'WBC Amateur Muaythai India',
    subtitle: 'Official Website',
    description:
      'Developed the official website for WBC Amateur Muaythai India, featuring championship information, event management, news updates, athlete achievements, photo galleries, and a responsive user experience.',
    url: 'https://www.wbcamateurmuaythaiindia.com/',
    tags: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Real-time Chat App',
    subtitle: 'MERN + WebSockets',
    description:
      'A responsive real-time chat application built with WebSockets, enabling instant messaging between users. Features include user authentication, the ability to join and create chat rooms, and smooth message updates across clients.',
    url: 'https://chat-app-4d9x.vercel.app/',
    tags: ['MERN Stack', 'Socket.io'],
  },
  {
    title: 'WeatherApp',
    subtitle: 'Real-Time Weather Forecast',
    description:
      'A responsive weather web app built with React and Tailwind CSS that fetches real-time weather data using an API, supports location-based search, and displays temperature, humidity, wind, and other conditions.',
    url: 'https://weatherapp2-u7jj.vercel.app/',
    tags: ['React', 'API', 'Tailwind CSS'],
  },
  {
    title: 'Interactive Virtual Drum Kit',
    subtitle: 'Play Beats with Your Keyboard',
    description:
      'A fun, interactive web-based drum kit built with HTML, CSS, and JavaScript — press the shown keys or buttons to play drum sounds with visual feedback.',
    url: 'https://playful-youtiao-ec87bf.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Microsoft Homepage Clone',
    subtitle: 'Pixel-Perfect Rebuild',
    description:
      "A fully responsive clone of Microsoft's official homepage, built using modern web technologies. This project replicates the layout, design, and navigation structure of Microsoft's site.",
    url: 'https://friendly-dieffenbachia-3cefde.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function Projects() {
  return (
    <section className="py-16">
      <div className="text-center">
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          My Work
        </span>
        <h1 className="font-display text-4xl font-bold text-white">Projects</h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          A collection of things I've designed, built, and shipped.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map(({ title, subtitle, description, url, tags }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-surface/60 p-6 transition-all hover:-translate-y-1 hover:border-violet-400/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-violet-400">
                  {subtitle}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-white">{title}</h2>
              </div>
              <FaExternalLinkAlt className="mt-1 text-xs text-zinc-500 transition-colors group-hover:text-violet-300" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
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
    </section>
  );
}
