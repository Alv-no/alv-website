import { window } from "browser-monads";
import { graphql } from "gatsby";
import React from "react";
import { LinkableContent } from "shared-components/src/components/linkableContent";
import { NavyIntroImage } from "shared-components/src/components/navyIntroImage";
import { BlogCarousel } from "../components/blogCarousel";
import { Layout } from "../components/layout";
import config from "../config";

const Company = ({ data }) => {
  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.history.replaceState(
      {},
      "",
      `/${data.sanityCompany.slug.current}#${e.target.name}`
    );
    window.scrollTo({ top, behavior: "smooth" });
  };

  const {
    pageTitle = false,
    pageDescription = false,
    heroImage,
    heroHeading,
    heroDescription,
    _rawBlockText,
    blockHeading,
  } = data.sanityCompany;

  return (
    <Layout
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      metaImage={heroImage.url}
      whiteIcons
      navyHeader
    >
      <div className="z-0 twelve:z-20 relative">
        <NavyIntroImage
          title={heroHeading}
          description={heroDescription}
          internalLink="/contact-us"
          buttonText="Get in touch"
          image={heroImage.asset.gatsbyImageData}
          white
        />
      </div>
      <div className="w-full bg-white tracking-wider z-10 relative">
        <LinkableContent
          heroImage={heroImage.asset.gatsbyImageData}
          raw={_rawBlockText}
          heading={blockHeading}
          scrollTo={scrollTo}
          config={config}
        />
        <div className="max-w-1440 mx-auto sm:my-15 mt-10">
          <BlogCarousel
            heading="Blog"
            readMoreText="Read more"
            postPrefix="blog"
          />
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
          url
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
