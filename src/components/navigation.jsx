import React from 'react';
import { Link } from 'gatsby';
import { navigation, navigationList, navigationLink } from './navigation.module.css';

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Static Image', to: '/static-image-sample' },
];

const Navigation = () => {
  return (
    <nav className={navigation}>
      <ul className={navigationList}>
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.to} className={navigationLink}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
