'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import Link from '../ui/Link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '#about', active: false },
    { label: 'Services', href: '#services', active: false },
    { label: 'Projects', href: '#projects', active: false },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 z-50 border-b border-b-gray-400/20 backdrop-blur-sm">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center py-2.5 lg:py-3.5">
          {/* Logo */}
          <div className="flex items-center md:ml-0 ml-3">
            <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[54px] lg:h-[54px] border-2 lg:border-[3px] border-white rounded-full lg:rounded-[26px] flex items-center justify-center">
              <img
                src="/images/img_shape_2_1.png"
                alt="Viral Nest Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-[54px]">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium leading-normal capitalize transition-colors duration-200 hover:text-primary-background ${
                  item.active ? 'text-primary-background' : 'text-secondary-foreground'
                }`}
                style={{ fontFamily: 'Saira' }}
                onClick={(e) => {
                  e.preventDefault(); // stop full page reload
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                  setMenuOpen(false); // close mobile menu after click
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden lg:block">
            <Button
              text="Contact Us"
              className="px-6 lg:px-[34px] py-2 lg:py-[10px] text-sm lg:text-base font-bold leading-tight text-primary-background border border-primary-background rounded-sm shadow-[1px_2px_4px_#4169e1] bg-transparent hover:bg-primary-background hover:text-white transition-all duration-200"
              style={{ fontFamily: 'Lato' }}
              fill_background_color="transparent"
              layout_width="auto"
              padding="0"
              position="static"
              margin="0"
              layout_gap="0"
              variant="outline"
              size="medium"
              onClick={(e) => {
                e.preventDefault(); // stop full page reload
                const target = document.querySelector('#contact');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                setMenuOpen(false); // close mobile menu after click
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-secondary-foreground hover:text-primary-background transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} mt-4 pt-4 pb-4 border-t border-gray-600 bg-gray-900/95 backdrop-blur-sm rounded-md`}
        >
          <div className="flex flex-col space-y-4 px-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium leading-normal capitalize transition-colors duration-200 hover:text-primary-background ${
                  item.active ? 'text-primary-background' : 'text-secondary-foreground'
                }`}
                style={{ fontFamily: 'Saira' }}
                onClick={(e) => {
                  e.preventDefault(); // stop full page reload
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                  setMenuOpen(false); // close mobile menu after click
                }}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <Button
                text="Contact Us"
                className="w-full px-6 py-2 text-sm font-bold leading-tight text-primary-background border border-primary-background rounded-sm shadow-[2px_4px_8px_#4169e1] bg-transparent hover:bg-primary-background hover:text-white transition-all duration-200"
                style={{ fontFamily: 'Lato' }}
                onClick={(e) => {
                  e.preventDefault(); // stop full page reload
                  const target = document.querySelector('#contact');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                  setMenuOpen(false); // close mobile menu after click
                }}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
