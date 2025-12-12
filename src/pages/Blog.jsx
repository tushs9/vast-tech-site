import React from "react";

export default function Blog() {
  return (
    <div className="bg-gray-50 p-12">
      <h2 className="text-4xl font-bold mb-6 text-indigo-900 text-center">
        Blog - <span className="font-normal">Vast Tech Solutions</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">The Future of AI in Business</h3>
          <p className="text-gray-700">
            Explore how artificial intelligence is transforming enterprise operations and decision-making.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">DevOps Best Practices</h3>
          <p className="text-gray-700">
            Implementing efficient CI/CD pipelines, automation, and collaboration in modern development teams.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">Cybersecurity Trends 2025</h3>
          <p className="text-gray-700">
            Stay ahead of threats with the latest strategies in cybersecurity for businesses of all sizes.
          </p>
        </div>
      </div>
    </div>
  );
}