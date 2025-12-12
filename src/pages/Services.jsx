import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-50 p-12">
      <h2 className="text-4xl font-bold mb-6 text-indigo-900 text-center">
        Services at <span className="font-normal">Vast Tech Solutions</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="/images/consultancy-icon.svg" alt="Consultancy" className="w-20 mb-4"/>
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">IT Consultancy</h3>
          <p className="text-gray-700 text-center">
            Strategic IT guidance, infrastructure planning, and technology roadmaps to help businesses grow.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="/images/development-icon.svg" alt="Development" className="w-20 mb-4"/>
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">Software Development</h3>
          <p className="text-gray-700 text-center">
            Build scalable, secure, and modern software applications for web, mobile, and enterprise.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="/images/testing-icon.svg" alt="Testing" className="w-20 mb-4"/>
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">Software Testing</h3>
          <p className="text-gray-700 text-center">
            Manual and automated QA to ensure software reliability, performance, and security.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center">
          <img src="/images/training-icon.svg" alt="Training" className="w-20 mb-4"/>
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">Technology Training</h3>
          <p className="text-gray-700 text-center">
            Hands-on workshops, corporate training, and skill development in cloud, AI, and DevOps.
          </p>
        </div>
      </div>
    </div>
  );
}