'use server'

import Link from 'next/link';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { getCharacters, getFilms, getPlanets } from '@/utils/fetch';
import Image from 'next/image';

async function Character({ params, children }) {
  const { id } = params;
  const allChar = await getCharacters();
  const thisChar= allChar.find(f => f.id === id)
  
  const allFilms = await getFilms();
  const theseFilms = thisChar.films.map(f => parseInt(f))
  const result = allFilms.filter(f => theseFilms.includes(parseInt(f.id)));
  
  const allPlanets = await getPlanets();
  const thisPlanet = parseInt(thisChar.homeworld)
  const planetName = allPlanets.find(p => thisPlanet == parseInt(p.id));

  return (
    <div className="mt-36 md:mt-20 flex justify-center items-center max-h-screen">
      <Link href="/characters">
        <button className="fixed top-20 right-4 md:right-8 h-8 w-8 hover:scale-105 transition-transform">
          <BsArrowLeftCircle className="h-full w-full" />
        </button>
      </Link>

      <div className="flex flex-col md:flex-row gap-10 self-center ">
        <div>
          <h1 className="text-3xl text-center m-2">{thisChar?.name}</h1>
          <Image
            src={`https://starwars-visualguide.com/assets/img/characters/${thisChar?.id}.jpg`}
            alt={`Movie cover of '${thisChar?.title}'.`}
            width={300}
            height={500}
          />
        </div>

        <div className="md:mt-36 mb-4">
          <h2 className="text-xl mb-2">Planet:</h2> 
          <p className='ml-3'> {planetName.name}</p>
          <br/>
          
          <h2 className="text-xl mb-2">Films: </h2>
          <ul>
            {result.map((f, index) => (
              <Link key={index} href={`/films/${f.id}`}>
                <li className="gap-2 transition duration-500 hover:text-red-500 ml-3">
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
