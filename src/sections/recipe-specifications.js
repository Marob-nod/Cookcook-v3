/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from '../components/feature-card-column';
import preptimeLogo from '../../public/static/prep-time.png'
import servesLogo from '../../public/static/serves.png'
import cookingTimeLogo from '../../public/static/cooking-time.png'
import levelLogo from '../../public/static/level.png'
import React from 'react';

export default function RecipeSpecifications({ prepTime, cookTime, serves, level }) {
  const data = [
    {
      id: 1,
      imgSrc: preptimeLogo,
      altText: 'preparation time',
      title: 'PrepTime',
      value: prepTime
    },
    {
      id: 2,
      imgSrc: cookingTimeLogo,
      altText: 'cookTime',
      title: 'CookTime',
      value: cookTime
    },
    {
      id: 3,
      imgSrc: servesLogo,
      altText: 'serves',
      title: 'Serves',
      value: serves
    },
    {
      id: 4,
      imgSrc: levelLogo,
      altText: 'level',
      title: 'Level',
      value: level
    },
  ];
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="About this recipe"
          title="Cooking Specifications"
        />
        <Grid sx={styles.grid}>
          {data.map((item, i) => (
            <FeatureCardColumn
              key={i}
              src={item.imgSrc}
              title={item.title}
              text={item.value}
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
