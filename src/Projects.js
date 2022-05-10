function Projects() {
  return (
    <div>
      <h1 className="project-title">Projects</h1>
      <div className="project">
        <div className="project-pic">
          <img src="./tiger.jpg" alt="tiger sports website" />
        </div>
        <div className="project-description">
          <h2>Tiger Sports Basketball League</h2>
          <p>
            Web application used to administer a basketball league, displaying the schedule,
            results, standings, and news updates. Built a dashboard for site administrator to log in
            and make required updates. <em>Project is still in progress.</em>
          </p>
          <p>
            <strong>Technologies Used:</strong> React, Redux Toolkit, PostgreSQL, Sequelize, Node,
            Express, React-Bootstrap, JSON Web Tokens, Markdown, React-Toastify, Git/GitHub, Webpack
          </p>

          <a href="https://www.github.com/a-eiber/tigerbasketball" className="btn">
            <button type="button">Source Code</button>
          </a>
        </div>
      </div>

      <div className="project">
        <div className="project-pic">
          <img src="./poke-mart.jpg" alt="poke mart website" />
        </div>
        <div className="project-description">
          <h2>Poké Mart Online Store</h2>
          <p>
            An online e-commerce version of the store popularly found in Pokémon games. Guests can
            add items to their cart, edit cart items, and checkout, with cart items saved in local
            storage. Users who create an account can have their cart items persist in an SQL
            database.
            <em>Minimum viable product is complete, however improvements are ongoing.</em>
          </p>
          <p>
            <strong>Technologies Used:</strong> React, Redux, PostgreSQL, Sequelize, Node, Express,
            React-Bootstrap, JSON Web Tokens, React-Toastify, Git/GitHub, Webpack, Heroku
          </p>

          <a href="https://fsa-poke-mart.herokuapp.com/" className="btn">
            <button type="button">Live Demo</button>
          </a>

          <a href="https://github.com/Aquamarine-gs/GraceShopper" className="btn">
            <button type="button">Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
