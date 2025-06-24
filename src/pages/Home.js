import React from 'react';

export default function Home() {
  return React.createElement(
    'section',
    null,
    // Hero Section
    React.createElement(
      'div',
      {
        className: `relative overflow-hidden rounded-lg p-12 mb-12 text-center text-white cursor-pointer
                    bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500
                    transition-colors duration-500 ease-in-out`,
        style: {
          animation: 'gradientShift 15s ease infinite',
          backgroundSize: '400% 400%',
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.background =
            'linear-gradient(135deg, #a5b4fc, #c4b5fd, #818cf8)';
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.background = '';
        },
      },
      React.createElement(
        'h1',
        { className: 'text-6xl font-bold mb-4 drop-shadow-md fade-in' },
        "Hi, I'm Nishank Mishra"
      ),
      React.createElement(
        'p',
        { className: 'text-xl max-w-xl mx-auto drop-shadow-sm fade-in' },
        'A passionate Full Stack developer with expertise in MERN. I love building clean and responsive web apps.'
      )
    ),

    // About Me Section
    React.createElement(
      'div',
      { className: 'mt-16 max-w-4xl mx-auto fade-in px-6' },
      React.createElement(
        'div',
        {
          className: `rounded-2xl shadow-xl p-10 transition duration-300 hover:shadow-2xl
                      bg-white/80 text-gray-900 border border-gray-200
                      dark:bg-white/10 dark:text-white dark:border-white/20 dark:backdrop-blur-lg`,
        },
        React.createElement(
          'h2',
          { className: 'text-4xl font-bold text-center mb-6' },
          'About Me'
        ),
        React.createElement(
          'p',
          { className: 'text-lg leading-relaxed text-center' },
          "I'm a creative and driven web developer with hands-on experience in building real-time applications, intuitive admin panels, and visually appealing portfolios. I specialize in ",
          React.createElement(
            'span',
            { className: 'font-semibold text-indigo-600 dark:text-indigo-300' },
            'React'
          ),
          ', ',
          React.createElement(
            'span',
            { className: 'font-semibold text-pink-600 dark:text-pink-300' },
            'Tailwind CSS'
          ),
          ', and frontend engineering practices. My goal is to craft seamless user experiences that blend function with style.'
        )
      )
    ),

    // Inline Styles
    React.createElement(
      'style',
      null,
      `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .fade-in {
          animation: fadeIn 0.8s ease forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `
    )
  );
}
