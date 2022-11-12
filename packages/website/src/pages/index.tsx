import React from 'react';
import { graphql } from 'gatsby';
import { gql } from '@apollo/client';
import { client } from '../server-side/client';
import config from '../config';
import { createGatsbyImages } from '../server-side/imageCreator';
import {
  WhoWeAre,
  OurServices,
  BlogSlider,
  Hire,
  HireAlt,
  Container,
} from 'shared-components';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { useBlogQueryRecent } from '../hooks/useBlogQueryRecent';
import LandingPageHero from '../components/landingPageHero';
import Layout from '../components/layout';

const Index = ({ data, serverData } : any) => {
  const layoutData = useLayoutQuery();
  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  const landingPage = data.sanityLandingPage;

  return (
    <Layout
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      layoutData={layoutData}
    >
      <div className="bg-navy">
        <LandingPageHero
          backgroundImage={serverData.image}
          callToAction={serverData?.callToAction}
          introduction={serverData.introductionRaw}
          subHeading={serverData.introductionSubheaderRaw}
          ctaPosition={serverData.ctaPosition}
          showCta={serverData.showCallToAction}
          showContactForm={serverData.contactSchemaVisible}
        />
        <Container
          className="mt-12 sm:mt-2"
          theme="navy"
          maxWidth="1440"
          removePaddingMobile="bottom"
        >
          <WhoWeAre
            title="Hvem er vi"
            whiteText
            blocks={landingPage._rawAboutText}
            config={config}
          />
        </Container>
        <Container theme="navy" maxWidth="1440">
          <OurServices
            darkFade
            {...landingPage.section2Services}
            leftAlignTopSection
          />
        </Container>
        <Container theme="navy" maxWidth="1440" removePaddingMobile="top">
          <Hire
            darkFade
            title={landingPage.flipSection1Title}
            text={landingPage.flipSection1Text}
            buttonLink={landingPage.flipSection1ButtonLink}
            buttonText={landingPage.flipSection1ButtonText}
            image={landingPage.flipSection1Image.asset.gatsbyImageData}
          />
        </Container>
        <Container theme="navy" maxWidth="1440" removePaddingMobile="top">
          <HireAlt
            darkFade
            title={landingPage.flipSection3Title}
            text={landingPage.flipSection3Text}
            image={landingPage.flipSection3Image.asset.gatsbyImageData}
            imageText={landingPage.flipSection3ImageText}
          />
        </Container>
        <BlogSlider useBlogQuery={useBlogQueryRecent} maxWidth="1440" />
      </div>
    </Layout>
  );
};

export default Index;

async function fetchServerSideData() {
  const response = await client.query({
    query: gql`
      {
        LandingPage(id: "landingPage") {
          _id
          introductionRaw
          introductionSubheaderRaw
          showCallToAction
          contactSchemaVisible
          ctaPosition
          image: topBackgroundImage {
            asset {
              id: _id
              url
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
          callToAction {
            eyebrow
            title
            link
          }
        }
      }
    `,
    fetchPolicy: 'no-cache',
  });
  createGatsbyImages(response.data);
  return response.data;
}

export async function getServerData() {
  try {
    const pageData = await fetchServerSideData();

    return {
      props: { ...pageData.LandingPage },
      status: 200,
    };
  } catch {
    return {
      status: 500,
    };
  }
}

export const query = graphql`
  {
    sanityLandingPage {
      pageDescription
      pageTitle
      videoTextOverlay
      flipSection1Image {
        asset {
          gatsbyImageData
          url
        }
      }
      flipSection1Text
      flipSection1Title
      flipSection1ButtonLink
      flipSection1ButtonText
      section2Services {
        description
        heading
        link
        textOverImage
        image {
          asset {
            gatsbyImageData
          }
        }
        servicesList {
          link
          subtitle
          text
          title
        }
      }
      flipSection3Image {
        asset {
          gatsbyImageData
          url
        }
      }
      flipSection3Text
      flipSection3TextOverImage
      flipSection3Title
      _rawAboutText
      aboutTitle
    }
  }
`;
