import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { BlogCarousel } from '../components/blogCarousel';
import { Hero } from '../components/hero';
import { IntroSection } from '../components/introSection';
import { WhoWeAre, Hire, OurServices, Container } from 'shared-components';
import localize from '../components/localize/index';
import config from '../config';

const Index = ({ data }) => {
  const {
    section1,
    section2,
    section4,
    section5,
    _rawMeta,
    _rawSection1,
    _rawSection3,
    _rawSection4,
    _rawSection5,
  } = data.sanityLandingPage;

  const isEnLocale = config.LOCALE === 'en';

  return (
    <div>
      <Layout
        white
        whiteIcons
        pageTitle={_rawMeta.metaTitle}
        pageDescription={_rawMeta.metaDescription}
      >
        <Hero
          blocks={_rawSection1.heroText}
          cta={section1.localeCta}
          backgroundImage={section1.backgroundImage.asset.gatsbyImageData}
          backgroundImageMobile={
            section1.backgroundImageMobile.asset.gatsbyImageData
          }
        />
        <Container maxWidth="1280" removePaddingBottom>
          <IntroSection
            image={section2.image.asset.gatsbyImageData}
            text={section2.text}
          />
        </Container>
        <Container maxWidth="1280" removePaddingBottom>
          <WhoWeAre
            darkText
            title={_rawSection3.title}
            blocks={_rawSection3.block}
            buttonText={_rawSection3.button.text}
            buttonLink={_rawSection3.button.link}
            config={config}
          />
        </Container>
        <Container maxWidth="1280" removePaddingBottom>
          <Hire
            title={_rawSection4.title}
            text={_rawSection4.text}
            image={section4.image.asset.gatsbyImageData}
          />
        </Container>
        <Container maxWidth="1280" removePaddingMobile="bottom">
          <OurServices {..._rawSection5} image={section5.image} blueLine />
        </Container>
        <Container removePaddingBottom />
        <BlogCarousel blue isEnLocale={isEnLocale} blueText maxWidth="1280" />
      </Layout>
    </div>
  );
};

export default localize(Index);

export const query = graphql`
  query LandingPageQuery {
    sanityLandingPage {
      _rawMeta
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
      section2 {
        image {
          asset {
            gatsbyImageData
          }
        }
        text {
          _type
          en
          no
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
    }
  }
`;
