import { useStaticQuery, graphql } from 'gatsby';
export const useContactQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contactUsImg: file(name: { eq: "about_us_img2" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
};
