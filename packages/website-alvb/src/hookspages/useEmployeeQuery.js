import { useStaticQuery, graphql } from 'gatsby';
import { createSlugForEmployee } from '../../../shared-components/src/components/createSlugForEmployee';
export const useEmployeeQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityEmployeePage {
          pageDescription
          pageTitle
          section1Title
          section1Description
          section2Title
          section2Text
          section2Image {
            asset {
              gatsbyImageData
            }
          }
        }
        allSanityEmployee {
          edges {
            node {
              firstname
              lastname
              ytVideoId
              video {
                asset {
                  url
                }
              }
              id
              title
              _rawBio
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    `
  );
  data.allEmployees = data.allSanityEmployee.edges.map((el) => {
    const employee = el.node;
    employee.slug = createSlugForEmployee(
      employee.firstname,
      employee.lastname
    );
    return employee;
  });
  return data;
};
