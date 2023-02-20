import React from 'react';
import { graphql } from 'gatsby';
import localize from '../components/localize/index';
import { Layout } from '../components/layout';
import { ServicesHero, Title, Description } from 'shared-components';
import { RichtextAndImage } from '../components/richtextAndImage';

const Projects = ({ data }) => {
  const { section1, section2, section3, section4, meta } =
    data.sanityOurServicesPage;
  return (
    <div className="overflow-hidden">
      <Layout
        white
        whiteIcons
        pageTitle={meta.metaTitle}
        pageDescription={meta.metaDescription}
      >
        <ServicesHero backgroundImage={section1.image.asset.gatsbyImageData}>
          <Title>
            <span className="text-white">{section1.title}</span>
          </Title>
          <div className="h-8" />
          <Description align="center">{section1.text}</Description>
        </ServicesHero>
        <RichtextAndImage
          image={section2.image.asset.gatsbyImageData}
          title={section2.title}
          blocks={section2.text}
          leftColSize={'50%'}
        />
        <RichtextAndImage
          image={section3.image.asset.gatsbyImageData}
          blocks={section3.text}
          leftColSize={'50%'}
          backgroundColor="gray"
          title={section3.title}
          flip
        />
        <RichtextAndImage blocks={section4} flip />
      </Layout>
    </div>
  );
};

export default localize(Projects);

export const query = graphql`
  query OurProjectsPageQuery {
    sanityOurServicesPage {
      _rawSection1
      _rawSection2
      _rawSection3
      _rawSection4
      meta {
        en {
          metaDescription
          metaTitle
        }
        no {
          metaDescription
          metaTitle
        }
      }
      section1 {
        title {
          en
          no
          _type
        }
        text {
          en
          no
          _type
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      section2 {
        text {
          _rawEn
          _rawNo
          _type
        }
        title {
          en
          no
          _type
        }
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      section3 {
        image {
          asset {
            gatsbyImageData
          }
        }
        text {
          _rawEn
          _rawNo
          _type
        }
        title {
          en
          no
          _type
        }
      }
      section4 {
        _type
        _rawEn
        _rawNo
      }
    }
  }
`;
