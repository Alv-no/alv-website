import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogCarousel } from '../components/blogCarousel';
import { Hero } from '../components/hero';
import { WhoWeAre, VideoIntro, Hire } from 'shared-components';

const Index = ({ data }) => {
  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;
  const landingPage = data.sanityLandingPage;

  return (
    <div className="overflow-hidden">
      <Layout white pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="bg-theme-bg">
          <Hero
            blocks={landingPage.imageHero._rawHeroText}
            image={landingPage.imageHero.image.asset.gatsbyImageData}
          />
          <div className="bg-theme-bg w-full pb-15 sm:pt-24">
            <VideoIntro
              videoMp4={landingPage.videoMp4.asset.url}
              videoWebm={landingPage.videoWebm.asset.url}
            >
              {landingPage.videoTextOverlay}
            </VideoIntro>
            <WhoWeAre
              title={landingPage.section2Title}
              darkText
              blocks={landingPage._rawSection2Text}
            />
          </div>
          <Hire
            blue={true}
            title={landingPage.section3Title}
            text={landingPage.section3Text}
            image={landingPage.section3Image.asset.gatsbyImageData}
          />
          <div className="bg-theme-bg h-10 lg:h-32" />
          <div className="lg:h-40 h-5" />
          <BlogCarousel blue />
        </div>
      </Layout>
    </div>
  );
};

export default Index;

export const query = graphql`
  query LandingPageQuery {
    sanityLandingPage {
      section2Title
      section3Text
      section3Title
      videoTextOverlay
      videoMp4 {
        asset {
          url
        }
      }
      videoWebm {
        asset {
          url
        }
      }
      pageDescription
      pageTitle
      _rawSection2Text
      section3Image {
        asset {
          gatsbyImageData
        }
      }
      _rawSection5Founder
      imageHero {
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        _rawHeroText
      }
    }
  }
`;
