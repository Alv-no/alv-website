import { graphql, useStaticQuery } from 'gatsby';
export const useBlogQueryRecent = () => {
  const data = useStaticQuery(
    graphql`
      {
        articles: allSanityArticle(
          sort: { fields: publishedAt, order: DESC }
          limit: 5
        ) {
          nodes {
            slug {
              current
            }
            id
            title
            mainImage {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `
  );
  return data;
};
