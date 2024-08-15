import { formatDate } from '@/utils';
import Link from 'next/link';
import Opening from '@/components/Opening/Opening';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { getCharacters, getFilms } from '@/utils/fetch';
import Image from 'next/image';

async function Film({ params }) {
  const { id } = params;
  const allFilms = await getFilms();
  const thisFilm = allFilms.find(f => f.id === id)

  const theseChar = thisFilm.characters.map(ch => parseInt(ch))
  const allChar = await getCharacters();
  const result = allChar.filter(char => theseChar.includes(parseInt(char.id)));

  return (
    <div className="flex flex-row flex-wrap justify-center my-24 mx-4 md:mx-40">

      {/* BACK BUTTON */}
      <Link href="/films">
        <button className="fixed top-20 right-4 md:right-20 h-8 w-8 hover:scale-105 transition-transform">
          <BsArrowLeftCircle className="h-full w-full" />
        </button>
      </Link>

      {/* TITLE INFO */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl mt-1">{thisFilm?.title}</h1>
        <h5 className="text-sm font-light mt-1">Dir: {thisFilm?.director}</h5>
        <h5 className="text-sm font-light mt-1">
          Release: {formatDate(thisFilm?.release_date)}
        </h5>
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row my-8 gap-8">

        <div className=''>
          <Opening opening_crawl={thisFilm?.opening_crawl} />
        </div>
        
        <Image
          // style={{ alignItems: 'center', height: '360px', width: 'auto' }}
          className='w-full md:w-2/3'
          width={250}
          height={450}
          src={`https://starwars-visualguide.com/assets/img/films/${thisFilm?.id}.jpg`}
          alt={`Movie cover of '${thisFilm?.title}'.`}
        />

      </div>

      <div>
        <h5 className="text-sm text-center m-3">Characters in this film</h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
          { }
          {result.map((ch, index) => (
            <Link href={`/characters/${ch.id}`} key={ch.id} >

              <Image
                className=' hover:scale-105 transition-transform border-solid border-2 border-[#ffff0055]'
                src={`https://starwars-visualguide.com/assets/img/characters/${ch.id}.jpg`}
                alt={`Movie cover of '${thisFilm?.title}'.`}
                width={150}
                height={300}
              />
              <p className='text-center'>{ch.name}</p>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Film;
