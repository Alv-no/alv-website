import React from 'react';
import { Layout } from '../components/layout';
import { useOurServicesQuery } from '../hookspages/useOurServicesQuery';
import { ServicesHero, Title, Description } from 'shared-components';
import { RichtextAndImage } from '../components/richtextAndImage';

const Projects = () => {
  const data = useOurServicesQuery();

  const {
    pageTitle,
    pageDescription,
    mainImage,
    heading,
    description,
    section2Image,
    section2Title,
    _rawSection2Block,
    section3Image,
    section3Title,
    _rawSection3Block,
    _rawSection4Block,
  } = data.sanityOurServicesPage;

  return (
    <div className="overflow-hidden">
      <Layout
        white
        whiteIcons
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      >
        <ServicesHero backgroundImage={mainImage.asset.gatsbyImageData}>
          <Title>
            <span className="text-white">{heading}</span>
          </Title>
          <div className="h-8" />
          <Description align="center">{description}</Description>
        </ServicesHero>
        <RichtextAndImage
          image={section2Image.asset.gatsbyImageData}
          blocks={_rawSection2Block}
          leftColSize={'50%'}
          title={section2Title}
        />
        <RichtextAndImage
          image={section3Image.asset.gatsbyImageData}
          blocks={_rawSection3Block}
          leftColSize={'50%'}
          backgroundColor="gray"
          title={section3Title}
          flip
        />
        <RichtextAndImage blocks={_rawSection4Block} flip />
      </Layout>
    </div>
  );
};

export default Projects;
