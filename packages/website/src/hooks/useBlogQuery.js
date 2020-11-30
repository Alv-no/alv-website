import { useStaticQuery, graphql } from 'gatsby';
export const useBlogQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
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
              _rawBody
              mainImage {
                asset {
                  fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
              author {
                image {
                  asset {
                    fluid {
                      ...GatsbySanityImageFluid
                    }
                  }
                }
                firstname
                lastname
              }
              publishedAt(formatString: "DD MMM, YYYY")
            }
          }
        }
        featuredArticle: sanityFeaturedArticle {
          article {
            title
            description
            _rawBody
            slug {
              current
            }
            mainImage {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        fallbackImg: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
};
