export default function Layout({ children }) {
  return (
    <>
    <main className="flex flex-row flex-wrap p-2 gap-16 justify-evenly mt-20 mx-10">
   
        {children}
      </main>
    </>
  );
}
