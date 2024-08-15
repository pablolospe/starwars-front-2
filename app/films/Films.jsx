import { URL } from '@/config';
import { getFilms } from '@/utils/fetch';
import Image from 'next/image';
import Link from 'next/link';

async function Films() {
  const data = await getFilms();

  const allFilms = data;
  const filme = allFilms.filter((f) => Number(f.id) < 7);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center my-32 mx-4 md:mx-10 lg:mx-40 gap-8">
      {filme?.map((f) => (

        <div className="flex mb-6" key={f.id}>
          <Link href={`/films/${f.id}`}>

            <Image
              className="hover:scale-105 transition-transform ease-in-out"
              src={`https://starwars-visualguide.com/assets/img/films/${f.id}.jpg`}
              alt={`Movie cover of '${f.title}'.`}
              height={400}
              width={200}
            />

            <h5 className='text-center mt-2'>{f.title}</h5>

          </Link>
        </div>
      ))}
    </div>
  );
}

export default Films;
