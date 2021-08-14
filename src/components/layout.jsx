import React from 'react';
import Navigation from './navigation';
import { container, heading } from './layout.module.css';

const Layout = ({ title, heading: headingFragment, children }) => {
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
