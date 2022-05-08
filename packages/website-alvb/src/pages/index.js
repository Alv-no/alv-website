import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogCarousel } from '../components/blogCarousel';
import { Hero } from '../components/hero';
import { VideoIntro } from '../components/videoIntro';
import { WhoWeAre, Hire, OurServices } from 'shared-components';
import { Founder } from '../components/founder';
import localize from '../components/localize/index';
import config from '../config';

const Index = ({ data, location }) => {
  const {
    section1,
    section2,
    section4,
    section5,
    section6,
    _rawMeta,
    _rawSection1,
    _rawSection2,
    _rawSection3,
    _rawSection4,
    _rawSection5,
    _rawSection6,
  } = data.sanityLandingPage;

  const isEnLocale = location.pathname === '/en';

  return (
    <div className="overflow-hidden">
      <Layout
        white
        whiteIcons
        pageTitle={_rawMeta.metaTitle}
        pageDescription={_rawMeta.metaTitle}
      >
        <div className="bg-theme-bg">
          <Hero
            blocks={_rawSection1.heroText}
            cta={section1.localeCta}
            backgroundImage={section1.backgroundImage.asset.gatsbyImageData}
            backgroundImageMobile={
              section1.backgroundImageMobile.asset.gatsbyImageData
            }
          />
          <div className="bg-theme-bg w-full pb-15 sm:pt-24">
            <VideoIntro
              videoMp4={section2.videoMp4.asset.url}
              videoWebm={section2.videoWebm.asset.url}
            >
              {_rawSection2.videoTextOverlay}
            </VideoIntro>
            <WhoWeAre
              darkText
              title={_rawSection3.title}
              blocks={_rawSection3.block}
              buttonText={_rawSection3.button.text}
              buttonLink={_rawSection3.button.link}
              config={config}
            />
          </div>
          <Hire
            title={_rawSection4.title}
            text={_rawSection4.text}
            image={section4.image.asset.gatsbyImageData}
          />
          <div className="h-15" />
          <OurServices {..._rawSection5} image={section5.image} blueLine />
          <Founder {..._rawSection6} {...section6} />
          <div className="bg-theme-bg h-10 lg:h-32" />
          <BlogCarousel blue isEnLocale={isEnLocale} blueText />
        </div>
      </Layout>
    </div>
  );
};

export default localize(Index);

export const query = graphql`
  query LandingPageQuery {
    sanityLandingPage {
      _rawMeta
      _rawSection6
      _rawSection5
      _rawSection4
      _rawSection3
      _rawSection2
      _rawSection1
      # media
      section1 {
        localeCta {
          eyebrow {
            en
            _type
            no
          }
          link {
            _type
            en
            no
          }
          title {
            _type
            en
            no
          }
        }
        backgroundImageMobile {
          asset {
            gatsbyImageData
          }
        }
        backgroundImage {
          asset {
            gatsbyImageData
          }
        }
      }
      section4 {
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      section5 {
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      section6 {
        founderImage {
          asset {
            gatsbyImageData
          }
        }
        signatureImage {
          asset {
            gatsbyImageData
          }
        }
      }
      section2 {
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
      }
    }
  }
`;
