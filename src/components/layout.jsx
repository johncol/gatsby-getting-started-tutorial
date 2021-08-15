import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Navigation } from './navigation';
import { container, heading as headingClass } from './layout.module.css';
import './layout.css';

const QUERY_TITLE = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ heading, children }) => {
  const data = useStaticQuery(QUERY_TITLE);
  const { title } = data.site.siteMetadata;
  return (
    <div className={container}>
      <title>{title}</title>
      <Navigation />
      <main>
        {typeof heading === 'string' ? <h1 className={headingClass}>{heading}</h1> : heading}

        {children}
      </main>
    </div>
  );
};

export { Layout };
