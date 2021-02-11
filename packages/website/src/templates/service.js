import React from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { ServiceNavList } from '../components/serviceNavList';
import { RolesList } from '../components/rolesList';
import { NavyIntroImage } from '../components/navyIntroImage';
import { CtaSection } from '../components/ctaSection';

const Systemutvikling = ({ data }) => {
  const nav = ['Oversikt', 'Hva Gjør Vi', 'Vårt Team', 'Blogg', 'Kundeomtaler'];
  return (
    <Layout>
      <NavyIntroImage
        title={data.sanityServices.heroHeading}
        description={data.sanityServices.heroDescription}
        buttonText="Request a QUOTE"
        link="/kontakt-oss"
        image={data.sanityServices.heroImage.asset.fluid}
      />
      <div className="w-full bg-white sm:pb-20 pb-12 overflow-hidden tracking-wider">
        <ServiceNavList
          nav={nav}
          image={data.cUtvikler.childImageSharp.fluid}
        />
        <div className="h-10" />
        <RolesList image={data.rolesImg.childImageSharp.fluid} />
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

export default Systemutvikling;

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
      ctaHeading
      ctaEyebrow
      ctaBool
      aboutSection
      aboutBlock {
        _rawChildren
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
