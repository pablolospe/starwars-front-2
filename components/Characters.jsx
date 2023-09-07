
import Link from 'next/link';
import Search from './Search';

const characters = async () => {
  return fetch('http://34.125.251.76:8000/characters', {
  }).then((res) => res.json());
};

async function Characters() {
  const data = await characters();
  const allChar = data.data;

  return (
    <div >
   
      <Search allChar={allChar} />

    </div>
  );
}

export default Characters;
