import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#001f3d] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-semibold">
            <span className="font-normal">Vast Tech Solutions</span>
          </div>
          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-[#17a2b8] transition">Home</Link>
            <Link to="/about" className="hover:text-[#17a2b8] transition">About</Link>
            <Link to="/services" className="hover:text-[#17a2b8] transition">Services</Link>
            <Link to="/consultancy" className="hover:text-[#17a2b8] transition">Consultancy</Link>
            <Link to="/software-development" className="hover:text-[#17a2b8] transition">Software Dev</Link>
            <Link to="/testing" className="hover:text-[#17a2b8] transition">Testing</Link>
            <Link to="/training" className="hover:text-[#17a2b8] transition">Training</Link>
            <Link to="/careers" className="hover:text-[#17a2b8] transition">Careers</Link>
            <Link to="/blog" className="hover:text-[#17a2b8] transition">Blog</Link>
            <Link to="/contact" className="hover:text-[#17a2b8] transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}