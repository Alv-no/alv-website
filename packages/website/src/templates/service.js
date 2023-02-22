import { window } from "browser-monads";
import { graphql } from "gatsby";
import React from "react";
import { Container, LinkableContent, NavyIntroImage } from "shared-components";
import { BlogCarousel } from "../components/blogCarousel";
import { CtaSection } from "../components/ctaSection";
import Layout from "../components/layout";
import { RolesList } from "../components/rolesList";
import TestimonialSlider from "../components/testimonialsSlider";
import configuration from "../config";
import { useBlogQueryRecent } from "../hooks/useBlogQueryRecent";
import { useLayoutQuery } from "../hooks/useLayoutQuery";
import useScrollToHeading from "../hooks/useScrollToHeading";

const Service = ({ data }) => {
  const { handleHeadingClick } = useScrollToHeading(window.location.pathname);
  const layoutData = useLayoutQuery();

  const {
    sanityServices: { pageDescription } = { pageDescription: false },
    sanityServices: { pageTitle } = { pageTitle: false },
    sanityServices: { testimonialSlider } = { pageTitle: false },
  } = data;

  const relatedServices = data.allSanityServices.edges.filter((service) =>
    window.location.href.includes(service.node.parentPage.slug.current)
  );

  const recentArticles = useBlogQueryRecent().articles.nodes;

  const blogCarouselArticles =
    data.sanityServices?.blogCarousel?.selectedArticles || recentArticles;

  return (
    <Layout
      layoutData={layoutData}
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <div className="z-0 twelve:z-20 relative">
        <NavyIntroImage
          title={data.sanityServices.heroHeading}
          description={data.sanityServices.heroDescription}
          internalLink="/kontakt-oss"
          image={data.sanityServices.heroImage.asset.gatsbyImageData}
          buttonText="kontakt oss"
        />
      </div>
      <LinkableContent
        raw={data.sanityServices._rawAboutBlock}
        heading={data.sanityServices.aboutSection}
        scrollTo={handleHeadingClick}
        config={configuration}
      />

      <Container theme="gray">
        <RolesList
          image={data.rolesImg.childImageSharp.gatsbyImageData}
          roles={relatedServices}
          categoryName={relatedServices[0].node.parentPage.slug.current}
          id="tjenester"
        />
      </Container>
      <Container theme="navy" className="mb-10">
        <CtaSection
          navy
          eyebrow={
            data.sanityServices.ctaEyebrow ||
            "Tenker du på å kjøre i gang med et prosjekt?"
          }
          heading={
            data.sanityServices.ctaHeading ||
            "Ta kontakt med oss for å se om vi har passende konsulenter tilgjengelig."
          }
          buttonText="Ta Kontakt"
          internalLink="/kontakt-oss"
        />
      </Container>
      <BlogCarousel articles={blogCarouselArticles} />
      {testimonialSlider && (
        <Container removePaddingTop>
          <TestimonialSlider {...testimonialSlider} />
        </Container>
      )}
    </Layout>
  );
};

export default Service;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    sanityServices(slug: { current: { eq: $slug } }) {
      pageTitle
      pageDescription
      servicesBool
      servicesListText
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
      _rawAboutBlock
      ctaHeading
      ctaEyebrow
      ctaBool
      aboutSection
      aboutBlock {
        _rawChildren
      }
      testimonialSlider {
        heading
        testimonials {
          bio
          company
          name
          _rawBody
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }
      blogCarousel {
        selectedArticles {
          slug {
            current
          }
          id
          title
          mainImage {
            asset {
              url
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
    allSanityServices {
      edges {
        node {
          parentPage {
            slug {
              current
            }
          }
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
