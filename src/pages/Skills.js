import React from 'react';
import { FaReact, FaCss3Alt, FaNodeJs, FaGitAlt, FaHtml5, FaJsSquare } from 'react-icons/fa';

const skills = [
  { name: 'React.js', icon: React.createElement(FaReact, { className: "text-blue-500" }) },
  { name: 'Tailwind CSS', icon: React.createElement(FaCss3Alt, { className: "text-teal-400" }) },
  { name: 'JavaScript (ES6+)', icon: React.createElement(FaJsSquare, { className: "text-yellow-400" }) },
  { name: 'HTML5 & CSS3', icon: React.createElement(FaHtml5, { className: "text-orange-500" }) },
  { name: 'Node.js', icon: React.createElement(FaNodeJs, { className: "text-green-600" }) },
  { name: 'Git & GitHub', icon: React.createElement(FaGitAlt, { className: "text-red-600" }) },
  { name: 'Responsive Design', icon: React.createElement(FaCss3Alt, { className: "text-indigo-400" }) },
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
      { className: "max-w-md mx-auto grid grid-cols-2 gap-6 text-center" },
      skills.map(({ name, icon }) =>
        React.createElement(
          'li',
          {
            key: name,
            className: "flex items-center justify-center space-x-3 bg-gray-200 dark:bg-gray-700 rounded py-3 font-medium text-lg hover:scale-105 transition-transform cursor-default"
          },
          icon,
          React.createElement('span', null, name)
        )
      )
    )
  );
}
