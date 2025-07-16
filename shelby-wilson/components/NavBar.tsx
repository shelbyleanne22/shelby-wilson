'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'About Me', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'AdLib Fun', href: '/adlib' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shelby Wilson</h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  'hover:text-blue-400 transition-colors',
                  pathname === href && 'font-semibold text-blue-400'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-800 border-t border-gray-700">
          {navItems.map(({ label, href }) => (
            <li key={href} className="w-full text-center py-3 border-b border-gray-700">
              <Link
                href={href}
                className={clsx(
                  'block w-full hover:text-blue-400 transition-colors',
                  pathname === href && 'font-semibold text-blue-400'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
