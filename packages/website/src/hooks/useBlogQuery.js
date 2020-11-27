import { useStaticQuery, graphql } from 'gatsby';
export const useBlogQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        articles: allSanityArticle {
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
                  url
                  fluid {
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
              publishedAt
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
        tags: allSanityArticleTag {
          edges {
            node {
              tag
              id
            }
          }
        }
      }
    `
  );
  console.log(data);
  console.log(data);
  console.log(data);
  return data;
};
