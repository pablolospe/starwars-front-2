import HomeText from '@/components/Home/HomeText';
import React from 'react';
import Link from 'next/link';
import { BsArrowLeftCircle } from 'react-icons/bs';

function Static() {
  return (
    <div className="mt-20 mx-12 md:w-[60%] md:mx-auto font-medium bg-cover" style={{backgroundImage: 'url("https://fondosmil.com/fondo/10829.jpg")'}}>
      <HomeText />
      <Link href="/">
        <button className="fixed top-20 right-4 md:right-8 h-8 w-8 hover:scale-105 transition-transform">
          <BsArrowLeftCircle className="h-full w-full" />
        </button>
      </Link>
    </div>
  );
}

export default Static;
