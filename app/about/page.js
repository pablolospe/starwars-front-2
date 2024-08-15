import React from 'react';

function AboutPage() {
  return (
    <div className="flex min-h-screen text-lg font-medium flex-col justify-evenly items-left p-8">
      <div className="mt-20 text-center">
        <h2 className='text-lg font-light'>Created by </h2>
        <a className='text-xl font-light' href="https://pablolospe.github.io/pol-folio/" target="_blank">
          Pablo X. Lospennato
        </a>
        <p className='text-md font-light'>Full Stack Developer</p>
        <br/>
        <p className='text-md font-light md:mx-60'>
          "I'm a creative and results-driven developer with a passion for crafting digital solutions. 
        I thrive in turning innovative ideas into functional, user-friendly applications. Let's build something amazing together!"</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="https://github.com/pablolospe/microservicios-modularizados"
          target="_blank"
        >
          <button className=" p-4 border w-40 rounded-md bg-gray-950 hover:bg-gray-900 hover:scale-105 transition-transform ">
            Github Repo <br/> Backend
          </button>
        </a>
        <a
          href="https://github.com/pablolospe/starwars-front-2"
          target="_blank"
        >
          <button className=" p-4 border w-40 rounded-md bg-gray-950 hover:bg-gray-900 hover:scale-105 transition-transform ">
            Github Repo <br/> Frontend
          </button>
        </a>
        {/* <a href="https://pablolospe.github.io/pol-folio/" target="_blank">
          <button className=" p-4 border w-40 rounded-md bg-gray-950 hover:bg-gray-900 hover:scale-105 transition-transform flex align-middle items-center justify-center">
          Portfolio 
          </button>
        </a> */}
      </div>
    </div>
  );
}

export default AboutPage;
