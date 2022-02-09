import * as React from 'react';
import Layout from '../components/layout';

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
      <h1 style={headingStyles}>Welcome to my blog</h1>
      <p>Just getting started.</p>
    </Layout>
  );
};

export default IndexPage;
