import React from 'react';

import { heading, accent } from './heading.module.css';

const Heading = ({ mainText, accentText }) => {
  return (
    <h1 className={heading}>
      {mainText}
      <br />
      <span className={accent}>{accentText}</span>
    </h1>
  );
};

export { Heading };
