import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="relative bg-indigo-900 text-white py-20">
        <img
          src="/images/tech-hero.jpg"
          alt="Technology background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="font-normal">Vast Tech Solutions</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Delivering expert IT consultancy, software development, testing, and training services worldwide.
          </p>
        </div>
      </header>

      <section className="p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="/images/consultancy-icon.svg" alt="Consultancy" className="w-20 mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-indigo-900">IT Consultancy</h2>
          <p className="text-gray-700 text-center">
            Strategic IT guidance, infrastructure optimization, and technology roadmaps for operational excellence.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="/images/development-icon.svg" alt="Development" className="w-20 mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-indigo-900">Software Development</h2>
          <p className="text-gray-700 text-center">
            Custom software solutions designed for scalability, security, and seamless integration.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="/images/training-icon.svg" alt="Training" className="w-20 mb-4" />
          <h2 className="text-2xl font-bold mb-2 text-indigo-900">Technology Training</h2>
          <p className="text-gray-700 text-center">
            Hands-on workshops and training programs on cloud, AI, DevOps, and emerging technologies.
          </p>
        </div>
      </section>

      <section className="p-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-indigo-900 text-center">
          Why Choose <span className="font-normal">Vast Tech Solutions</span>?
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2 max-w-3xl mx-auto text-lg">
          <li>Proven track record delivering IT solutions globally.</li>
          <li>Expert team of certified engineers, QA specialists, and consultants.</li>
          <li>Comprehensive services from consultancy to training under one roof.</li>
          <li>Focus on innovative, scalable, and secure technology solutions.</li>
          <li>Customer-centric approach with measurable results and ROI.</li>
        </ul>
      </section>
    </div>
  );
}