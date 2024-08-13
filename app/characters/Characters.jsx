import { URL } from '@/config';
import Search from './Search';
import { getCharacters } from '@/utils/fetch';

async function Characters() {
  const data = await getCharacters();
  const allChar = data;

  return (
    <div >
      <Search allChar={allChar} />
    </div>
  );
}

export default Characters;
