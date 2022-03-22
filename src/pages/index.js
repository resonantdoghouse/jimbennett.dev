import * as React from 'react';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';
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
        <Link to="https://github.com/resonantdoghouse">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link to="https://codepen.io/jimbennett">
          <FontAwesomeIcon icon={faCodepen} size="2x" />
        </Link>
      </nav>
    </Layout>
  );
};

export default IndexPage;
