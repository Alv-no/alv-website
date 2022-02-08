import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { ServiceNavList } from '../components/serviceNavList';
import { RolesList } from '../components/rolesList';
import { NavyIntroImage } from '../components/navyIntroImage';
import { CtaSection } from '../components/ctaSection';
import { window } from 'browser-monads';
import { BlogCarousel } from '../components/blogCarousel';
import { useLayoutQuery } from '../hooks/useLayoutQuery';

const Service = ({ data }) => {
  const layoutData = useLayoutQuery();
  const nav = [
    { label: 'Oversikt', id: 'oversikt' },
    { label: 'Tjenester', id: 'tjenester' },
  ];

  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const {
    sanityServices: { pageDescription } = { pageDescription: false },
    sanityServices: { pageTitle } = { pageTitle: false },
  } = data;

  const relatedServices = data.allSanityServices.edges.filter((service) =>
    window.location.href.includes(service.node.parentPage.slug.current)
  );

  return (
      <Layout layoutData={layoutData} whiteIcons pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="z-0 twelve:z-20 relative">
        <NavyIntroImage
          title={data.sanityServices.heroHeading}
          description={data.sanityServices.heroDescription}
          internalLink="/kontakt-oss"
          image={data.sanityServices.heroImage.asset.gatsbyImageData}
          buttonText="kontakt oss"
        />
      </div>
      <div className="w-full bg-white tracking-wider z-10 relative">
        <ServiceNavList
          nav={nav}
          heroImage={data.sanityServices.heroImage.asset.gatsbyImageData}
          raw={data.sanityServices._rawAboutBlock}
          heading={data.sanityServices.aboutSection}
          scrollTo={scrollTo}
        />
        <div className="overflow-x-hidden">
          <div className="h-10 sm:h-0" />
          <RolesList
            image={data.rolesImg.childImageSharp.gatsbyImageData}
            roles={relatedServices}
            categoryName={relatedServices[0].node.parentPage.slug.current}
            id="tjenester"
          />
          <div className="h-10" />
          <CtaSection
            eyebrow={
              data.sanityServices.ctaEyebrow ||
              'Tenker du på å kjøre i gang med et prosjekt?'
            }
            heading={
              data.sanityServices.ctaHeading ||
              'Ta kontakt med oss for å se om vi har passende konsulenter tilgjengelig.'
            }
            buttonText="Ta Kontakt"
            internalLink="/kontakt-oss"
          />
        </div>
        <div className="max-w-1440 mx-auto sm:my-15 mt-10">
          <BlogCarousel blue />
        </div>
      </div>
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
