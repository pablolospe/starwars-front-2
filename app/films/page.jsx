import Films from '@/app/films/Films';

function filmsPage() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly my-20 mx-4 md:mx-40">
      <Films />
    </div>
  );
}

export default filmsPage;
