import React from 'react';
import { Layout } from '../../components/layout';
import { useInvestmentQuery } from '../../hookspages/useInvestmentQuery';
import { RichtextAndImage } from '../../components/richtextAndImage';
import { ImagesSideBySide } from '../../components/ImagesSideBySide';
import { Cta } from '../../components/cta';
import { NavyIntro } from 'shared-components';

const Investering = () => {
  const data = useInvestmentQuery();
  const {
    pageTitle,
    pageDescription,
    section1Title,
    section1Description,
    section2ImageLeft,
    section2ImageRight,
    _rawSection3Block,
  } = data;

  return (
    <div className="overflow-hidden">
      <Layout
        white
        whiteIcons
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      >
        <NavyIntro
          title={section1Title}
          description={section1Description}
          white
        />
        <ImagesSideBySide
          imageLeft={section2ImageLeft.asset.gatsbyImageData}
          imageRight={section2ImageRight.asset.gatsbyImageData}
        />
        <RichtextAndImage blocks={_rawSection3Block} maxWidth="1000" />
        <Cta
          title="Bli investor"
          text="Vi ser frem til å høre fra deg"
          buttonText="Ta kontakt"
          buttonLink="/kontakt-oss"
        />
      </Layout>
    </div>
  );
};

export default Investering;
