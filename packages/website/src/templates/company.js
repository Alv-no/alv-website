import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { LinkableContent } from '../components/linkableContent';
import { NavyIntroImage } from '../components/navyIntroImage';
import { window } from 'browser-monads';
import { BlogCarousel } from '../components/blogCarousel';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';
import { gql } from '@apollo/client';

const Company = ({ data, serverData }) => {
  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.history.replaceState(
      {},
      '',
      `/om-oss/${serverData.sanityCompany.slug.current}#${e.target.name}`
    );
    window.scrollTo({ top, behavior: 'smooth' });
  };
  const layoutData = useLayoutQuery();

  const {
    sanityCompany: { pageDescription } = { pageDescription: false },
    sanityCompany: { pageTitle } = { pageTitle: false },
  } = data;

  return (
    <Layout
      layoutData={layoutData}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      whiteIcons
    >
      <div className="z-0 twelve:z-20 relative">
        <NavyIntroImage
          title={serverData.sanityCompany.heroHeading}
          description={serverData.sanityCompany.heroDescription}
          internalLink="/videoserie"
          buttonText="Se videoserien vår"
          image={serverData.sanityCompany.heroImage.asset.gatsbyImageData}
        />
      </div>
      <div className="w-full bg-white tracking-wider z-10 relative">
        <LinkableContent
          heroImage={serverData.sanityCompany.heroImage.asset.gatsbyImageData}
          raw={serverData.sanityCompany._rawBlockText}
          heading={serverData.sanityCompany.blockHeading}
          scrollTo={scrollTo}
        />
        <div className="max-w-1440 mx-auto sm:my-15 mt-10">
          <BlogCarousel blue />
        </div>
      </div>
    </Layout>
  );
};

export default Company;

async function getCompanyDataServerSide(slug) {
  const response = await client.query({
    fetchPolicy: 'no-cache',
    variables: {
      slug,
    },
    query: gql`
      query($slug: String!) {
        pageData: allCompany(where: { slug: { current: { eq: $slug } } }) {
          pageTitle
          pageDescription
          id: _id
          heroImage {
            asset {
              url
              id: _id
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
          slug {
            current
          }
          heroHeading
          heroDescription
          _rawBlockText: blockTextRaw
          blockHeading
        }
        allCompany {
          heroHeading
          slug {
            current
          }
        }
      }
    `,
  });
  const pageData = response.data;
  createGatsbyImages(pageData);

  return {
    sanityCompany: pageData.pageData[0],
    allSanityCompany: pageData.allCompany,
  };
}

export async function getServerData(context) {
  try {
    const slug = context.pageContext.slug;
    const companyData = await getCompanyDataServerSide(slug);
    return {
      status: 200,
      props: {
        ...companyData,
      },
    };
  } catch {
    return {
      status: 500,
    };
  }
}

// GraphQL Query for article content
export const query = graphql`
  {
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
