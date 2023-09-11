import React from 'react';
import { formatDate } from '@/utils';
import Link from 'next/link';
import { BsArrowLeftCircle } from 'react-icons/bs';

const CharacterDetail = async (id) => {
  return fetch(`http://34.125.251.76:8000/characters/${id}`).then((res) =>
    res.json()
  );
};

async function Character({ params, children }) {
  const { id } = params;
  const thisChar = await CharacterDetail(id);

  return (
    <div className="mt-36 md:mt-20 flex justify-center items-center max-h-screen">
      <Link href="/characters">
        <button className="fixed top-20 right-4 md:right-8 h-8 w-8 hover:scale-105 transition-transform">
          <BsArrowLeftCircle className="h-full w-full" />
        </button>
      </Link>

      <div className="flex flex-col md:flex-row gap-10 self-center ">
        <div>
          <h1 className="text-3xl text-center m-2">{thisChar?.data?.name}</h1>
          <img
            style={{ alignItems: 'center', maxHeight: '480px', width: 'auto' }}
            src={`https://starwars-visualguide.com/assets/img/characters/${thisChar?.data?._id}.jpg`}
            alt={`Movie cover of '${thisChar?.data?.title}'.`}
          />
        </div>

        <div className="md:mt-36 mb-4">
          <h2 className="text-xl mb-2">Films: </h2>
          <ul>
            {thisChar?.data?.films.map((f, index) => (
              <Link key={index} href={`/films/${f._id}`}>
                <li className="gap-2 transition duration-500 hover:text-red-500">
                  {f.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Character;
