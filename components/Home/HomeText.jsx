function HomeText() {
  return (
    <>
      <h2 className='md:text-4xl text-amarillo'>STARWARS MICROSERVICES</h2>
      <br />
      <p>
        StarWars MicroServices is a web application that provides comprehensive
        information about the Star Wars universe, including details about
        characters and films.
      </p>
      <br />
      <p>
        Our application is powered by a backend of microservices, using Docker
        containers for seamless deployment and scalability. We utilize MongoDB
        as our database to store and retrieve vast amounts of Star Wars data
        efficiently.
      </p>
      <br />
      <p>
        The application is hosted on Google Cloud, ensuring reliable performance
        and availability for users all around the world.
      </p>
      <br />
      
      <h3 className="font-serif text-xl md:text-2xl">Features:</h3>

      <ul className="list-disc pl-6">
        <li>
          Explore detailed information about your favorite Star Wars characters
          and films.
        </li>
        <li>
          Search for specific characters or films to quickly find the
          information you're looking for.
        </li>
        <li>
          Enjoy a seamless and intuitive user experience with a responsive and
          user-friendly interface.
        </li>
      </ul>
      <br />
      <p>
        Whether you're a die-hard Star Wars fan or just curious to learn more
        about this beloved franchise, Star Wars MicroServices has got you
        covered. May the Force be with you!
      </p>
      <br/>
      
      <small >PD: Nowadays the database is provided by a custom API build in next14.</small>
    </>
  );
}

export default HomeText;
