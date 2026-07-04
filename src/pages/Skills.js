import React from 'react';
import {
  FaGitAlt,
  FaTools,
  FaCloud,
  FaCloudUploadAlt,
  FaNetworkWired,
  FaKey,
  FaExchangeAlt,
} from 'react-icons/fa';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
} from 'react-icons/si';

const skills = [
  { name: 'React.js', icon: SiReact, color: 'text-sky-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'JavaScript (ES6+)', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'HTML5 & CSS3', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Git & GitHub', icon: FaGitAlt, color: 'text-red-400' },
  { name: 'Responsive Design', icon: SiTailwindcss, color: 'text-indigo-400' },
  { name: 'Express.js', icon: SiExpress, color: 'text-zinc-300' },
  { name: 'Redux', icon: SiRedux, color: 'text-purple-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'Postman', icon: FaTools, color: 'text-orange-400' },
  { name: 'Vercel', icon: FaCloud, color: 'text-zinc-300' },
  { name: 'Netlify', icon: FaCloudUploadAlt, color: 'text-teal-300' },
  { name: 'RESTful APIs', icon: FaNetworkWired, color: 'text-blue-400' },
  { name: 'JWT Authentication', icon: FaKey, color: 'text-red-400' },
  { name: 'WebSockets', icon: FaExchangeAlt, color: 'text-pink-400' },
];

export default function Skills() {
  return (
    <section className="py-16">
      <div className="text-center">
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          What I Work With
        </span>
        <h1 className="font-display text-4xl font-bold text-white">Skills</h1>
        <p className="mx-auto mt-3 max-w-xl text-zinc-400">
          Tools and technologies I use to design, build, and ship web apps.
        </p>
      </div>

      <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map(({ name, icon: Icon, color }) => (
          <li
            key={name}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-surface/60 px-4 py-3.5 transition-transform hover:-translate-y-0.5 hover:border-violet-400/40"
          >
            <Icon className={`shrink-0 text-xl ${color}`} />
            <span className="truncate text-sm font-medium text-zinc-300">{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
