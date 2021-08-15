import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from './../components/layout';
import Heading from '../components/heading';

const StaticImageHeading = () => {
  return <Heading mainText="How to use" accentText="StaticImage?" />;
};

const StaticImageSample = () => {
  return (
    <Layout heading={<StaticImageHeading />}>
      <StaticImage
        src="./../images/jill-valentine.webp"
        alt="Jill Valentine from Resident Evil 3"
        layout="constrained"
      />
    </Layout>
  );
};

export default StaticImageSample;
