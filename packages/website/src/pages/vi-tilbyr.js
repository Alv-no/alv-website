import React from 'react';
import Layout from '../components/layout';
import { getAllServicesQueryServerSide } from '../hooks/useAllServicesQueryServerSide';
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
  ServicesCard,
} from 'shared-components';
import { client } from '../server-side/client';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { gql } from '@apollo/client';

const Services = ({ serverData }) => {
  const data = useServicesQuery();
  const layoutData = useLayoutQuery();
  const cards = serverData.allServices;

  const {
    heading,
    description,
    section2ImageText,
    section2Eyebrow,
    section2Title,
    section3description,
    section6description,
    section7description,
    section3link,
    section4link,
    section6link,
    section7link,
    _rawSection2Block,
    _rawSection4Block,
    _rawSection5Block,
  } = serverData.serviceData.OurServicesPage;

  const {
    mainImage,
    section1Image,
    section4Image,
    section5Image,
    section7Image,
  } = data.sanityOurServicesPage;

  const {
    sanityOurServicesPage: { pageDescription } = { pageDescription: false },
    sanityOurServicesPage: { pageTitle } = { pageTitle: false },
  } = serverData.serviceData.OurServicesPage;

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
          <div className="bg-white text-navy px-5 sm:px-12 lg:px-0 -mt-5 overflow-hidden max-w-1200 mx-auto w-full">
            <ColumnSection
              eyebrow={section2Eyebrow}
              title={section2Title}
              blockContent={_rawSection2Block}
              imageText={section2ImageText}
              image={section1Image.asset.gatsbyImageData}
            >
              <StyledBlockContent blocks={_rawSection2Block} />
            </ColumnSection>
          </div>
          <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
            <ServicesSection
              description={section3description}
              title={section3link.heroHeading}
              link={section3link.slug.current}
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
                link={section4link.slug.current}
                title={section4link.heroHeading}
                image={section4Image.asset.gatsbyImageData}
              >
                <StyledBlockContent blocks={_rawSection4Block} />
              </ImageTextFull>
            )}
            {_rawSection5Block && (
              <ImageTextFull
                link={data.sanityOurServicesPage.section5link.slug.current}
                title={data.sanityOurServicesPage.section5link.heroHeading}
                image={section5Image.asset.gatsbyImageData}
                flip
              >
                <StyledBlockContent blocks={_rawSection5Block} />
              </ImageTextFull>
            )}
          </div>
          <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
            <ServicesSection
              title={section6link.heroHeading}
              description={section6description}
              link={section6link.slug.current}
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
            title={section7link.heroHeading}
            image={section7Image.asset.gatsbyImageData}
            description={section7description}
            link={section7link.slug.current}
          >
            {cards.slice(4, 6).map((card) => {
              return (
                <ServicesCard
                  title={card.heroHeading}
                  description={card.heroDescription}
                  link={`${section7link.slug.current}/${card.slug.current}`}
                />
              );
            })}
          </ImageTextCards>
        </div>
      </Layout>
    </div>
  );
};

async function getOurServicesData() {
  const response = await client.query({
    fetchPolicy: 'no-cache',
    variables: {
      id: 'ourServicesPage',
    },
    query: gql`
      query OurServicesById($id: ID!) {
        OurServicesPage(id: $id) {
          description
          heading
          pageDescription
          pageTitle
          section7link {
            slug {
              current
            }
            heroHeading
          }
          section6link {
            heroHeading
            slug {
              current
            }
          }
          section5link {
            slug {
              current
            }
            heroHeading
          }
          section4link {
            slug {
              current
            }
            heroHeading
          }
          section7link {
            heroHeading
            slug {
              current
            }
          }
          section3link {
            slug {
              current
            }
            heroHeading
          }
          section3description
          section2Title
          section2Eyebrow
          section2ImageText
          section7description
          section6description
          _rawSection2Block: section2blockRaw
          _rawSection4Block: section4blockRaw
          _rawSection5Block: section5blockRaw
        }
      }
    `,
  });

  return response.data;
}

export async function getServerData() {
  try {
    return {
      status: 200,
      props: {
        serviceData: await getOurServicesData(),
        allServices: await getAllServicesQueryServerSide(),
      },
    };
  } catch (e) {
    return {
      status: 500,
    };
  }
}

export default Services;
