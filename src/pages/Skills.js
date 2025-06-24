import React from 'react';
import {
  FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaHtml5, FaJsSquare, FaPython, FaDatabase, FaTools, FaCloud, FaCloudUploadAlt, FaNetworkWired, FaKey, FaExchangeAlt
} from 'react-icons/fa';

const skills = [
  { name: 'React.js', icon: React.createElement(FaReact, { className: "text-blue-500" }) },
  { name: 'Tailwind CSS', icon: React.createElement(FaCss3Alt, { className: "text-teal-400" }) },
  { name: 'JavaScript (ES6+)', icon: React.createElement(FaJsSquare, { className: "text-yellow-400" }) },
  { name: 'HTML5 & CSS3', icon: React.createElement(FaHtml5, { className: "text-orange-500" }) },
  { name: 'Node.js', icon: React.createElement(FaNodeJs, { className: "text-green-600" }) },
  { name: 'Git & GitHub', icon: React.createElement(FaGitAlt, { className: "text-red-600" }) },
  { name: 'Responsive Design', icon: React.createElement(FaCss3Alt, { className: "text-indigo-400" }) },
  { name: 'Python', icon: React.createElement(FaPython, { className: "text-yellow-500" }) },
  { name: 'SQL', icon: React.createElement(FaDatabase, { className: "text-purple-500" }) },
  { name: 'Express.js', icon: React.createElement(FaNodeJs, { className: "text-gray-600" }) },
  { name: 'Redux', icon: React.createElement(FaReact, { className: "text-purple-600" }) },
  { name: 'MongoDB', icon: React.createElement(FaDatabase, { className: "text-green-500" }) },
  { name: 'Postman', icon: React.createElement(FaTools, { className: "text-orange-400" }) },
  { name: 'Vercel', icon: React.createElement(FaCloud, { className: "text-black" }) },
  { name: 'Netlify', icon: React.createElement(FaCloudUploadAlt, { className: "text-green-400" }) },
  { name: 'RESTful APIs', icon: React.createElement(FaNetworkWired, { className: "text-blue-400" }) },
  { name: 'JWT Authentication', icon: React.createElement(FaKey, { className: "text-red-500" }) },
  { name: 'WebSockets', icon: React.createElement(FaExchangeAlt, { className: "text-pink-500" }) }
];

export default function Skills() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'h1',
      { className: "text-4xl font-bold mb-8 text-center" },
      'Skills'
    ),
    React.createElement(
      'ul',
      { className: "max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center" },
      skills.map(({ name, icon }) =>
        React.createElement(
          'li',
          {
            key: name,
            className: "flex items-center justify-center space-x-3 bg-gray-200 dark:bg-gray-700 rounded py-3 px-4 font-medium text-base hover:scale-105 transition-transform cursor-default"
          },
          icon,
          React.createElement('span', null, name)
        )
      )
    )
  );
}
