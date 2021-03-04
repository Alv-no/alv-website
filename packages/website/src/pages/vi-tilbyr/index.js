import React from 'react';
import Layout from '../../layout';
import { ServicesHero } from '../../components/servicesHero';
import { Title } from '../../components/title';
import { Description } from '../../components/description';
import { ServicesSection } from '../../components/servicesSection';
import { ColumnSection } from '../../components/columnSection';
import { ImageTextFull } from '../../components/imageTextFull';
import { useServicesQuery } from '../../hooks/useServicesQuery';
import { ServicesCard } from '../../components/servicesCard';
import { ImageTextCards } from '../../components/imageTextCards';

const Services = () => {
  const data = useServicesQuery();

  const {
    sanityOurServicesPage: {
      heading,
      description,
      mainImage,
      section2ImageText,
      section2Eyebrow,
      section2Title,
      section3description,
    },
  } = data;

  const {
    sanityOurServicesPage: { pageDescription } = { pageDescription: false },
    sanityOurServicesPage: { pageTitle } = { pageTitle: false },
  } = data;

  const dummyCard1 = {
    title: '.NET utvikler',
    description: '',
    link: '/vi-tilbyr',
  };
  const dummyCard2 = {
    title: 'JAVA utvikler',
    description: '',
    link: '/vi-tilbyr',
  };
  const dummyCard3 = {
    title: 'C# utvikler',
    description: '',
    link: '/vi-tilbyr',
  };
  const dummyCard4 = {
    title: 'Agile & Devops',
    description: '',
    link: '/vi-tilbyr',
  };
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="overflow-hidden w-screen">
        <ServicesHero
          backgroundImage={
            (mainImage && mainImage.asset.fluid) ||
            data.heroImage.childImageSharp.fluid
          }
        >
          <Title>{heading}</Title>
          <div className="h-8" />
          <Description align="center">{description}</Description>
        </ServicesHero>
        <div className="bg-white text-navy px-5 sm:px-12 sm:-mt-20 -mt-5 overflow-hidden">
          <ColumnSection
            eyebrow={section2Eyebrow}
            title={section2Title}
            imageText={section2ImageText}
            image={data.columnsImg.childImageSharp.fluid}
          />
        </div>
        <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
          <ServicesSection
            description={section3description}
            title="Systemutvikling"
          >
            <ServicesCard {...dummyCard1} />
            <ServicesCard {...dummyCard2} />
            <ServicesCard {...dummyCard3} />
            <ServicesCard {...dummyCard4} />
            <ServicesCard {...dummyCard2} />
            <ServicesCard {...dummyCard3} />
            <ServicesCard {...dummyCard4} />
          </ServicesSection>
        </div>
        <ImageTextFull image={data.imageLeft.childImageSharp.fluid} />
        <ImageTextFull image={data.imageRight.childImageSharp.fluid} flip />
        <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
          <ServicesSection title="Data & Analyse">
            <ServicesCard {...dummyCard1} />
            <ServicesCard {...dummyCard4} />
            <ServicesCard {...dummyCard2} />
            <ServicesCard {...dummyCard3} />
          </ServicesSection>
        </div>
        <ImageTextCards image={data.imageLeft.childImageSharp.fluid}>
          <ServicesCard {...dummyCard2} />
          <ServicesCard {...dummyCard3} />
        </ImageTextCards>
      </div>
    </Layout>
  );
};

export default Services;
