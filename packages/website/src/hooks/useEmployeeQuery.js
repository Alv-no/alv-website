import { useStaticQuery, graphql } from 'gatsby';
export const useEmployeeQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityEmployee {
          edges {
            node {
              tags {
                tag
              }
              firstname
              lastname
              id
              title
              experience
              videoLink
              pdfLink
              image {
                asset {
                  fluid(maxWidth: 450) {
                    src
                  }
                }
              }
              bio {
                _rawChildren
                style
                list
              }
            }
          }
        }
        allSanityEmployeeTag {
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
