import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { RichtextAndImage } from '../components/richtextAndImage';
import { Services } from '../components/services';
import { NavyIntro, ServicesCard } from 'shared-components';
import localize from '../components/localize/index';

const Biobank = ({ data }) => {
  const { meta, section1, section2, section3 } = data.sanityBioBank;

  return (
    <div className="overflow-hidden">
      <Layout
        white
        whiteIcons
        pageTitle={meta.metaTitle}
        pageDescription={meta.metaDescription}
      >
        <NavyIntro title={section1.title} description={section1.text} white />
        <RichtextAndImage
          image={section2.image.asset.gatsbyImageData}
          blocks={section2.block}
          leftColSize={'30%'}
          title={section2.title}
          flip
        />
        <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
          <Services title={section3.title}>
            {section3.categoryList.map((card) => {
              return (
                <ServicesCard title={card.title} description={card.text} />
              );
            })}
          </Services>
        </div>
      </Layout>
    </div>
  );
};

export default localize(Biobank);

export const query = graphql`
  query BioBankQuery {
    sanityBioBank {
      meta {
        en {
          metaDescription
          metaTitle
          _type
        }
        no {
          _type
          metaDescription
          metaTitle
        }
      }
      section1 {
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
      section2 {
        block {
          _type
          _rawEn
          _rawNo
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      section3 {
        title {
          _type
          en
          no
        }
        categoryList {
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
      }
    }
  }
`;
