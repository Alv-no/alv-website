import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { ServiceNavList } from '../components/serviceNavList';
import { RolesList } from '../components/rolesList';
import { NavyIntroImage } from '../components/navyIntroImage';
import { CtaSection } from '../components/ctaSection';

const Service = ({ data }) => {
  const nav = [
    { label: 'Oversikt', id: 'oversikt' },
    { label: 'Hva Gjør Vi', id: 'hva-gjor-vi' },
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

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="z-0 twelve:z-20 relative">
        <NavyIntroImage
          title={data.sanityServices.heroHeading}
          description={data.sanityServices.heroDescription}
          internalLink="/kontakt-oss"
          image={data.sanityServices.heroImage.asset.fluid}
        />
      </div>
      <div className="w-full bg-white tracking-wider z-10 relative">
        <ServiceNavList
          nav={nav}
          heroImage={data.sanityServices.heroImage.asset.fluid}
          raw={data.sanityServices._rawAboutBlock}
          heading={data.sanityServices.aboutSection}
          scrollTo={scrollTo}
        />
        <div className="overflow-x-hidden">
          <div className="h-10" />
          <RolesList
            image={data.rolesImg.childImageSharp.fluid}
            roles={data.allSanityServices.edges}
            id="hva-gjor-vi"
          />
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
          fluid {
            ...GatsbySanityImageFluid
          }
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
    rolesImg: file(name: { eq: "vitilbyr_digitalisering" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cUtvikler: file(name: { eq: "vitilbyr_header" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
