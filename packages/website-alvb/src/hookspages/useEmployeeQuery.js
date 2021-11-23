import { useStaticQuery, graphql } from 'gatsby';
import { createSlugForEmployee } from '../../../shared-components/src/components/createSlugForEmployee';
export const useEmployeeQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
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
  const allEmployees = data.allSanityEmployee.edges.map((el) => {
    const employee = el.node;
    employee.slug = createSlugForEmployee(
      employee.firstname,
      employee.lastname
    );
    return employee;
  });
  return allEmployees;
};
