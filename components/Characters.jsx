import React from 'react';
import Link from 'next/link';

const characters = async () => {
  return fetch('http://34.125.251.76:8000/characters', {
    // next: {
    //   revalidate: 60,
    // },
  }).then((res) => res.json());
};

async function Characters2() {
  const data = await characters();
  const allChar = data.data;
  console.log(data.data);

  return (
    <>
      {allChar?.map((ch) => (
        <div
          className="flex flex-col text-center m-4 h-3 hover:scale-105 transition-transform"
          style={{ alignItems: 'center' }}
        >
          <Link href={`/characters/${ch._id}`}>
            <h5>{ch.name}</h5>
            {/* ({ch.films.map((f, index)=><small>{f.title}{index !== ch.films.length - 1 ? ', ' : ''} </small>)}) */}
            <img
              className='items-center h-52 w-auto'
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

export default Characters2;
