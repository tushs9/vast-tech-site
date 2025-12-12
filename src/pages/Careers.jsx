import React from "react";

export default function Careers() {
  return (
    <div className="bg-gray-50 p-12">
      <h2 className="text-4xl font-bold mb-6 text-indigo-900 text-center">
        Careers at <span className="font-normal">Vast Tech Solutions</span>
      </h2>
      <p className="text-gray-700 mb-4 text-center max-w-2xl mx-auto">
        Join our team of passionate technology experts and shape the future of IT solutions globally. We value innovation, teamwork, and professional growth.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">Software Engineer</h3>
          <p className="text-gray-700 mb-2">Full-time position focused on web and mobile application development.</p>
          <p className="text-gray-700 font-semibold">Apply via Email: admin@vasttechsolutions.co.uk</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">QA Specialist</h3>
          <p className="text-gray-700 mb-2">Manual and automated testing for enterprise software projects.</p>
          <p className="text-gray-700 font-semibold">Apply via Email: admin@vasttechsolutions.co.uk</p>
        </div>
      </div>
    </div>
  );
}