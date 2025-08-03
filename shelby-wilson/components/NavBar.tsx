'use client';
import Image from "next/image";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'About Me', href: '/' },
  { label: 'Resume', href: '/resume' },
  {
    label: 'React Fun', href: '#', children: [
      { label: 'Ad-Lib Fun', href: '/reactFun/adlib' },
      { label: 'Mood Tracker', href: '/reactFun/moodTracker' },
      { label: 'Hook Visualizer', href: '/reactFun/hookVisualizer' }
    ]
  }
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-teal-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-1 py-1 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden border-1 border-white-10 shadow-lg">
            <Image
              src="/Avatar.png"
              alt="Shelby Avatar"
              width={100}
              height={100}
              priority
              className="object-cover"
            />
          </div>
          <h1 className="text-xl font-bold ml-2">Shelby Wilson</h1>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6">
          <ul className="hidden md:flex space-x-6 relative">
            {navItems.map(({ label, href, children }) => {
              const hasChildren = !!children;
              const isOpen = openDropdown === label;

              return (
                <li key={href} className="relative">
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown((prev) => (prev === label ? null : label))
                        }
                        className={clsx(
                          'hover:text-teal-700 transition-colors',
                          pathname === href && 'font-semibold text-teal-700'
                        )}
                      >
                        <strong>{label}</strong>
                      </button>

                      {isOpen && (
                        <ul className="absolute mt-1 bg-white text-black shadow-lg rounded min-w-max z-50">
                          {children.map((child) => (
                            <li key={child.href} className="relative">
                              <Link
                                href={child.href}
                                className={clsx(
                                  'block px-4 py-2 hover:bg-teal-100',
                                  pathname === child.href && 'font-semibold bg-teal-100'
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={href}
                      className={clsx(
                        'hover:text-teal-700 transition-colors',
                        pathname === href && 'font-semibold text-teal-700'
                      )}
                    >
                      <strong>{label}</strong>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
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
        <ul className="md:hidden flex flex-col items-center bg-teal-800 border-t border-teal-700">
          {navItems.map(({ label, href, children }) => (
            <li key={href} className="w-full text-center py-3 border-b border-teal-700">
              <Link
                href={href}
                className={clsx(
                  'block w-full hover:text-teal-400 transition-colors',
                  pathname === href && 'font-semibold text-teal-400'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>

              {children && (
                <ul className='bg-teal-900 text-sm'>
                  {children.map((child) => (
                    <li key={child.href} className="border-t border-teal-700">
                      <Link
                        href={child.href}
                        className={clsx(
                          'block py-2 pl-6 w-full text-left hover:text-teal-300',
                          pathname === child.href && 'font-semibold text-teal-300'
                        )}
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
