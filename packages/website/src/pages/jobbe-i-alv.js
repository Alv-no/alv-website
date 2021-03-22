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
    <div className="min-h-screen bg-footerblue">
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="">
          <ImageTextListHero
            image={data.stairs.childImageSharp.fluid}
            openPositions={data.allSanityOpenPostionPage.nodes}
          />
        </div>
        {/* <ReasonsSlider image={data.street.childImageSharp.fluid} />
      <ImageTextShifted image={data.interview.childImageSharp.fluid} /> */}
      </Layout>
    </div>
  );
};

export default WorkForAlv;
