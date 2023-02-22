import { useStaticQuery, graphql } from "gatsby";
export const useBlogQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
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
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `,
  );
  return data;
};
