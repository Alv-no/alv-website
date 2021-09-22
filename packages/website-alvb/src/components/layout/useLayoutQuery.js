import { useStaticQuery, graphql } from 'gatsby';
export const useLayoutQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings(
          id: { eq: "-0f217bb5-f7f6-5420-b7c6-58db2c12b8c7" }
        ) {
          email
          hours
          phone
          address
        }
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const servicePages = data.allSanityServices.edges.map((edge) => edge.node);
  const categoryPages = data.allSanityCategoryPage.nodes;
  const { site } = data;
  const { address, phone, org, email } = data.sanitySiteSettings;
  return { address, phone, org, email, servicePages, categoryPages, site };
};
