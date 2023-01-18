import { gql } from '@apollo/client';
import { graphql } from 'gatsby';
import React from 'react';
import {
  BlogSlider,
  Container,
  Hire,
  HireAlt,
  OurServices,
  VideoIntro,
  WhoWeAre,
} from 'shared-components';
import LandingPageHero from '../components/landingPageHero';
import Layout from '../components/layout';
import config from '../config';
import { useBlogQueryRecent } from '../hooks/useBlogQueryRecent';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';

const Index = ({ data, serverData }) => {
  const layoutData = useLayoutQuery();
  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  const landingPage = data.sanityLandingPage;

  const recentArticles = useBlogQueryRecent().articles.nodes;

  const blogCarouselArticles =
    serverData.blogCarousel?.selectedArticles || recentArticles;

  const maxWidth = 1440;
  const theme = 'navy';

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
          theme="navy"
          maxWidth="1440"
          removePaddingTop
          removePaddingBottom
          removePaddingMobile="top"
        >
          <VideoIntro
            videoMp4={serverData.videoMp4.asset.url}
            videoWebm={serverData.videoWebm.asset.url}
          >
            {serverData.videoTextOverlay}
          </VideoIntro>
        </Container>
        <Container
          theme={theme}
          maxWidth={maxWidth}
          removePaddingMobile="bottom"
        >
          <WhoWeAre
            title="Hvem er vi"
            whiteText
            blocks={landingPage._rawAboutText}
            config={config}
          />
        </Container>
        <Container theme={theme} maxWidth={maxWidth}>
          <OurServices
            darkFade
            {...landingPage.section2Services}
            leftAlignTopSection
          />
        </Container>
        <Container theme={theme} maxWidth={maxWidth} removePaddingMobile="top">
          <Hire
            darkFade
            title={landingPage.flipSection1Title}
            text={landingPage.flipSection1Text}
            buttonLink={landingPage.flipSection1ButtonLink}
            buttonText={landingPage.flipSection1ButtonText}
            image={landingPage.flipSection1Image.asset.gatsbyImageData}
          />
        </Container>
        <Container theme={theme} maxWidth={maxWidth} removePaddingMobile="top">
          <HireAlt
            darkFade
            title={landingPage.flipSection3Title}
            text={landingPage.flipSection3Text}
            image={landingPage.flipSection3Image.asset.gatsbyImageData}
            imageText={landingPage.flipSection3ImageText}
          />
        </Container>
        <BlogSlider
          articles={blogCarouselArticles}
          maxWidth={maxWidth}
          readMoreText="Les mer"
          heading="Blogg"
          postPrefix="blogg"
        />
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
          videoTextOverlay
          videoWebm {
            asset {
              url
            }
          }
          videoMp4 {
            asset {
              url
            }
          }
          blogCarousel {
            selectedArticles {
              slug {
                current
              }
              id: _id
              title
              mainImage {
                asset {
                  id: _id
                  metadata {
                    dimensions {
                      height
                      width
                    }
                  }
                }
              }
            }
          }
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
