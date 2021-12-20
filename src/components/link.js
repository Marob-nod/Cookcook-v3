/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';
import React from 'react';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <h1>NavLink</h1>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A sx={styles.link} {...rest} href={path}>
      {children || label}
    </A>
  );
}

const styles = {
  link: {
    textDecoration: 'none',
    color: 'black',
  }
}
