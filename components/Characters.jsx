import Search from './Search';

const characters = async () => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/characters`, {
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
