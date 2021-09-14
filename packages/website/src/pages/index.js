import React from 'react';
import { graphql } from 'gatsby';
import { useBlogQuery } from '../hooks/useBlogQuery';
import { Hero } from '../components/hero';
import { Layout } from '../components/layout';
import {
  WhoWeAre,
  OurServices,
  BlogSlider,
  VideoIntro,
  Hire,
  HireAlt,
} from 'shared-components';

const Index = ({ data, location }) => {
  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  const landingPage = data.sanityLandingPage;

  const linesAndClasses = [
    { line: 'Vi bygger', classes: '' },
    { line: 'Norges mest attraktive', classes: 'font-black' },
    { line: 'konsulentselskap', classes: '', dot: true },
  ];

  return (
    <div className="overflow-hidden">
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="bg-navy">
          <div className="bg-navy w-full pb-15 sm:pt-0 pt-10">
            <Hero
              linesAndClasses={linesAndClasses}
              delay={90}
              videoMp4={data.video.heroVideoMp4.asset.url}
              videoWebm={data.video.heroVideoWebm.asset.url}
              routeUpdate={location.action}
            />
            <VideoIntro
              videoMp4={data.video.videoMp4.asset.url}
              videoWebm={data.video.videoWebm.asset.url}
            >
              {landingPage.videoTextOverlay}
            </VideoIntro>
            <WhoWeAre
              title="Hvem er vi"
              whiteText
              blocks={landingPage._rawAboutText}
            />
          </div>
          <Hire
            darkFade
            title={landingPage.flipSection1Title}
            text={landingPage.flipSection1Text}
            image={landingPage.flipSection1Image.asset.gatsbyImageData}
          />
          <div className="bg-navy h-10 lg:h-32" />
          <OurServices
            darkFade
            title={landingPage.flipSection2Title}
            text={landingPage.flipSection2Text}
            image={landingPage.flipSection2Image.asset.gatsbyImageData}
          />
          <div className="lg:h-40  h-5" />
          <HireAlt
            darkFade
            title={landingPage.flipSection3Title}
            text={landingPage.flipSection3Text}
            image={landingPage.flipSection3Image.asset.gatsbyImageData}
            imageText={landingPage.flipSection3ImageText}
          />
          <BlogSlider useBlogQuery={useBlogQuery} />
          <div className="lg:h-20  h-5" />
        </div>
      </Layout>
    </div>
  );
};

export default Index;

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
      flipSection2Image {
        asset {
          gatsbyImageData
          url
        }
      }
      flipSection2Text
      flipSection2Title
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
