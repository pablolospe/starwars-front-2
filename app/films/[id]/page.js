import React from 'react';
import { formatDate } from '@/utils';
import Link from 'next/link';
import Opening from '@/components/Opening/Opening';
import { BsArrowLeftCircle } from 'react-icons/bs';

const filmDetail = async (id) => {
  return fetch(`http://34.125.251.76:8000/films/${id}`).then((res) =>
    res.json()
  );
};

async function Film({ params }) {
  const { id } = params;
  const thisFilm = await filmDetail(id);
  // console.log(thisFilm);

  return (
    <div className="flex flex-row flex-wrap justify-evenly lg:px-24 lg:mx-24 my-24 mx-3">
      <Link href="/films">
        <button className="fixed top-20 right-4 md:right-8 h-8 w-8 hover:scale-105 transition-transform">
          <BsArrowLeftCircle className="h-full w-full" />
        </button>
      </Link>

      <div className="flex flex-col text-center">
        <h1 className="text-2xl mt-1">{thisFilm?.data?.title}</h1>
        <h5 className="text-sm font-light mt-1">Dir: {thisFilm?.data?.director}</h5>
        <h5 className="text-sm font-light mt-1">
          Release: {formatDate(thisFilm?.data?.release_date)}
        </h5>
      </div>
      <div className="flex flex-col md:flex-row mt-8 mb-8">
        <div className="min-w-fit">
          <img
            style={{ alignItems: 'center', height: '360px', width: 'auto' }}
            src={`https://starwars-visualguide.com/assets/img/films/${thisFilm?.data?._id}.jpg`}
            alt={`Movie cover of '${thisFilm?.data?.title}'.`}
          />
        </div>

        <div className="hidden md:block ml-16">
          <Opening opening_crawl={thisFilm?.data?.opening_crawl} />
        </div>
      </div>
      <div>
        <h5 className="text-sm text-center m-3">Characters in this film</h5>
        <div className="flex flex-wrap flex-row gap-4 justify-center">
          {thisFilm?.data?.characters.map((ch, index) => (
            <Link href={`/characters/${ch._id}`}>
              <div
                className="text-sm font-light flex flex-col items-center mx-14 md:mx-4 hover:scale-105 transition-transform "
                key={ch._id}
              >
                <img
                  style={{
                    height: '60px',
                    width: '60px',
                    objectFit: 'cover',
                    borderRadius: '100%',
                    border: 'solid #ffff0055 2px',
                  }}
                  src={`https://starwars-visualguide.com/assets/img/characters/${ch._id}.jpg`}
                  alt={`Movie cover of '${thisFilm?.data?.title}'.`}
                />
                <span>{ch.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* {children} */}
    </div>
  );
}

export default Film;
