import { useStaticQuery, graphql } from 'gatsby';
import { createSlugForEmployee } from '../../../shared-components/src/components/createSlugForEmployee';
export const useEmployeeQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityEmployeePage {
          pageDescription
          pageTitle
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
        fallbackImg: file(name: { eq: "fallback" }) {
          childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED)
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
