import { useStaticQuery, graphql } from 'gatsby';
export const useBlogQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityArticle {
          edges {
            node {
              tags {
                tag
              }
            }
          }
        }
        allSanityBlogTag {
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
  return data;
};
