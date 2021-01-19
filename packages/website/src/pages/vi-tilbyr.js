import React from 'react';
import Layout from '../components/layout';
import { ServicesHero } from '../components/servicesHero';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { ServicesSection } from '../components/servicesSection';
import { ColumnSection } from '../components/columnSection';
import { ImageTextFull } from '../components/imageTextFull';
import { useServicesQuery } from '../hooks/useServicesQuery';
import { ServicesCard } from '../components/servicesCard';
import { ImageTextCards } from '../components/imageTextCards';

const Services = () => {
  const data = useServicesQuery();
  const dummyCard1 = {
    title: '.NET utvikler',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor.',
    link: '/vi-tilbyr',
  };
  const dummyCard2 = {
    title: 'JAVA utvikler',
    description:
      'Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor.',
    link: '/vi-tilbyr',
  };
  const dummyCard3 = {
    title: 'C# utvikler',
    description:
      'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor.',
    link: '/vi-tilbyr',
  };
  const dummyCard4 = {
    title: 'Agile & Devops',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisifwcing.',
    link: '/vi-tilbyr',
  };
  return (
    <Layout>
      <div className="overflow-hidden w-screen">
        <ServicesHero backgroundImage={data.heroImage.childImageSharp.fluid}>
          <Title>Vi tilbyr</Title>
          <div className="h-8" />
          <Description align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Description>
        </ServicesHero>
        <div className="bg-white text-navy px-5 sm:px-12 sm:-mt-20 -mt-5 overflow-hidden">
          <ColumnSection
            eyebrow="Lorem ipsum"
            title="Lorem ipsum dolor sit amet"
            image={data.columnsImg.childImageSharp.fluid}
          />
        </div>
        <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
          <ServicesSection title="Systemutvikling">
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
