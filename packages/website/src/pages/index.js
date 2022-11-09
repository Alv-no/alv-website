import React from 'react';
import { useBlogQueryRecent } from '../hooks/useBlogQueryRecent.js';
import { graphql } from 'gatsby';
import { Hero } from '../components/hero';
import Layout from '../components/layout';
import {
  WhoWeAre,
  OurServices,
  BlogSlider,
  VideoIntro,
  Hire,
  HireAlt,
  Container,
} from 'shared-components';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import config from '../config';

const Index = ({ data, location }) => {
  const layoutData = useLayoutQuery();
  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  const landingPage = data.sanityLandingPage;

  const linesAndClasses = [
    { line: 'Vi bygger', classes: '' },
    { line: 'Norges mest attraktive', classes: 'font-black' },
    { line: 'konsulentselskap', classes: '', dot: true },
  ];
  return (
    <Layout
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      layoutData={layoutData}
    >
      <div className="bg-navy">
        <Hero
          linesAndClasses={linesAndClasses}
          delay={90}
          videoMp4={data.video.heroVideoMp4.asset.url}
          videoWebm={data.video.heroVideoWebm.asset.url}
          routeUpdate={location.action}
          heroCta={landingPage.heroCta}
        />
        <Container
          theme="navy"
          maxWidth="1440"
          removePaddingBottom
          removePaddingMobile="top"
        >
          <VideoIntro
            videoMp4={data.video.videoMp4.asset.url}
            videoWebm={data.video.videoWebm.asset.url}
          >
            {landingPage.videoTextOverlay}
          </VideoIntro>
        </Container>
        <Container theme="navy" maxWidth="1440" removePaddingMobile="bottom">
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

export const query = graphql`
  {
    sanityLandingPage {
      pageDescription
      pageTitle
      videoTextOverlay
      heroCta {
        eyebrow
        link
        title
      }

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
    video: sanityLandingPage(videoMp4: { asset: { url: { ne: "" } } }) {
      id
      pageTitle
      videoMp4 {
        asset {
          url
        }
      }
      heroVideoWebm {
        asset {
          url
        }
      }
      heroVideoMp4 {
        asset {
          url
        }
      }
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
    }
  }
`;
