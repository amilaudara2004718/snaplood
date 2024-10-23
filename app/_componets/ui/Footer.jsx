import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          
          {/* Brand Section */}
          <div className="w-full sm:w-1/4 mb-6">
            <h1 className="text-2xl font-bold mb-3">SnapLood<span className="text-blue-800">.com</span></h1>
            <p className="text-gray-400">Download videos effortlessly from your favorite platforms.</p>
            <p className="text-gray-500 mt-2">© 2024 SnapLood. All Rights Reserved</p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="list-none space-y-2">
              <li><Link href="/terms-of-service" className="hover:underline text-gray-400">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline text-gray-400">Privacy Policy</Link></li>
              <li><Link href="/faq" className="hover:underline text-gray-400">FAQ</Link></li>
              <li><Link href="/eula" className="hover:underline text-gray-400">EULA</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-3">Explore</h3>
            <ul className="list-none space-y-2">
              <li><Link href="/about" className="hover:underline text-gray-400">About Us</Link></li>
              <li><Link href="/blog" className="hover:underline text-gray-400">Blog</Link></li>
              <li><Link href="/features" className="hover:underline text-gray-400">Features</Link></li>
              <li><Link href="/contact" className="hover:underline text-gray-400">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="list-none flex space-x-4">
              <li><Link href="https://www.youtube.com" className="hover:text-blue-500 text-gray-400" target="_blank"><i className="fab fa-youtube"></i></Link></li>
              <li><Link href="https://www.tiktok.com" className="hover:text-blue-500 text-gray-400" target="_blank"><i className="fab fa-tiktok"></i></Link></li>
              <li><Link href="https://www.instagram.com" className="hover:text-blue-500 text-gray-400" target="_blank"><i className="fab fa-instagram"></i></Link></li>
              <li><Link href="https://x.com" className="hover:text-blue-500 text-gray-400" target="_blank"><i className="fab fa-x"></i></Link></li>
            </ul>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Have questions? <Link href="/contact-us" className="text-blue-400 hover:underline">Contact Us</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
