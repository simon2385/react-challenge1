import React from 'react';

import classes from './Header.module.css';

const Header = ({ title }) => {
  return (
    <div className={classes['header-container']}>
      <h1 className={classes['header-title']}>{title}</h1>
    </div>
  );
};

export default Header;
