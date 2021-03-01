import React from 'react';
import Layout from '../layout';
import { ImageTextListHero } from '../components/imageTextHero';
import { useWorkQuery } from '../hooks/useWorkQuery';

const WorkForAlv = () => {
  const data = useWorkQuery();
  const {
    sanityCareerPage: { pageDescription } = { pageDescription: false },
    sanityCareerPage: { pageTitle } = { pageTitle: false },
  } = data;
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <ImageTextListHero image={data.stairs.childImageSharp.fluid} />
      {/* <ReasonsSlider image={data.street.childImageSharp.fluid} />
      <ImageTextShifted image={data.interview.childImageSharp.fluid} /> */}
    </Layout>
  );
};

export default WorkForAlv;
