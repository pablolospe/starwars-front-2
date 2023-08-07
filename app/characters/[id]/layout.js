import React from 'react';
import { formatDate } from '@/utils';
import Link from 'next/link';

const CharacterDetail = async (id) => {
  return fetch(`http://34.125.251.76:8000/characters/${id}`).then((res) =>
    res.json()
  );
};

async function Character({ params, children }) {
  const { id } = params;
  const thisChar = await CharacterDetail(id);

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <h1 className="text-3xl">{thisChar?.data?.name}</h1>
      <img
        style={{ alignItems: 'center', maxHeight: '480px', width: 'auto' }}
        src={`https://starwars-visualguide.com/assets/img/characters/${thisChar?.data?._id}.jpg`}
        alt={`Movie cover of '${thisChar?.data?.title}'.`}
      />
      <div >
        <h2 className="text-xl mb-2">Films: </h2>
        <ul>
          {thisChar?.data?.films.map((f, index) => (
            <Link href={`/films/${f._id}`}>
              <li className='gap-2 transition duration-500 hover:text-red-500'>
                {f.title}
                {/* {index !== thisChar.data.films.length - 1 ? ', ' : '.'} */}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Character;
