import HomeText from '@/components/Home/HomeText';
import React from 'react';
import Link from 'next/link';

function Static() {
  return (
    <div className='my-32 mx-4 md:mx-36 font-medium'>
      <HomeText />
      <Link href="/">
        <button className="absolute top-32 md:right-8 border h-6 w-6 rounded-full text-xs font-bold bg-gray-900 hover:bg-gray-950">
        ←
        </button>
      </Link>
    </div>
  );
}

export default Static;
