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
            id
            description
            slug {
              current
            }
            mainImage {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
            title
          }
        }
        fallbackImg: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `,
  );
  return data;
};
