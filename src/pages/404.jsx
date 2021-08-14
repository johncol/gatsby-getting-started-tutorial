import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <p style={paragraphStyles}>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;
