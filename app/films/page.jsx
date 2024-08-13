import Films from '@/app/films/Films';

function page() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly xl:px-40 my-20 mx-5">
      <Films />
    </div>
  );
}

export default page;
