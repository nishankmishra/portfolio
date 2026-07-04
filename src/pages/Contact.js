import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

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
    return (
      <section className="mx-auto max-w-lg py-24 text-center">
        <FaCheckCircle className="mx-auto text-4xl text-violet-400" />
        <h2 className="mt-4 font-display text-3xl font-bold text-white">Thank you!</h2>
        <p className="mt-2 text-zinc-400">
          Your message has been received. I'll get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-lg py-16">
      <div className="text-center">
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
          Get In Touch
        </span>
        <h1 className="font-display text-4xl font-bold text-white">Contact Me</h1>
        <p className="mx-auto mt-3 max-w-sm text-zinc-400">
          Have a project in mind or just want to say hi? Drop me a message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded-lg border border-white/10 bg-surface2 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400/60"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/10 bg-surface2 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400/60"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-zinc-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me a bit about your project..."
            className="w-full rounded-lg border border-white/10 bg-surface2 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400/60"
          />
        </div>
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01]"
        >
          <FaPaperPlane className="text-xs" />
          Send Message
        </button>
      </form>
    </section>
  );
}
