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
      <Layout
        whiteIcons
        pageTitle={pageTitle}
        pageDescription={pageDescription}
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
          <div className="bg-navy w-full pb-15">
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
          <OurServices darkFade {...landingPage.section2Services} />
          <div className="lg:h-40  h-5" />
          <HireAlt
            darkFade
            title={landingPage.flipSection3Title}
            text={landingPage.flipSection3Text}
            image={landingPage.flipSection3Image.asset.gatsbyImageData}
            imageText={landingPage.flipSection3ImageText}
          />
          <BlogSlider useBlogQuery={useBlogQuery} />
          <div className="lg:h-20 h-5" />
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
