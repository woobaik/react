import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo />
    <div>
      <NavigationItems />
    </div>
  </header>
)

export default toolbar;
