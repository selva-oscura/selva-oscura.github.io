import React from 'react';
import LinkToProject from './LinkToProject';
import SkillArea from './SkillArea';

const Profile = props => {
  const skillAreas = [
    {
      icon: 'fa-user-circle',
      skillArea: 'Front End',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript / ES6',
        'React',
        'Redux',
        'jQuery',
        'Angular',
        'CSS Libraries: Bootstrap, Material Design, HTML5UP',
      ],
    },
    {
      icon: 'fa-server',
      skillArea: 'Back End',
      skills: [
        'Node.js',
        'MongoDB',
        'Meteor.js',
        'Express',
        'PHP',
        'MySQL',
        'limited exp.: Python, Ruby, Golang, & Elm',
      ],
    },
    {
      icon: 'fa-cogs',
      skillArea: 'Sundry',
      skills: [
        'Package Management: npm, yarn',
        'Linting: jshint, eslint, prettier',
        'Version Control: git',
        'Progressive Web Apps (PWAs)',
        'PaaS: Galaxy, Heroku',
        'DBaaS: mLab',
        'APIs: Facebook, Instagram, OpenWeather, Stripe, & many more',
        'Wireframe: Balsamiq',
      ],
    },
  ];
  return (
    <div className="wrapper style2">
      <article id="profile">
        <div className="container">
          <header>
            <h2>Skills &amp; Experience</h2>
            <div id="summary">
              <p>
                I'm a full-stack web developer with 4 years of experience. I
                specialize in developing websites which are fast, easy-to-use,
                and beautiful.
              </p>
              <p>
                <a
                  href="https://en.wikipedia.org/wiki/JavaScript"
                  target="javascript"
                >
                  JavaScript
                </a>{' '}
                /{' '}
                <a
                  href="https://en.wikipedia.org/wiki/ECMAScript"
                  target="ecmascript"
                >
                  ECMAScript
                </a>{' '}
                is my favorite language for web development because of its
                flexibility and the incredible pace of development of powerful
                libraries and frameworks in recent years. My most recent
                projects are Node.js full-stack, using{' '}
                <a href="https://www.meteor.com/" target="meteor">
                  Meteor.js
                </a>, the MERN stack (<a
                  href="https://www.mongodb.com/"
                  target="mongodb"
                >
                  MongoDB
                </a>,{' '}
                <a href="https://expressjs.com/" target="express">
                  Express.js
                </a>,{' '}
                <a href="https://facebook.github.io/react/" target="react">
                  React
                </a>, and{' '}
                <a href="https://nodejs.org/en/" target="node">
                  Node.js
                </a>), or the MEAN stack (<a
                  href="https://www.mongodb.com/"
                  target="mongodb"
                >
                  MongoDB
                </a>,{' '}
                <a href="https://expressjs.com/" target="express">
                  Express.js
                </a>,{' '}
                <a href="https://angular.io/" target="angular">
                  Angular
                </a>, and{' '}
                <a href="https://nodejs.org/en/" target="node">
                  Node.js
                </a>).
              </p>
              <p>
                For two recent client projects, I used Meteor's reactive
                programming framework to develop fast, secure websites, backed
                by MongoDB's databases, and utilized Node.js server-side cron
                jobs to automate notifications &nbsp; reports and to clear holds
                for uncompleted transactions (see Door-to-Door Shines
                <LinkToProject
                  text="description"
                  target="shines"
                  selectProject={props.selectProject}
                />
                &nbsp;or{' '}
                <a href="https://www.doortodoorshines.com" target="shines">
                  live
                </a>), and to update data that clients are monitoring (see
                <LinkToProject
                  text="Zyrl"
                  target="zyrl"
                  selectProject={props.selectProject}
                />
                ).
              </p>
              <p>
                In my personal projects and at hackathons, I've enjoyed
                exploring HTML5's new APIs, the myriad JS libraries &
                frameworks, and the ever greater browser capabilities:
              </p>
              <ul>
                <li>
                  to use React, web workers, and local storage on the client to
                  make{' '}
                  <a
                    href="https://developers.google.com/web/progressive-web-apps/"
                    target="pwa"
                  >
                    Progressive Web App
                  </a>{' '}
                  games (see
                  <LinkToProject
                    text="Sudoku"
                    target="sudoku"
                    selectProject={props.selectProject}
                  />
                  ,
                  <LinkToProject
                    text="Hangman"
                    target="hangman"
                    selectProject={props.selectProject}
                  />
                  , and
                  <LinkToProject
                    text="Tic-Tac-Toe"
                    target="tic-tac-toe"
                    selectProject={props.selectProject}
                  />
                  ) a cryptocurrency exchange tracker (see
                  <LinkToProject
                    text="CryptoGlance"
                    target="cryptoglance"
                    selectProject={props.selectProject}
                  />
                  )
                </li>
                <li>
                  to use Meteor.js, MongoDB,{' '}
                  <a href="http://materializecss.com/" target="materialize">
                    Materialize.css
                  </a>{' '}
                  (an adaptation of Google's Material Design), and{' '}
                  <a href="http://peerjs.com/" target="peerjs">
                    PeerJS
                  </a>{' '}
                  to implement a Portal-themed{' '}
                  <a href="https://webrtc.org/" target="webrtc">
                    WebRTC
                  </a>{' '}
                  live video chat site (see
                  <LinkToProject
                    text="PoRTCal"
                    target="portcal"
                    selectProject={props.selectProject}
                  />
                  ),
                </li>
                <li>
                  to use Meteor.js,{' '}
                  <a
                    href="https://v4-alpha.getbootstrap.com/"
                    target="bootstrap"
                  >
                    TwitterBootstrap
                  </a>, MongoDB, and geolocation & search criteria to match
                  would-be pet owners with adoptable animals (see
                  <LinkToProject
                    text="Animal Rescue"
                    target="animal_rescue"
                    selectProject={props.selectProject}
                  />
                  ).
                </li>
              </ul>
              <p>
                Older clients projects and bootcamp projects utilized the LAMP
                stack (Linux, Apache server, MySQL, and PHP) and Ruby on Rails.
              </p>
              <p>I&rsquo;ve also dabbled in Elm, GoLang, and Python.</p>
            </div>
          </header>
          <div className="flex-grid-thirds">
            {skillAreas.map((skillArea, i) =>
              <SkillArea key={i} skillArea={skillArea} />
            )}
          </div>
          <footer>
            <p>Want to learn more?</p>
            <a href="#portfolio" className="button big scrolly">
              Check out some of my recent work
            </a>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default Profile;
