import React, { Children } from 'react';

function Characters({ children }) {
  return (
    <>
      <main className="
      flex 
      flex-row 
      flex-wrap 
      p-2 
      justify-evenly 
      mt-24 
      mx-12
      ">
        {children}
      </main>
    </>
  );
}

export default Characters;
