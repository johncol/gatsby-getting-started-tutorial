import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../components/layout';

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <p style={{ marginBottom: 48 }}>
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
