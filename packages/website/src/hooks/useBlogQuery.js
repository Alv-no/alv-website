import { useStaticQuery, graphql } from 'gatsby';
export const useBlogQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
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
              _rawBody
              mainImage {
                asset {
                  fluid(maxWidth: 800) {
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

              guestAuthor {
                guestAuthor {
                  image {
                    asset {
                      fluid {
                        ...GatsbySanityImageFluid
                      }
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
