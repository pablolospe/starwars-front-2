'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BsXLg } from 'react-icons/bs';
import Image from 'next/image';

function Search(props) {
  let allChar = props.allChar;

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="text-black flex items-center justify-center mx-4 md:mx-40 my-8">
      <div className="fixed top-20 rounded-sm flex items-center z-50">
        <input
          type="text"
          placeholder="Search character..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 mr-1 h-9 rounded-sm bg-yellow-200"
        />
        <button onClick={() => setSearchTerm('')} className='bg-yellow-300 hover:bg-yellow-400 h-9 p-2 rounded-sm'><BsXLg /></button>
      </div>

      <div
        // className="flex flex-row flex-wrap p-2 ml-1 justify-evenly mt-32 mx-12"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center mt-32"
      >
        {allChar
          .filter((ch) =>
            ch.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((ch) => (
            <div className="flex flex-col align-middle text-center" key={ch.id} >
              <Link href={`/characters/${ch.id}`}>

                <Image
                  className='hover:scale-105 transition-transform border-solid border-2 border-[#ffff0055] hover:border-[#ffff0099]'
                  src={`https://starwars-visualguide.com/assets/img/characters/${ch.id}.jpg`}
                  alt={`Character picture of '${ch.name}'.`}
                  width={150}
                  height={206}
                />

                <h5 className="text-amarillo text-center mt-1 ">{ch.name}</h5>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
