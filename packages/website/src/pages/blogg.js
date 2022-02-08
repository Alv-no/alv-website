import React from 'react';
import Layout from '../components/layout';
import { Title, IntroContainer, BlogSection } from 'shared-components';
import { graphql } from 'gatsby';

const Blog = ({ data }) => {
  const layoutData = {
    ...data.sanitySiteSettings,
    servicePages: data.allSanityServices.nodes,
    companyPages: data.allSanityCompany.nodes,
    categoryPages: data.allSanityCategoryPage.nodes,
    site: data.site,
  };

  const articles = data.articles.edges
    .map((article) => article.node)
    .sort((a, b) => (a.rawDate > b.rawDate ? -1 : 1));
  articles.map(
    (el) => (el.fallbackImg = data.fallbackImg.childImageSharp.gatsbyImageData)
  );
  const featuredArticle = articles[0];
  articles.shift();
  featuredArticle.fallbackImg =
    data.fallbackImg.childImageSharp.gatsbyImageData;
  return (
    <Layout
      whiteIcons
      pageTitle={data.sanityBlogPage.pageTitle}
      pageDescription={data.sanityBlogPage.pageDescription}
      layoutData={layoutData}
    >
      <div className="overflow-hidden">
        <IntroContainer article={featuredArticle}>
          <Title align="text-center twelve:text-left">Blogg</Title>
          <div className="w-full text-center">
            <div className="text-white tracking-wider text-blog font-light mt-8 twelve:w-full eight:w-1/2 w-5/6 mx-auto twelve:mx-0 twelve:text-left">
              Vi vil gjerne dele litt av vår{' '}
              <span className="font-semibold">kunnskap</span>, og gi deg noen av
              våre <span className="font-semibold">tips og tanker</span>
            </div>
          </div>
        </IntroContainer>
        <BlogSection allArticles={articles} />
      </div>
    </Layout>
  );
};

export default Blog;

export async function getServerData() {
  return Promise.resolve({
    props: {},
  });
}

export const query = graphql`
  {
    sanityBlogPage {
      pageDescription
      pageTitle
    }
    articles: allSanityArticle(sort: { fields: publishedAt }) {
      edges {
        node {
          id
          description
          slug {
            current
          }
          title
          tags {
            tag
          }
          mainImage {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          author {
            image {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
            firstname
            lastname
          }
          guestAuthor {
            guestAuthor {
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                  url
                }
              }
              firstname
              lastname
              title
              id
            }
          }
          publishedAt(formatString: "DD MMM, YYYY")
          rawDate: publishedAt
        }
      }
    }
    featuredArticle: sanitySiteSettings {
      featuredPost {
        title
        description
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
    fallbackImg: file(name: { eq: "featuredFallback" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    sanitySiteSettings(id: { eq: "-0f217bb5-f7f6-5420-b7c6-58db2c12b8c7" }) {
      email
      org
      phone
      address
    }
    allSanityCategoryPage {
      nodes {
        slug {
          current
        }
        heroHeading
      }
    }
    allSanityServices {
      edges {
        node {
          id
          slug {
            current
          }
          parentPage {
            slug {
              current
            }
          }
          heroHeading
        }
      }
    }
    allSanityCompany {
      nodes {
        heroHeading
        slug {
          current
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
