const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const { Router, Route, hashHistory } = ReactRouter;

const NavBar = require('./NavBar.js');
const HomePage = require('./HomePage.js')
const AboutPage = require('./AboutPage.js')
const PortfolioPage = require('./PortfolioPage.js')
const ContactPage = require('./ContactPage.js')
const TributePage = require('./TributePage.js');

const App = () => (

  <Router history={hashHistory}>
    <Route path='/' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/portfolio' component={PortfolioPage} />
    <Route path='/contact' component={ContactPage} />
    <Route path='/tribute' component={TributePage} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
