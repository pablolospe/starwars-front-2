import React from 'react';
import { formatDate } from '@/utils';
import Link from 'next/link';

const filmDetail = async (id) => {
  return fetch(`http://34.125.251.76:8000/films/${id}`).then((res) =>
    res.json()
  );
};

async function Film({ params, children }) {
  const { id } = params;
  const thisFilm = await filmDetail(id);
  console.log(thisFilm);
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <img
          style={{ alignItems: 'center', height: '360px', width: 'auto' }}
          src={`https://starwars-visualguide.com/assets/img/films/${thisFilm?.data?._id}.jpg`}
          alt={`Movie cover of '${thisFilm?.data?.title}'.`}
        />
        <div>
          <h1 className="text-2xl m-2">{thisFilm?.data?.title}</h1>
          <h2 className="text-l m-2">Director: {thisFilm?.data?.director}</h2>
          <h3 className="text-l m-2">
            Release date: {formatDate(thisFilm?.data?.release_date)}
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap flex-row gap-4 justify-center">
        {thisFilm?.data?.characters.map((ch, index) => (
          <Link href={`/characters/${ch._id}`}>
            <div className="text-sm font-light flex flex-col items-center mx-14 md:mx-4 hover:scale-105 transition-transform " key={ch._id}>
              {/* <div className="flex flex-column items-center"> */}

                <img
                  style={{
                    height: '60px',
                    width: '60px',
                    objectFit: 'cover',
                    borderRadius: '100%',
                    border: 'solid yellow 1px',
                  }}
                  src={`https://starwars-visualguide.com/assets/img/characters/${ch._id}.jpg`}
                  alt={`Movie cover of '${thisFilm?.data?.title}'.`}
                  />
                  <span>{ch.name}</span>
              {/* </div> */}
            </div>
          </Link>
        ))}
      </div>
      {/* {children} */}
    </>
  );
}

export default Film;
