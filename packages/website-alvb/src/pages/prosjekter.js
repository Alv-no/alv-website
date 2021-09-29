import React from 'react';
import { Layout } from '../components/layout';
import { useOurServicesQuery } from '../hookspages/useOurServicesQuery';
import { ServicesHero, Title, Description } from 'shared-components';

const Services = () => {
  const data = useOurServicesQuery();

  const {
    pageTitle,
    pageDescription,
    mainImage,
    heading,
    description,
  } = data.sanityOurServicesPage;

  return (
    <div className="overflow-hidden">
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <ServicesHero backgroundImage={mainImage.asset.gatsbyImageData}>
          <Title>{heading}</Title>
          <div className="h-8" />
          <Description align="center">{description}</Description>
        </ServicesHero>
      </Layout>
    </div>
  );
};

export default Services;
