import React from 'react';

const projects = [
  {
    title: 'Real-time Chat App',
    description: 'A WebSocket-based chat app with authentication and rooms.',
    url: 'https://peppy-gumption-f09059.netlify.app/'
  },
  {
    title: 'WeatherApp – Real-Time Weather Forecast ',
    description: 'A responsive weather web app built with React and Tailwind CSS that fetches real-time weather data using an API, supports location-based search, and displays temperature, humidity, wind, and other conditions with a clean UI',
    url: 'https://weatherapp2-u7jj.vercel.app/'
  },
  {
    title: 'Interactive Virtual Drum Kit – Play Beats with Your Keyboard',
    description: 'A fun, interactive web-based drum kit built with HTML, CSS, and JavaScript—press the shown keys or buttons to play drum sounds with visual feedback.',
    url: 'https://playful-youtiao-ec87bf.netlify.app/'
  },
];

export default function Projects() {
  return React.createElement(
    'section',
    { className: 'max-w-5xl mx-auto px-4 py-12' },
    React.createElement(
      'h1',
      { className: 'text-4xl font-bold mb-10 text-center' },
      'Projects'
    ),
    React.createElement(
      'div',
      { className: 'grid gap-8 sm:grid-cols-2' },
      ...projects.map(({ title, description, url }) =>
        React.createElement(
          'a',
          {
            key: title,
            href: url,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'block p-6 border border-gray-300 dark:border-gray-700 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300'
          },
          React.createElement(
            'h2',
            { className: 'text-2xl font-semibold mb-2' },
            title
          ),
          React.createElement(
            'p',
            { className: 'text-gray-700 dark:text-gray-300' },
            description
          )
        )
      )
    )
  );
}
