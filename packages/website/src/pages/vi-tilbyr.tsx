import React from 'react';
import Layout from '../components/layout';
import { useServicesQuery } from '../hookspages/useServicesQuery';
import { StyledBlockContent } from '../components/styledBlockContent';
import {
  ServicesHero,
  Title,
  Description,
  ServicesSection,
  ColumnSection,
  ImageTextCards,
  ImageTextFull,
  Container,
  ServicesCard,
} from 'shared-components';
import { useLayoutQuery } from '../hooks/useLayoutQuery';

type Card = any;

const Services : React.FC = () => {
  const data = useServicesQuery();
  const layoutData = useLayoutQuery();
  const cards = data.allSanityServices.edges.map((edge : any) => edge.node);

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
              <StyledBlockContent blocks={_rawSection2Block} />
            </ColumnSection>
          </Container>
          <Container theme="gray">
            <ServicesSection
              description={section3description}
              title={data.sanityOurServicesPage.section3link.heroHeading}
              link={data.sanityOurServicesPage.section3link.slug.current}
            >
              {cards
                .filter(
                  (card : Card) =>
                    card.parentPage.slug.current === section3link.slug.current
                )
                .map((card : Card) => {
                  return (
                    <ServicesCard
                      title={card.heroHeading}
                      description={card.heroDescription}
                      link={`${card.parentPage.slug.current}/${card.slug.current}`}
                    />
                  );
                })}
            </ServicesSection>
          </Container>
          {_rawSection4Block && (
            <Container>
              <ImageTextFull
                link={data.sanityOurServicesPage.section4link.slug.current}
                title={data.sanityOurServicesPage.section4link.heroHeading}
                image={section4Image.asset.gatsbyImageData}
              >
                <StyledBlockContent blocks={_rawSection4Block} />
              </ImageTextFull>
            </Container>
          )}
          {_rawSection5Block && (
            <Container>
              <ImageTextFull
                link={data.sanityOurServicesPage.section5link.slug.current}
                title={data.sanityOurServicesPage.section5link.heroHeading}
                image={section5Image.asset.gatsbyImageData}
                flip
              >
                <StyledBlockContent blocks={_rawSection5Block} />
              </ImageTextFull>
            </Container>
          )}
          <Container theme="gray">
            <ServicesSection
              title={data.sanityOurServicesPage.section6link.heroHeading}
              description={section6description}
              link={data.sanityOurServicesPage.section6link.slug.current}
            >
              {cards
                .filter(
                  (card : Card) =>
                    card.parentPage.slug.current === section6link.slug.current
                )
                .map((card : Card) => {
                  return (
                    <ServicesCard
                      title={card.heroHeading}
                      description={card.heroDescription}
                      link={`${card.parentPage.slug.current}/${card.slug.current}`}
                    />
                  );
                })}
            </ServicesSection>
          </Container>
          <ImageTextCards
            title={data.sanityOurServicesPage.section7link.heroHeading}
            image={section7Image.asset.gatsbyImageData}
            description={section7description}
            link={data.sanityOurServicesPage.section7link.slug.current}
          >
            {cards.slice(4, 6).map((card : Card) => {
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
