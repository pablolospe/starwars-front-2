import React from 'react';

function AboutPage() {
  return (
    <div className="flex min-h-screen text-lg font-medium flex-col justify-evenly items-left p-8">
      <div className="mt-20 text-center">
        <h2 className='text-lg font-light'>Created by Pablo Xavier Lospennato</h2>
        <h3>Full Stack Developer</h3>
        <br/>
        <p className='text-md font-light md:mx-60'>"I'm a creative and results-driven full-stack developer with a passion for crafting digital solutions. With a strong background in both front-end and back-end development, I thrive in turning innovative ideas into functional, user-friendly applications. Let's build something amazing together!"</p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a
          href="https://github.com/pablolospe/microservicios-modularizados"
          target="_blank"
        >
          <button className=" p-5 border w-72 rounded-md bg-gray-950 hover:bg-gray-900 hover:scale-105 transition-transform ">
            Github Repo (backend)
          </button>
        </a>
        <a href="https://pablolospe.github.io/pol-folio/" target="_blank">
          <button className=" p-5 border w-72 rounded-md bg-gray-950 hover:bg-gray-900 hover:scale-105 transition-transform ">
            Portfolio
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutPage;
