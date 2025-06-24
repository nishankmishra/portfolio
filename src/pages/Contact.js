import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return React.createElement(
      'div',
      { className: 'max-w-xl mx-auto text-center mt-12' },
      React.createElement('h2', { className: 'text-3xl font-bold mb-4' }, 'Thank you!'),
      React.createElement('p', null, "Your message has been received. I'll get back to you soon.")
    );
  }

  return React.createElement(
    'section',
    { className: 'max-w-xl mx-auto mt-12' },
    React.createElement('h1', { className: 'text-4xl font-bold mb-8 text-center' }, 'Contact Me'),
    React.createElement(
      'form',
      { onSubmit: handleSubmit, className: 'space-y-6' },
      // Name
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'name', className: 'block mb-1 font-semibold' },
          'Name'
        ),
        React.createElement('input', {
          id: 'name',
          name: 'name',
          type: 'text',
          required: true,
          value: form.name,
          onChange: handleChange,
          className: 'w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600',
        })
      ),
      // Email
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'email', className: 'block mb-1 font-semibold' },
          'Email'
        ),
        React.createElement('input', {
          id: 'email',
          name: 'email',
          type: 'email',
          required: true,
          value: form.email,
          onChange: handleChange,
          className: 'w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600',
        })
      ),
      // Message
      React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'message', className: 'block mb-1 font-semibold' },
          'Message'
        ),
        React.createElement('textarea', {
          id: 'message',
          name: 'message',
          rows: '5',
          required: true,
          value: form.message,
          onChange: handleChange,
          className: 'w-full px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-600',
        })
      ),
      // Submit Button
      React.createElement(
        'button',
        {
          type: 'submit',
          className: 'px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition',
        },
        'Send'
      )
    )
  );
}
