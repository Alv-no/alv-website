import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../../shared-components/src/components/layout';
import { WhoWeAre } from '../../../shared-components/src/components/whoWeAre';
import { OurServices } from '../../../shared-components/src/components/ourServices';
import { Hire, HireAlt } from '../../../shared-components/src/components/hire';
// import { BlogSlider } from '../../../shared-components/src/components/blogSlider';
import { VideoIntro } from '../../../shared-components/src/components/videoIntro';
import { BlockContent } from '../../../shared-components/src/components/blockContent';

const Index = ({ data }) => {
  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  const landingPage = data.sanityLandingPage;

  console.log(data);

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
            <WhoWeAre title="Hvem er vi">
              <BlockContent whiteText blocks={landingPage._rawAboutText} />
            </WhoWeAre>
          </div>
          <Hire
            title={landingPage.flipSection1Title}
            text={landingPage.flipSection1Text}
            blue={true}
            image={landingPage.flipSection1Image.asset.gatsbyImageData}
          />
          <div className="bg-theme-bg h-10 lg:h-32" />
          <OurServices
            blue={true}
            darkFade={false}
            title={landingPage.flipSection2Title}
            text={landingPage.flipSection2Text}
            image={landingPage.flipSection2Image.asset.gatsbyImageData}
          />
          <div className="lg:h-40  h-5" />
          <HireAlt
            blue={true}
            title={landingPage.flipSection3Title}
            text={landingPage.flipSection3Text}
            image={landingPage.flipSection3Image.asset.gatsbyImageData}
            imageText={landingPage.flipSection3ImageText}
          />
          {/* <BlogSlider /> */}
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
