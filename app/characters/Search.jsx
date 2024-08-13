'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BsXLg } from 'react-icons/bs';
import Image from 'next/image';

const myLoader = ({ src }) => {
  return `https://starwars-visualguide.com/assets/img/characters/${src}`;
};

function Search(props) {
  let allChar = props.allChar;

  const [searchTerm, setSearchTerm] = useState('');

  return (

    <div className="text-black flex items-center justify-center">
      <div className="fixed top-20 rounded-sm flex items-center">
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
        className="flex flex-row flex-wrap p-2 ml-1 justify-evenly mt-32 mx-12"
      >
        {allChar
          .filter((ch) =>
            ch.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((ch) => (
            <div
              className="
              flex 
              flex-col 
              align-middle
              text-center 
              m-4
              hover:scale-105 
              transition-transform"
              key={ch.id}
            >
              <Link href={`/characters/${ch.id}`}>
                <h5 className="text-amarillo">{ch.name}</h5>

                <Image
                  className="items-center h-56 w-auto"
                  // src={`https://starwars-visualguide.com/assets/img/characters/${ch.id}.jpg`}
                  src={`${ch.id}.jpg`}
                  alt={`Character picture of '${ch.name}'.`}
                  width={50}
                  height={100}
                  loader={myLoader}   // Usa el loader para URLs externas
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
