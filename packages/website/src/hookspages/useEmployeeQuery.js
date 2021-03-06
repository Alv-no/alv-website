import { useStaticQuery, graphql } from 'gatsby';
import { createSlugForEmployee } from '../components/createSlugForEmployee';
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
              tags {
                tag
              }
              firstname
              lastname
              videoLink
              video {
                asset {
                  url
                }
              }
              cv {
                asset {
                  url
                }
              }
              id
              title
              experience
              videoLink
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
        cta: file(name: { eq: "Alv_fredag" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        ctaFallback: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
