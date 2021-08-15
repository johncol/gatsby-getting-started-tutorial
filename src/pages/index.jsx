import * as React from 'react';
import Heading from '../components/heading';
import Layout from '../components/layout';

const IndexHeading = () => {
  return <Heading mainText="Congratulations" accentText="— nice Gatsby site!" />;
};

const IndexPage = () => {
  return (
    <Layout heading={<IndexHeading />}>
      <p>This is the home page for my first Gatsby project.</p>
    </Layout>
  );
};

export default IndexPage;
