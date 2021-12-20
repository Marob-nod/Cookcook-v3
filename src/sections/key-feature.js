/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import RecipeCard from '../components/recipe-card';
import Performance from '../../public/static/key-feature/performance.svg';
import Partnership from '../../public/static/key-feature/partnership.svg';
import Subscription from '../../public/static/key-feature/subscription.svg';
import Support from '../../public/static/key-feature/support.svg';
import React from 'react';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature({ slogan, title, recipes }) {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan={slogan ? slogan : "Whats the function"}
          title={title ? title : "Meet the feature"}
        />
        <Grid sx={styles.grid}>
          {recipes?.map((item, i) => (
            <RecipeCard
              key={i}
              title={item.name}
              text={item.description}
              src={item.imgUrl}
              to={item.slug}
              path={item.slug}
            />
          ))}
        </Grid>
      </Container>

    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
