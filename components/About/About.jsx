import React from 'react';

function About() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-6'>

        <a href="https://github.com/pablolospe/microservicios-modularizados" target="_blank">
          <button className="text-center p-5 border rounded-md hover:bg-gray-800 hover:scale-105 transition-transform ">
            Github Repo (backend)
          </button>
        </a>
        <a href="https://pablolospe.github.io/pol-folio/" target="_blank">
          <button className="text-center p-5 border rounded-md hover:bg-gray-900 hover:scale-105 transition-transform ">
            Portfolio
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
