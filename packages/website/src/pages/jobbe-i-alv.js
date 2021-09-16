import React from 'react';
import { Layout } from '../components/layout';
import { ImageTextListHero } from '../components/imageTextHero';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useWorkQuery } from '../hookspages/useWorkQuery';

const WorkForAlv = () => {
  const { sanityCareerPage, stairs, street } = useWorkQuery();

  return (
    <>
      <Layout
        pageTitle={sanityCareerPage.pageTitle}
        pageDescription={sanityCareerPage.pageDescription}
      >
        <div className="overflow-hidden">
          <ImageTextListHero
            image={stairs.childImageSharp.gatsbyImageData}
            positionsListLeft={sanityCareerPage.positionsListLeft}
            positionsListRight={sanityCareerPage.positionsListRight}
          />
        </div>
        <div className="py-15 twelve:py-25">
          {sanityCareerPage.reasonsCarousel && (
            <ReasonsSlider
              image={street.childImageSharp.gatsbyImageData}
              mainHeading={sanityCareerPage.reasonsCarousel.mainHeading}
              slides={sanityCareerPage.reasonsCarousel.process}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

export default WorkForAlv;
