import React from 'react';
import Link from 'next/link';

const characters = async () => {
  return fetch('http://34.125.251.76:8000/characters', {
  }).then((res) => res.json());
};

async function Characters() {
  const data = await characters();
  const allChar = data.data;
  // console.log(data.data);

  return (
    <>
      {allChar?.map((ch) => (
        <div
          className="
          flex 
          flex-col 
          align-middle
          text-center 
          m-4
          hover:scale-105 
          transition-transform"
        >
          <Link href={`/characters/${ch._id}`}>
            <h5 className="text-sm">{ch.name}</h5>
            {/* ({ch.films.map((f, index)=><small>{f.title}{index !== ch.films.length - 1 ? ', ' : ''} </small>)}) */}
            <img
              className='items-center h-56 w-auto'
              // style={{ alignItems: 'center', height: '240px', width: 'auto' }}
              src={`https://starwars-visualguide.com/assets/img/characters/${ch._id}.jpg`}
              alt={`Character picture of '${ch.name}'.`}
            />
          </Link>
        </div>
      ))}
    </>
  );
}

export default Characters;
