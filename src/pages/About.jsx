import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 p-12">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/team-work.jpg"
          alt="Team at work"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-indigo-900">
            About <span className="font-normal">Vast Tech Solutions</span>
          </h2>
          <p className="text-gray-700 mb-2">
            Vast Tech Solutions is a premier IT company headquartered in London, delivering innovative 
            technology solutions for enterprises, SMEs, and startups worldwide.
          </p>
          <p className="text-gray-700 mb-2">
            We empower businesses with modern IT strategies, robust software, reliable testing, and technology training programs that ensure long-term growth.
          </p>
          <p className="text-gray-700">
            Our team combines technical expertise with strategic vision to deliver measurable results leveraging cloud, AI, DevOps, and modern software engineering practices.
          </p>
        </div>
      </section>
    </div>
  );
}