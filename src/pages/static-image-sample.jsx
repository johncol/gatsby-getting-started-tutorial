import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from './../components/layout';
import { image } from './static-image-sample.module.css';

const StaticImageSample = () => {
  return (
    <Layout title="How to use StaticImage component?">
      <StaticImage src="./../images/jill-valentine.webp" alt="Jill Valentine from Resident Evil 3" className={image} />
    </Layout>
  );
};

export default StaticImageSample;
