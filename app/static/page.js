import HomeText from '@/components/Home/HomeText';
import React from 'react';
import Link from 'next/link';
import { BsArrowLeftCircle } from 'react-icons/bs';

function Static() {
  return (
    <div
      className="mt-10 font-light mx-4 md:mx-40 content-center md:font-medium"
    >
      <br />
      <br />
      <br />
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
