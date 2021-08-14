import * as React from 'react';
import Layout from '../components/layout';
import { heading, accent } from './index.module.css';

const Heading = () => (
  <h1 className={heading}>
    Congratulations
    <br />
    <span className={accent}>— nice Gatsby site!</span>
  </h1>
);

const IndexPage = () => {
  return (
    <Layout title="Home" heading={<Heading />}>
      <p>This is the home page for my first Gatsby project.</p>
    </Layout>
  );
};

export default IndexPage;
