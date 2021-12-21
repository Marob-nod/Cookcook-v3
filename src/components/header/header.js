/** @jsxRuntime classic /
/* @jsx jsx */
import React from 'react';
import { Container, Flex, Button } from 'theme-ui';
import { Link } from '../link';
import { keyframes, jsx } from '@emotion/react';
import Logo from '../logo';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';


export default function Header({ className }) {
  return (
    <header className={className} id='header'>
      <Container sx={styles.container}>
        <Logo src="https://img.icons8.com/color/48/000000/cook-female.png" alt="1234" />
        <Flex as="nav" sx={styles.nav}>
          {menuItems.map((menuItem, i) => (
            <Link
              activeClass='active'
              to={menuItem.path}
              path={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={i}
            >
              {menuItem.label}
            </Link>
          ))}
        </Flex>
        <Button className="donate__btn" variant="secondary" aria-label="Get Started">
          Get Started
        </Button>
        <MobileDrawer />
      </Container>
    </header>
  );
}

// const positionAnim = keyframes`
//   from {
//     position: fixed;
//     opacity: 1;
//   }

//   to {
//     position: absolute;
//     opacity: 1;
//     transition: all 0.4s ease;
//   }
// `;

const styles = {
  caca: {
    boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 3,

    zIndex: 33,
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
