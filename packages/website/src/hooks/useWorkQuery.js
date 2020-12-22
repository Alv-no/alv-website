import { useStaticQuery, graphql } from 'gatsby';
export const useWorkQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        stairs: file(name: { eq: "stairs" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        street: file(name: { eq: "street" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        interview: file(name: { eq: "interview" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
};