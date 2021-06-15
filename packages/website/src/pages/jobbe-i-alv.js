import React from 'react';
import Layout from '../layout';
import { ImageTextListHero } from '../components/imageTextHero';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useWorkQuery } from '../hookspages/useWorkQuery';

const WorkForAlv = () => {
  const data = useWorkQuery();
  const {
    sanityCareerPage: { pageDescription } = { pageDescription: false },
    sanityCareerPage: { pageTitle } = { pageTitle: false },
    sanityCareerPage: { reasonsCarousel } = { reasonsCarousel: false },
  } = data;
  return (
    <>
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="overflow-hidden">
          <ImageTextListHero
            image={data.stairs.childImageSharp.gatsbyImageData}
            openPositions={data.allSanityOpenPostionPage.nodes}
          />
        </div>
        <div className="py-15 twelve:py-25">
          {reasonsCarousel && (
            <ReasonsSlider
              image={data.street.childImageSharp.gatsbyImageData}
              mainHeading={reasonsCarousel.mainHeading}
              slides={reasonsCarousel.process}
            />
          )}
        </div>
        {/* <ImageTextShifted image={data.interview.childImageSharp.gatsbyImageData} /> */}
      </Layout>
    </>
  );
};

export default WorkForAlv;
