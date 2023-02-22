import { graphql, useStaticQuery } from "gatsby";
export const useNavigationQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanitySiteSettings {
          mainMenu {
            items {
              link
              title
            }
            link
            title
          }
        }
      }
    `,
  );
  const { mainMenu } = data.sanitySiteSettings;
  return { mainMenu };
};
