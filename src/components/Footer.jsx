import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#001f3d] text-white mt-12">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Vast Tech Solutions</h3>
          <p className="text-gray-300">
            20 Wenlock Road, London, England, N1 7GU<br/>
            Email: admin@vasttechsolutions.co.uk<br/>
            Phone: +44 (0) 2039851970
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:text-[#17a2b8] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#17a2b8] transition">About</Link></li>
            <li><Link to="/services" className="hover:text-[#17a2b8] transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#17a2b8] transition">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-[#17a2b8] transition">Blog</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="#" className="hover:text-[#17a2b8] transition">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-[#17a2b8] transition">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-[#17a2b8] transition">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="bg-[#001f3d]/80 text-center py-4 text-gray-400">
        &copy; 2025 Vast Tech Solutions. All rights reserved.
      </div>
    </footer>
  );
}