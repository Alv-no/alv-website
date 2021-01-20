import React from 'react';
import Layout from '../components/layout';
import { ImageTextShifted } from '../components/imageTextOverlap';
import { ImageTextListHero } from '../components/imageTextHero';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useWorkQuery } from '../hooks/useWorkQuery';

const WorkForAlv = () => {
  const data = useWorkQuery();
  return (
    <Layout>
      <ImageTextListHero image={data.stairs.childImageSharp.fluid} />
      <div className="h-5 sm:h-8 lg:h-12 twelve:h-20" />
      <ReasonsSlider image={data.street.childImageSharp.fluid} />
      <div className="h-5 sm:h-8 lg:h-16 twelve:h-20" />
      <ImageTextShifted image={data.interview.childImageSharp.fluid} />
      <div className="h-5 sm:h-10 lg:h-20 twelve:h-24" />
    </Layout>
  );
};

export default WorkForAlv;
