import React from 'react';

const Home = () => {
  return (
    <div className="wrapper first">
      <article className="container" id="home">
        <div className="row">
          <div className="4u 12u(mobile)">
            <span className="image fit">
              <img src="./public/assets/images/profile_pic.png" alt="" />
            </span>
          </div>
          <div className="8u 12u(mobile)">
            <header>
              <h1>
                Hi. I&apos;m <strong> Carol &nbsp;St.&nbsp;Louis</strong>.
              </h1>
            </header>
            <p>
              Freelance Full-Stack Web Developer, living in the San Francisco
              Bay Area
            </p>
            <p>
              I&apos;ve always pursued opportunities and challenges that have
              intrigued me. As a web developer, I use my obsessive attention to
              detail to create fast, beautiful, and intuitive websites.
            </p>
            <p>
              I want to build things that solve real problems and make the world
              a better place.
            </p>
            <a href="#profile" className="button big scrolly home">
              Learn more about what I do
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Home;
