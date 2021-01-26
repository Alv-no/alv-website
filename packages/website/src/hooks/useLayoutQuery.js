import { useStaticQuery, graphql } from 'gatsby';
export const useLayoutQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanitySiteSettings {
          edges {
            node {
              address
              phone
            }
          }
        }
      }
    `
  );
  const { address, phone } = data.allSanitySiteSettings.edges[0].node;
  const org = '822 70 4042';
  const email = 'hei@alv.no';
  return { address, phone, org, email };
};
