
import Link from 'next/link';
import Search from './Search';
import { URL } from '@/config';

const characters = async () => {
  return fetch(`${URL}/api/characters`, {
  }).then((res) => res.json());
};

async function Characters() {
  const data = await characters();
  // console.log(data);
  const allChar = data;

  return (
    <div >
   
      <Search allChar={allChar} />

    </div>
  );
}

export default Characters;
