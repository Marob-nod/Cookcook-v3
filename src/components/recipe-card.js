/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Image, Box, Heading, Text } from 'theme-ui';
import { Link } from './link';
import React from 'react';

export default function RecipeCard({
  src,
  altText = 'default alt text',
  title,
  text,
  to,
  path,
  key,
}) {
  return (
    <Box sx={styles.card}>
      <Link
        activeClass='active'
        to={path}
        path={path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        key={key}
      >
        <Image src={src} altText={altText} sx={styles.img} />
        <Box sx={styles.wrapper}>
          <Heading sx={styles.wrapper.title}>{title}</Heading>
          <Text sx={styles.wrapper.subTitle}>{text}</Text>
        </Box>
      </Link>
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: ['center', 'flex-start'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'left'],
    px: [4, null, 0],
    backgroundColor: 'whitesmoke',
    boxShadow: ['none', null, '0 8px 20px rgba(39, 83, 123, 0.12)'],
    borderRadius: 20,
    border: '1px solid black',
  },
  img: {
    width: '350px',
    height: '200px',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    p: 2,
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: '1.9',
    },
  },
};
