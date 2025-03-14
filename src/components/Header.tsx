'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className=" top-0 left-0 right-0 bg-white z-50">
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold mr-10 md:text-2xl hover:text-gray-700 transition-colors">
                        Gtyou
                    </Link>
                    {/* Desktop Menü */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            <li>
                                <Link 
                                    href="/evsel" 
                                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base"
                                >
                                    Evsel Grup
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/endustriyel" 
                                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base"
                                >
                                    Endüstriyel Grup
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/more-info" 
                                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base"
                                >
                                    Daha Fazla Bilgi
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/satis-destek" 
                                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm lg:text-base"
                                >
                                    Satış Destek
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobil Menü Butonu */}
                    <button 
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menüyü Aç/Kapat"
                    >
                        <svg 
                            className="w-6 h-6 text-gray-600" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobil Menü */}
                <div 
                    className={`md:hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen 
                            ? 'max-h-64 opacity-100' 
                            : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                >
                    <nav className="py-4 border-t">
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <Link 
                                    href="/evsel" 
                                    className="block px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                                >
                                    Evsel Grup
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/endustriyel" 
                                    className="block px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                                >
                                    Endüstriyel Grup
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/more-info" 
                                    className="block px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                                >
                                    Daha Fazla Bilgi
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    href="/satis-destek" 
                                    className="block px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                                >
                                    Satış Destek
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header; 