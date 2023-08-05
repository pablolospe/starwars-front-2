'use client'

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
    <header className="fixed top-0 left-0 w-full bg-black p-4 z-50 flex items-center justify-between">
      {/* Logo */}
      <NextImage
        src="/star-wars-logo.png"
        alt="Star wars logo"
        width={120}
        height={60}
      />

      {/* Menú hamburguesa */}
      <button
        className="hamburger md:hidden focus:outline-none"
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

      {/* Navegación */}
      <ul
        className={`md:flex md:gap-4 md:mx-5 ${
          isMenuOpen ? 'flex flex-col gap-4' : 'hidden'
        }`}
      >
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>
              <div
                className="font-medium text-lg hover:shadow-amarillo"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navigation;


// import React from 'react'
// import Link from 'next/link';
// // import styles from './Navigation.module.css'
// import Image from 'next/image';


// const links = [
//     {
//       label: 'Home',
//       route: '/',
//     },
//     {
//       label: 'Films',
//       route: '/films',
//     },
//     {
//       label: 'Characters',
//       route: '/characters',
//     },
//     {
//       label: 'About',
//       route: '/about',
//     },
//   ];
  
//   function Navigation() {
//     return (
//       <div>
//          <header className="
//          w-full 
//          px-10 
//          py-20 
//          flex 
//          items-center 
//          justify-between 
//          md:justify-evenly md:red"

//          >
//             <Image 
//             src='/star-wars-fonts.png'
//             alt={`Star wars logo`}
//             width={120}
//             height={60}
//             />
//           <nav>
//             <ul className=
//             // {styles.navigation}
//             'self-center flex-row gap-4 items-center hidden md:hidden'
//             >
//              {links.map(({ label, route })=>
//              <li className=
//              "py-2 px-4 font-semibold text-xl transition duration-300"
//             //  {styles.word} 
//              key={route}>
//               <Link href={route}>{label}</Link>
//              </li>
//              )}
//             </ul>
//           </nav>
//         </header>
//       </div>
//     )
//   }
  
//   export default Navigation
  