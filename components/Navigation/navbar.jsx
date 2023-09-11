'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Films',
    route: '/films',
  },
  {
    label: 'Characters',
    route: '/characters',
  },
  {
    label: 'About',
    route: '/about',
  },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Línea antes de la barra de navegación */}
      <div
        className={`fixed top-0 z-50 flex items-center justify-between w-full bg-black  ${
          isMenuOpen
            ? 'transition-all duration-500 ease-in h-[12rem]'
            : 'transition-all duration-700 ease-in h-16'
        }`}
      >
        <div>
          <NextImage
            src="/star-wars-logo.png"
            alt="Star wars logo"
            width={100}
            height={50}
            className={`ml-6 transition-transform duration-700 ${
              isMenuOpen ? 'translate-y-1' : ''
            }`}
            style={{
              transformOrigin: 'center bottom', // Set transform origin to center bottom
            }}
          />
        </div>

        {/* Navegación */}

        <ul
          className={`md:flex md:gap-12 ${
            isMenuOpen ? 'flex flex-col gap-4' : 'hidden'
          }`}
        >
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                <div
                  className="text-amarillo text-center font-light hover:text-yellow-100"
                  style={{
                    textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)',
                  }}
                  
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <h1 className='hidden sm:block fixed left-32 text-amarillo font-light text-xl '>:: Microservices</h1>

        <button
          className="hamburger md:invisible focus:outline-none mr-10"
          onClick={handleMenuToggle}
        >
          <div
            className={`h-1 w-6 bg-amarillo transition ease-in-out duration-700 ${
              isMenuOpen ? 'rotate-45 translate-y' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-amarillo mt-1 mb-1 transition ease-in-out duration-700 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-amarillo transition ease-in-out duration-700 ${
              isMenuOpen ? '-rotate-45 -translate-y' : ''
            }`}
          ></div>
        </button>
      </div>

      {/* Línea después de la barra de navegación */}
      {/* <div className="w-full bg-rojo h-1 relative bottom-[-10px] hidden md:block bg-opacity-70 z-10"></div> */}
    </>
  );
}

export default Navigation;
