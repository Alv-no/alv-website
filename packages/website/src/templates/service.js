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

  return (
    <Layout>
      <NavyIntroImage
        title={data.sanityServices.heroHeading}
        description={data.sanityServices.heroDescription}
        internalLink="/kontakt-oss"
        image={data.sanityServices.heroImage.asset.fluid}
      />
      <div className="w-full bg-white sm:pb-0 pb-12 overflow-hidden tracking-wider">
        <ServiceNavList
          nav={nav}
          image={data.cUtvikler.childImageSharp.fluid}
          raw={data.sanityServices._rawAboutBlock}
          heading={data.sanityServices.aboutSection}
          scrollTo={scrollTo}
        />
        <div className="h-10" />
        <RolesList
          image={data.rolesImg.childImageSharp.fluid}
          roles={data.allSanityServices.edges}
          id="hva-gjor-vi"
        />
        <CtaSection
          eyebrow={data.sanityServices.ctaEyebrow}
          heading={data.sanityServices.ctaHeading}
          buttonText="Ta Kontakt"
          internalLink="/kontakt-oss"
        />
      </div>
    </Layout>
  );
};

export default Service;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    sanityServices(slug: { current: { eq: $slug } }) {
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
