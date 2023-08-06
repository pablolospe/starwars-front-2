import Films from '@/components/Films';
import React from 'react';

function page() {
  return (
    <div className="flex flex-row flex-wrap justify-evenly lg:px-24 my-24 mx-5">
      <Films />
    </div>
  );
}

export default page;
