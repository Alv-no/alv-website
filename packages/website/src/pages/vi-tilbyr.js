import React from 'react';
import Layout from '../layout';
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

  const cards = data.allSanityServices.edges.map((edge) => edge.node);

  const {
    sanityOurServicesPage: {
      heading,
      description,
      mainImage,
      section2ImageText,
      section2Eyebrow,
      section2Title,
      section3description,
      section3title,
      section4title,
      section4text,
      section5title,
      section5text,
      section6title,
      section7title,
      section1Image,
      section4Image,
      section5Image,
      section7Image,
    },
  } = data;

  const {
    sanityOurServicesPage: { pageDescription } = { pageDescription: false },
    sanityOurServicesPage: { pageTitle } = { pageTitle: false },
  } = data;

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="overflow-hidden w-screen">
        <ServicesHero backgroundImage={mainImage.asset.fluid}>
          <Title>{heading}</Title>
          <div className="h-8" />
          <Description align="center">{description}</Description>
        </ServicesHero>
        <div className="bg-white text-navy px-5 sm:px-12 sm:-mt-20 -mt-5 overflow-hidden">
          <ColumnSection
            eyebrow={section2Eyebrow}
            title={section2Title}
            imageText={section2ImageText}
            image={section1Image.asset.fluid}
          />
        </div>
        <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
          <ServicesSection
            description={section3description}
            title={section3title}
          >
            {cards
              .filter(
                (card) => card.parentPage.slug.current === 'systemutvikling'
              )
              .map((card) => {
                return (
                  <ServicesCard
                    title={card.heroHeading}
                    description={card.heroDescription}
                    link={`${card.parentPage.slug.current}/${card.slug.current}`}
                  />
                );
              })}
          </ServicesSection>
        </div>
        <ImageTextFull
          path=""
          title={section4title}
          text={section4text}
          image={section4Image.asset.fluid}
        />
        <ImageTextFull
          path=""
          title={section5title}
          text={section5text}
          image={section5Image.asset.fluid}
          flip
        />
        <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
          <ServicesSection title={section6title}>
            {cards.slice(0, 4).map((card) => {
              return (
                <ServicesCard
                  title={card.heroHeading}
                  description={card.heroDescription}
                  link={card.parentPage.slug.current}
                />
              );
            })}
          </ServicesSection>
        </div>
        <ImageTextCards title={section7title} image={section7Image.asset.fluid}>
          {cards.slice(4, 6).map((card) => {
            return (
              <ServicesCard
                title={card.heroHeading}
                description={card.heroDescription}
                link={card.parentPage.slug.current}
              />
            );
          })}
        </ImageTextCards>
      </div>
    </Layout>
  );
};

export default Services;
