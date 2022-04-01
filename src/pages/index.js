import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faCodepen,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  faPaw,
  faCode,
  faChalkboardTeacher,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';

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
      <p>
        My name is Jim and I'm a web developer{' '}
        <FontAwesomeIcon icon={faCode} size="1x" />, educator{' '}
        <FontAwesomeIcon icon={faChalkboardTeacher} size="1x" />, musician{' '}
        <FontAwesomeIcon icon={faMusic} size="1x" />, cat-dad{' '}
        <FontAwesomeIcon icon={faPaw} size="1x" />.
      </p>
      <p>
        You can see some of my 'work' in the <Link to="/blog">blog</Link>{' '}
        section of this site. The blog contains hobby/passion projects, things I
        work on in my spare time, as well as some write-ups about how projects
        are coded such as{' '}
        <Link to="/blog/creating-sound-with-tonejs">Tone.js</Link>.
      </p>
      <p>
        If you'd like to connect here are a few ways:{' '}
        <a
          href="https://github.com/resonantdoghouse"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        ,{' '}
        <a
          href="https://codepen.io/jimbennett"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen <FontAwesomeIcon icon={faCodepen} size="1x" />
        </a>
        ,{' '}
        <a
          href="https://www.linkedin.com/in/jim-bennett/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
      </p>
    </Layout>
  );
};

export default IndexPage;
