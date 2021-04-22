import React from 'react';
import Layout from '../layout';
import { ImageTextListHero } from '../components/imageTextHero';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useWorkQuery } from '../hooks/useWorkQuery';

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
        <div className="">
          <ImageTextListHero
            image={data.stairs.childImageSharp.fluid}
            openPositions={data.allSanityOpenPostionPage.nodes}
          />
        </div>
        <div className="py-15 twelve:py-25">
          {reasonsCarousel && (
            <ReasonsSlider
              image={data.street.childImageSharp.fluid}
              mainHeading={reasonsCarousel.mainHeading}
              slides={reasonsCarousel.process}
            />
          )}
        </div>
        {/* <ImageTextShifted image={data.interview.childImageSharp.fluid} /> */}
      </Layout>
    </>
  );
};

export default WorkForAlv;
