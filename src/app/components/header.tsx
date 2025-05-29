'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        {/* Top header with logo and name centered */}
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center justify-center space-x-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo-001.png" 
                alt="Noorvia Logo" 
                width={120} 
                height={40} 
                className="h-auto" 
              />
            </Link>
            <span className="text-2xl font-bold text-black"></span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600" aria-label="Toggle menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="flex justify-center items-center">
            <ul className="flex space-x-4 border-b border-gray-200">
              <li className="nav-item">
                <Link href="/" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/shop" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  SHOP NOW
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/cart" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  <div className="border border-gray-400 rounded p-1 inline-block">
                    <Image 
                      src="/cart-icon.png" 
                      alt="Cart" 
                      width={24} 
                      height={24} 
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <ul className="absolute z-10 w-full bg-white border border-gray-200 shadow-lg md:hidden">
              <li className="border-b border-gray-100">
                <Link href="/" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  HOME
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link href="/shop" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  SHOP NOW
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link href="/about" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  ABOUT
                </Link>
              </li>
              <li className="border-b border-gray-100">
                <Link href="/contact" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  CONTACT US
                </Link>
              </li>
              <li>
                <Link href="/cart" className="block px-4 py-3 text-sm font-medium hover:bg-red-200">
                  <div className="border border-gray-400 rounded p-1 inline-block">
                    <Image 
                      src="/cart-icon.png" 
                      alt="Cart" 
                      width={24} 
                      height={24} 
                    />
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
