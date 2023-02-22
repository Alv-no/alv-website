import React from "react";
import {
  BlockContent,
  ColumnSection,
  Container,
  Description,
  ImageTextCards,
  ImageTextFull,
  ServicesCard,
  ServicesHero,
  ServicesSection,
  Title,
} from "shared-components";
import Layout from "../components/layout";
import config from "../config";
import { useLayoutQuery } from "../hooks/useLayoutQuery";
import { useServicesQuery } from "../hookspages/useServicesQuery";

const Services = () => {
  const data = useServicesQuery();
  const layoutData = useLayoutQuery();

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
      section3cards,
      section6cards,
      section7cards,
      section1Image,
      section3link,
      section4link,
      section5link,
      section6link,
      section7link,
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
      <Layout
        layoutData={layoutData}
        whiteIcons
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      >
        <div className="overflow-hidden w-screen">
          <ServicesHero backgroundImage={mainImage.asset.gatsbyImageData}>
            <Title>{heading}</Title>
            <div className="h-8" />
            <Description align="center">{description}</Description>
          </ServicesHero>
          <Container removePaddingMobile="bottom">
            <ColumnSection
              eyebrow={section2Eyebrow}
              title={section2Title}
              blockContent={_rawSection2Block}
              imageText={section2ImageText}
              image={section1Image.asset.gatsbyImageData}
            >
              <BlockContent blocks={_rawSection2Block} config={config} />
            </ColumnSection>
          </Container>
          <Container theme="gray">
            <ServicesSection
              description={section3description}
              title={section3link.heroHeading}
              link={section3link.slug.current}
            >
              {section3cards.map((card) => (
                <ServicesCard
                  title={card.heroHeading}
                  description={card.heroDescription}
                  link={`${section3link.slug.current}/${card.slug.current}`}
                />
              ))}
            </ServicesSection>
          </Container>
          {_rawSection4Block && (
            <Container>
              <ImageTextFull
                link={section4link.slug.current}
                title={section4link.heroHeading}
                image={section4Image.asset.gatsbyImageData}
              >
                <BlockContent blocks={_rawSection4Block} config={config} />
              </ImageTextFull>
            </Container>
          )}
          {_rawSection5Block && (
            <Container>
              <ImageTextFull
                link={section5link.slug.current}
                title={section5link.heroHeading}
                image={section5Image.asset.gatsbyImageData}
                flip
              >
                <BlockContent blocks={_rawSection5Block} config={config} />
              </ImageTextFull>
            </Container>
          )}
          <Container theme="gray">
            <ServicesSection
              title={section6link.heroHeading}
              description={section6description}
              link={section6link.slug.current}
            >
              {section6cards.map((card) => (
                <ServicesCard
                  title={card.heroHeading}
                  description={card.heroDescription}
                  link={`${section6link.slug.current}/${card.slug.current}`}
                />
              ))}
            </ServicesSection>
          </Container>
          <ImageTextCards
            title={section7link.heroHeading}
            image={section7Image.asset.gatsbyImageData}
            description={section7description}
            link={section7link.slug.current}
          >
            {section7cards.map((card) => (
              <ServicesCard
                title={card.heroHeading}
                description={card.heroDescription}
                link={`${section7link.slug.current}/${card.slug.current}`}
              />
            ))}
          </ImageTextCards>
        </div>
      </Layout>
    </div>
  );
};

export default Services;
