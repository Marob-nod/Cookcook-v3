/** @jsxRuntime classic /
/* @jsx jsx */
import React from 'react';
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../theme';

import Layout from '../components/layout';
import Banner from '../sections/banner';
import SEO from '../components/seo'
// import KeyFeature from '../sections/key-feature';
// import ServiceSection from '../sections/service-section';
// import Feature from '../sections/feature';
// import CoreFeature from '../sections/core-feature';
// import WorkFlow from '../sections/workflow';
// import Package from '../sections/package';
// import TeamSection from '../sections/team-section';
// import TestimonialCard from '../sections/testimonial';


export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Banner />
        {/* <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard /> */}
      </Layout>
    </ThemeProvider>
  );
}
