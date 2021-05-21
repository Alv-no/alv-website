import React from 'react';
import Layout from '../layout';
import { ServicesHero } from '../components/servicesHero';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { ServicesSection } from '../components/servicesSection';
import { ColumnSection } from '../components/columnSection';
import { ImageTextFull } from '../components/imageTextFull';
import { useServicesQuery } from '../hookspages/useServicesQuery';
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
      section6description,
      section7description,
      section1Image,
      section3link,
      section6link,
      section4Image,
      section5Image,
      section7Image,
      _rawSection2Block,
      _rawSection4Block,
      _rawSection5Block,
    },
  } = data;

  const {
    sanityOurServicesPage: { pageDescription } = { pageDescription: false },
    sanityOurServicesPage: { pageTitle } = { pageTitle: false },
  } = data;

  return (
    <div className="overflow-hidden">
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="overflow-hidden w-screen">
          <ServicesHero backgroundImage={mainImage.asset.fluid}>
            <Title>{heading}</Title>
            <div className="h-8" />
            <Description align="center">{description}</Description>
          </ServicesHero>
          <div className="bg-white text-navy px-5 sm:px-12 lg:px-0 sm:-mt-20 -mt-5 overflow-hidden max-w-1200 mx-auto w-full">
            <ColumnSection
              eyebrow={section2Eyebrow}
              title={section2Title}
              blockContent={_rawSection2Block}
              imageText={section2ImageText}
              image={section1Image.asset.fluid}
            />
          </div>
          <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
            <ServicesSection
              description={section3description}
              title={data.sanityOurServicesPage.section3link.heroHeading}
              link={data.sanityOurServicesPage.section3link.slug.current}
            >
              {cards
                .filter(
                  (card) =>
                    card.parentPage.slug.current === section3link.slug.current
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
          <div className="max-w-1200 mx-auto xl:px-0 sm:px-12">
            {_rawSection4Block && (
              <ImageTextFull
                link={data.sanityOurServicesPage.section4link.slug.current}
                title={data.sanityOurServicesPage.section4link.heroHeading}
                blockContent={_rawSection4Block}
                image={section4Image.asset.fluid}
              />
            )}
            {_rawSection5Block && (
              <ImageTextFull
                link={data.sanityOurServicesPage.section5link.slug.current}
                title={data.sanityOurServicesPage.section5link.heroHeading}
                blockContent={_rawSection5Block}
                image={section5Image.asset.fluid}
                flip
              />
            )}
          </div>
          <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
            <ServicesSection
              title={data.sanityOurServicesPage.section6link.heroHeading}
              description={section6description}
              link={data.sanityOurServicesPage.section6link.slug.current}
            >
              {cards
                .filter(
                  (card) =>
                    card.parentPage.slug.current === section6link.slug.current
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
          <ImageTextCards
            title={data.sanityOurServicesPage.section7link.heroHeading}
            image={section7Image.asset.fluid}
            description={section7description}
            link={data.sanityOurServicesPage.section7link.slug.current}
          >
            {cards.slice(4, 6).map((card) => {
              return (
                <ServicesCard
                  title={card.heroHeading}
                  description={card.heroDescription}
                  link={`${data.sanityOurServicesPage.section7link.slug.current}/${card.slug.current}`}
                />
              );
            })}
          </ImageTextCards>
        </div>
      </Layout>
    </div>
  );
};

export default Services;
