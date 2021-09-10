import React from 'react';
import Layout from '../layout';
import { Hero } from '../components/hero';
import { WhoWeAre } from '../components/whoWeAre';
import { OwnedByStaff } from '../components/ownedByStaff';
import { OurServices } from '../components/ourServices';
import { Hire, HireAlt } from '../components/hire';
import { BlogSlider } from '../components/blogSlider';
import { VideoIntro } from '../components/videoIntro';
import { graphql } from 'gatsby';
import { BlockContent } from '../components/blockContent';

const Index = ({ data, location }) => {
  const linesAndClasses = [
    { line: 'Vi bygger', classes: '' },
    { line: 'Norges mest attraktive', classes: 'font-black' },
    { line: 'konsulentselskap', classes: '', dot: true },
  ];

  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  const landingPage = data.sanityLandingPage;

  return (
    <div className="overflow-hidden">
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <Hero
          linesAndClasses={linesAndClasses}
          delay={90}
          videoMp4={data.video.heroVideoMp4.asset.url}
          videoWebm={data.video.heroVideoWebm.asset.url}
          routeUpdate={location.action}
        />
        <div className="bg-navy">
          <div className="bg-navy w-full pb-15 sm:pt-0 pt-10">
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
            image={landingPage.flipSection1Image.asset.gatsbyImageData}
          />
          <div className="bg-navy h-10 lg:h-32" />
          <OurServices
            title={landingPage.flipSection2Title}
            text={landingPage.flipSection2Text}
            image={landingPage.flipSection2Image.asset.gatsbyImageData}
          />
          <div className="lg:h-40  h-5" />
          <HireAlt
            title={landingPage.flipSection3Title}
            text={landingPage.flipSection3Text}
            image={landingPage.flipSection3Image.asset.gatsbyImageData}
            imageText={landingPage.flipSection3ImageText}
          />
          <BlogSlider />
          <OwnedByStaff>
            Alv AS er 100% eid av våre ansatte. Det betyr at du vil få mulighet
            til å kjøpe deg inn på eiersiden av selskapet når du blir ansatt.
          </OwnedByStaff>
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
