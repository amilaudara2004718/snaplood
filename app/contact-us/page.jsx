import Link from 'next/link';
import React from 'react'

function page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#161616] mb-5 text-white px-6">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-400 mb-8">We'd love to hear from you! Reach out with any questions or feedback.</p>
            
            <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500" 
                        placeholder="Your Name" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500" 
                        placeholder="your-email@example.com" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                    <textarea 
                        id="message" 
                        className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring focus:ring-blue-500" 
                        rows="4" 
                        placeholder="Your message here..." 
                        required 
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded">
                    Send Message
                </button>
            </form>

            <div className="mt-8 text-center">
                <p className="text-gray-400">Or email us directly at: 
                    <a href="mailto:support@snaplood.com" className="text-blue-400 hover:underline"> support@snaplood.com</a>
                </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex space-x-4">
                <Link href="https://www.youtube.com" target="_blank" className="hover:text-blue-500 text-gray-400">
                    <i className="fab fa-youtube"></i>
                </Link>
                <Link href="https://www.tiktok.com" target="_blank" className="hover:text-blue-500 text-gray-400">
                    <i className="fab fa-tiktok"></i>
                </Link>
                <Link href="https://www.instagram.com" target="_blank" className="hover:text-blue-500 text-gray-400">
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link href="https://x.com" target="_blank" className="hover:text-blue-500 text-gray-400">
                    <i className="fab fa-x"></i>
                </Link>
            </div>
        </div>
    );
};


export default page