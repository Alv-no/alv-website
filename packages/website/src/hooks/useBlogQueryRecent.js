import { useStaticQuery, graphql } from 'gatsby';
export const useBlogQueryRecent = () => {
  const data = useStaticQuery(
    graphql`
      {
        articles: allSanityArticle(
          sort: { order: ASC, fields: _createdAt }
          limit: 10
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
              _createdAt
            }
          }
        }
        fallbackImg: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );
  return data;
};
