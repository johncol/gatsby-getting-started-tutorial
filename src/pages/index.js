import * as React from 'react';
import Layout from '../components/layout';

const headingAccentStyles = {
  color: '#663399',
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

// markup
const IndexPage = () => {
  return (
    <Layout
      title="Home"
      heading={
        <h1 style={headingStyles}>
          Congratulations
          <br />
          <span style={headingAccentStyles}>— nice Gatsby site! </span>
        </h1>
      }
    >
      <p>This is the home page for my first Gatsby project.</p>
    </Layout>
  );
};

export default IndexPage;
