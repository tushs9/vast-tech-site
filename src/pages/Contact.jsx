import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 p-12">
      <h2 className="text-4xl font-bold mb-6 text-indigo-900 text-center">
        Contact <span className="font-normal">Vast Tech Solutions</span>
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-indigo-900">Our Office</h3>
          <p className="text-gray-700 mb-2">
            20 Wenlock Road, London, England, N1 7GU
          </p>
          <p className="text-gray-700 mb-2">Email: admin@vasttechsolutions.co.uk</p>
          <p className="text-gray-700 mb-2">Phone: +44 (0) 2039851970</p>
        </div>
        <form className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4">
          <input className="border p-2 rounded" type="text" placeholder="Your Name"/>
          <input className="border p-2 rounded" type="email" placeholder="Your Email"/>
          <textarea className="border p-2 rounded" placeholder="Your Message"></textarea>
          <button className="bg-indigo-900 text-white p-3 rounded hover:bg-indigo-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
}