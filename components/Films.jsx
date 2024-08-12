import Link from 'next/link';
import { formatDate } from '../utils';
import { URL } from '@/config';


const films = async () => {
  return fetch(`${URL}/api/films`, {
  }).then((res) => res.json());
};

async function Films() {
  const data = await films();
  // console.log(data);
  const allFilms = data;
  const filme = allFilms.filter((f) => Number(f.id) < 7);

  return (
    <>
      {filme?.map((f) => (
        
        <div className="flex mb-6" key={f.id}>
          <Link href={`/films/${f.id}`}>
            <div 
            className="flex flex-col align-middle text-center m-2 transition-transform" 
            >
              <h5>{f.title}</h5>
            </div>

            <img
              className="flex h-80 w-auto mx-5 hover:scale-105 transition-transform ease-in-out"
              src={`https://starwars-visualguide.com/assets/img/films/${f.id}.jpg`}
              alt={`Movie cover of '${f.title}'.`}
            />
            
          </Link>
        </div>
      ))}
    </>
  );
}

export default Films;
