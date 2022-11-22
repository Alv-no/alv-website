import { useStaticQuery, graphql } from 'gatsby';
export const useBlogQueryRecent = () => {
  const data = useStaticQuery(
    graphql`
      {
        articles: allSanityArticle(
          sort: { fields: publishedAt, order: DESC }
          limit: 5
        ) {
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
      }
    `
  );
  return data;
};
