export default function Layout({ children }) {
  return (
    <>
    <main className="flex flex-row flex-wrap justify-evenly lg:px-24 my-24 mx-10">
   
        {children}
      </main>
    </>
  );
}
