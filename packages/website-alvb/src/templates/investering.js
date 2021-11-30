import React from 'react';
import localize from '../components/localize/index';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { NavyIntro } from 'shared-components';
import { ImagesSideBySide } from '../components/ImagesSideBySide';
import { RichtextAndImage } from '../components/richtextAndImage';
import { Cta } from '../components/cta';

const Investering = ({ data }) => {
  const {
    meta,
    section1,
    section2,
    section3,
    _rawSection4,
  } = data.sanityInvestmentPage;
  return (
    <div className="overflow-hidden">
      <Layout
        white
        whiteIcons
        pageTitle={meta.metaTitle}
        pageDescription={meta.metaDescription}
      >
        <NavyIntro title={section1.title} description={section1.text} white />
        <ImagesSideBySide
          imageLeft={section2.image1.asset.gatsbyImageData}
          imageRight={section2.image2.asset.gatsbyImageData}
        />
        <RichtextAndImage blocks={section3} maxWidth="1000" />
        <Cta {..._rawSection4} />
      </Layout>
    </div>
  );
};

export default localize(Investering);

export const query = graphql`
  query InvestmentPageQuery {
    sanityInvestmentPage {
      meta {
        en {
          _type
          metaDescription
          metaTitle
        }
        no {
          _type
          metaDescription
          metaTitle
        }
      }
      section1 {
        text {
          en
          no
          _type
        }
        title {
          _type
          en
          no
        }
      }
      section2 {
        image1 {
          asset {
            gatsbyImageData
          }
        }
        image2 {
          asset {
            gatsbyImageData
          }
        }
      }
      section3 {
        _rawEn
        _rawNo
        _type
      }
      section4 {
        button {
          en {
            _type
            link
            text
          }
          no {
            link
            _type
            text
          }
        }
        text {
          _type
          en
          no
        }
        title {
          _type
          en
          no
        }
      }
      _rawSection4
    }
  }
`;
