import React from 'react';
import config from '../config';
import { Layout } from '../components/layout';
import { graphql } from 'gatsby';
import { LinkableContent } from 'shared-components/src/components/linkableContent';
import { NavyIntroImage } from 'shared-components/src/components/navyIntroImage';
import { window } from 'browser-monads';
import { BlogCarousel } from '../components/blogCarousel';

const Company = ({ data }) => {
  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.history.replaceState(
      {},
      '',
      `/om-oss/${data.sanityCompany.slug.current}#${e.target.name}`
    );
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const {
    sanityCompany: { pageDescription } = { pageDescription: false },
    sanityCompany: { pageTitle } = { pageTitle: false },
  } = data;

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      whiteIcons
      navyHeader
    >
      <div className="z-0 twelve:z-20 relative">
        <NavyIntroImage
          title={data.sanityCompany.heroHeading}
          description={data.sanityCompany.heroDescription}
          internalLink="/en/contact-us"
          buttonText="Get in touch"
          image={data.sanityCompany.heroImage.asset.gatsbyImageData}
          white
        />
      </div>
      <div className="w-full bg-white tracking-wider z-10 relative">
        <LinkableContent
          heroImage={data.sanityCompany.heroImage.asset.gatsbyImageData}
          raw={data.sanityCompany._rawBlockText}
          heading={data.sanityCompany.blockHeading}
          scrollTo={scrollTo}
          config={config}
        />
        <div className="max-w-1440 mx-auto sm:my-15 mt-10">
          <BlogCarousel blue />
        </div>
      </div>
    </Layout>
  );
};

export default Company;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    sanityCompany(slug: { current: { eq: $slug } }) {
      pageTitle
      pageDescription
      id
      heroImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      slug {
        current
      }
      heroHeading
      heroDescription
      _rawBlockText
      blockHeading
    }
    allSanityCompany {
      edges {
        node {
          heroHeading
          slug {
            current
          }
        }
      }
    }
    rolesImg: file(name: { eq: "interview" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    cUtvikler: file(name: { eq: "vitilbyr_header" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
