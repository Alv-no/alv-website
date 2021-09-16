import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogCarousel } from '../components/blogCarousel';
import { WhoWeAre, OurServices, VideoIntro, Hire } from 'shared-components';

const Index = ({ data }) => {
  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  const landingPage = data.sanityLandingPage;

  return (
    <div className="overflow-hidden">
      <Layout white pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="bg-theme-bg">
          <div className="bg-theme-bg w-full pb-15 sm:pt-0 pt-10">
            <VideoIntro
              videoMp4={data.video.videoMp4.asset.url}
              videoWebm={data.video.videoWebm.asset.url}
            >
              {landingPage.videoTextOverlay}
            </VideoIntro>
            <WhoWeAre
              title="Hvem er vi"
              darkText
              blocks={landingPage._rawAboutText}
            />
          </div>

          <Hire
            blue={true}
            title={landingPage.flipSection1Title}
            text={landingPage.flipSection1Text}
            image={landingPage.flipSection1Image.asset.gatsbyImageData}
          />
          <div className="bg-theme-bg h-10 lg:h-32" />
          <OurServices
            blue={true}
            title={landingPage.flipSection2Title}
            text={landingPage.flipSection2Text}
            image={landingPage.flipSection2Image.asset.gatsbyImageData}
          />
          <div className="lg:h-40  h-5" />
          <BlogCarousel />
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
