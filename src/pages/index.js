import * as React from 'react';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';

// import {
//   faCoffee,
//   faAddressBook,
//   faAirFreshener,
//   faAmbulance,
//   faAtom,
//   faBus,
//   faCoins,
//   faDice,
// } from '@fortawesome/free-solid-svg-icons';

const headingStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
  maxWidth: 320,
};

const IndexPage = () => {
  return (
    <Layout pageTitle={'home'}>
      <title>Home Page</title>
      <h1 style={headingStyles}>Welcome to my site</h1>
      <p>Just getting started.</p>
      <nav className="social-links">
        <a
          href="https://github.com/resonantdoghouse"
          className="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://codepen.io/jimbennett"
          className="social-links__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCodepen} size="2x" />
        </a>
      </nav>
    </Layout>
  );
};

export default IndexPage;
