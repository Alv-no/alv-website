import { useStaticQuery, graphql } from 'gatsby';
import { createSlugForEmployee } from '../../../shared-components/src/components/createSlugForEmployee';
export const useEmployeeQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityEmployeePage {
          employees {
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
    `,
  );
  const allEmployees = data.sanityEmployeePage.employees.map((employee) => {
    employee.slug = createSlugForEmployee(
      employee.firstname,
      employee.lastname,
    );
    return employee;
  });
  return allEmployees;
};
