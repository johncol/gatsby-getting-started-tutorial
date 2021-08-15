import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navigation from './navigation';
import { container, heading } from './layout.module.css';

const QUERY_TITLE = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ heading: headingFragment, children }) => {
  const data = useStaticQuery(QUERY_TITLE);
  const { title } = data.site.siteMetadata;
  return (
    <div className={container}>
      <title>{title}</title>
      <Navigation />
      <main>
        {headingFragment ? headingFragment : <h1 className={heading}>{title}</h1>}

        {children}
      </main>
    </div>
  );
};

export default Layout;
