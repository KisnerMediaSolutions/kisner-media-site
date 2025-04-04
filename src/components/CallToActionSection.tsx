"use client";

import { useState } from "react";

export default function CallToAction() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 sm:px-12 rounded-2xl shadow-xl text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to work with KMSolutions?
        </h2>
        <p className="text-lg mb-8 text-gray-300">
          Get updates, insights, and expert tips right to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-grow px-4 py-3 rounded-xl text-black focus:outline-none"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}