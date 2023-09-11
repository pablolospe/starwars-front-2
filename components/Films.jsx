import Link from 'next/link';
import React from 'react';
import { formatDate } from '../utils';

const films = async () => {
  return fetch('http://34.125.251.76:8000/films').then((res) => res.json());
};

async function Films() {
  const data = await films();
  const allFilms = data.data;
  const filme = allFilms.filter((f) => Number(f._id) < 7);

  return (
    <>
      {filme?.map((f) => (
        
        <div className="flex mb-6" key={f._id}>
          <Link href={`/films/${f._id}`}>
            <div 
            className="flex flex-col align-middle text-center m-2 transition-transform" 
            >
              <h5>{f.title}</h5>
            </div>

            <img
              className="flex h-80 w-auto mx-5 hover:scale-105 transition-transform ease-in-out"
              src={`https://starwars-visualguide.com/assets/img/films/${f._id}.jpg`}
              alt={`Movie cover of '${f.title}'.`}
            />
            
          </Link>
        </div>
      ))}
    </>
  );
}

export default Films;
