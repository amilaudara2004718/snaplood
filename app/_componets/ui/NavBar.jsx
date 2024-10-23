"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavBar = () => {
    const pathname = usePathname(); // Get the current pathname
    const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="mt-5 lg:px-16 px-6 bg-[#161616] flex flex-wrap items-center lg:py-2 py-2">
            <div className="flex-1 flex justify-between items-center">
                <div onClick={() => window.location.href = "/"} className="flex text-xl cursor-pointer">
                    <span className="text-white font-bold">SnapLood</span>
                    <span className='text-blue-800'>.com</span>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? '✖' : '☰'} {/* Hamburger icon */}
                    </button>
                </div>
            </div>
            <div className={`lg:flex lg:items-center lg:w-auto w-full ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row`}>
                <nav>
                    <ul className="text-xs text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                        <li>
                            <a href="/youtube" className={`flex items-center text-gray-300 hover:text-white transition ${pathname === '/youtube' ? 'text-white' : ''}`}>
                                <i className="fab fa-youtube mr-2"></i> YouTube
                            </a>
                        </li>
                        <li>
                            <a href="/facebook" className={`flex items-center text-gray-300 hover:text-white transition ${pathname === '/facebook' ? 'text-white' : ''}`}>
                                <i className="fab fa-facebook-f mr-2"></i> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/tiktok" className={`flex items-center text-gray-300 hover:text-white transition ${pathname === '/tiktok' ? 'text-white' : ''}`}>
                                <i className="fab fa-tiktok mr-2"></i> TikTok
                            </a>
                        </li>
                        <li>
                            <a href="/instagram" className={`flex items-center text-gray-300 hover:text-white transition ${pathname === '/instagram' ? 'text-white' : ''}`}>
                                <i className="fab fa-instagram mr-2"></i> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="/how-to-use" className={`flex items-center text-gray-300 hover:text-white transition ${pathname === '/how-to-use' ? 'text-white' : ''}`}>
                                <i className="fas fa-info-circle mr-2"></i> How to Use
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className={`flex items-center text-gray-300 hover:text-white transition ${pathname === '/faq' ? 'text-white' : ''}`}>
                                <i className="fas fa-question-circle mr-2"></i> FAQ
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    );
};

export default NavBar;
