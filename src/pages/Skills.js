import React from 'react';
import {
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaDatabase,
  FaTools,
  FaCloud,
  FaCloudUploadAlt,
  FaNetworkWired,
  FaKey,
  FaExchangeAlt
} from 'react-icons/fa';

const skills = [
  { name: 'React.js', icon: React.createElement(FaReact, { className: "text-blue-500 text-xl sm:text-2xl" }) },
  { name: 'Tailwind CSS', icon: React.createElement(FaCss3Alt, { className: "text-teal-400 text-xl sm:text-2xl" }) },
  { name: 'JavaScript (ES6+)', icon: React.createElement(FaJsSquare, { className: "text-yellow-400 text-xl sm:text-2xl" }) },
  { name: 'HTML5 & CSS3', icon: React.createElement(FaHtml5, { className: "text-orange-500 text-xl sm:text-2xl" }) },
  { name: 'Node.js', icon: React.createElement(FaNodeJs, { className: "text-green-600 text-xl sm:text-2xl" }) },
  { name: 'Git & GitHub', icon: React.createElement(FaGitAlt, { className: "text-red-600 text-xl sm:text-2xl" }) },
  { name: 'Responsive Design', icon: React.createElement(FaCss3Alt, { className: "text-indigo-400 text-xl sm:text-2xl" }) },
  { name: 'Python', icon: React.createElement(FaPython, { className: "text-yellow-500 text-xl sm:text-2xl" }) },
  { name: 'SQL', icon: React.createElement(FaDatabase, { className: "text-purple-500 text-xl sm:text-2xl" }) },
  { name: 'Express.js', icon: React.createElement(FaNodeJs, { className: "text-gray-600 text-xl sm:text-2xl" }) },
  { name: 'Redux', icon: React.createElement(FaReact, { className: "text-purple-600 text-xl sm:text-2xl" }) },
  { name: 'MongoDB', icon: React.createElement(FaDatabase, { className: "text-green-500 text-xl sm:text-2xl" }) },
  { name: 'Postman', icon: React.createElement(FaTools, { className: "text-orange-400 text-xl sm:text-2xl" }) },
  { name: 'Vercel', icon: React.createElement(FaCloud, { className: "text-black text-xl sm:text-2xl" }) },
  { name: 'Netlify', icon: React.createElement(FaCloudUploadAlt, { className: "text-green-400 text-xl sm:text-2xl" }) },
  { name: 'RESTful APIs', icon: React.createElement(FaNetworkWired, { className: "text-blue-400 text-xl sm:text-2xl" }) },
  { name: 'JWT Authentication', icon: React.createElement(FaKey, { className: "text-red-500 text-xl sm:text-2xl" }) },
  { name: 'WebSockets', icon: React.createElement(FaExchangeAlt, { className: "text-pink-500 text-xl sm:text-2xl" }) }
];

export default function Skills() {
  return React.createElement(
    'section',
    { className: "overflow-x-hidden px-4 sm:px-6 py-8" },
    React.createElement(
      'h1',
      { className: "text-4xl font-bold mb-8 text-center" },
      'Skills'
    ),
    React.createElement(
      'ul',
      {
        className:
          "w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center"
      },
      skills.map(({ name, icon }) =>
        React.createElement(
          'li',
          {
            key: name,
            className:
              "flex items-center justify-center space-x-3 bg-gray-200 dark:bg-gray-700 rounded py-3 px-4 font-medium text-base hover:scale-105 transition-transform cursor-default"
          },
          icon,
          React.createElement('span', { className: "truncate" }, name)
        )
      )
    )
  );
}
