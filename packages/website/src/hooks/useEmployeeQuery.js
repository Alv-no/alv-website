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
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
        fallbackImg: file(name: { eq: "fallback" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cta: file(name: { eq: "Alv_fredag" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ctaFallback: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
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
  data.allEmployees = data.allSanityEmployee.edges.map((el) => {
    const employee = el.node;
    let slug =
      employee.firstname &&
      employee.firstname.split(' ').concat(employee.lastname.split(' '));
    slug = '#' + slug.join('-').toLowerCase();
    employee.slug = slug;
    return employee;
  });
  return data;
};
