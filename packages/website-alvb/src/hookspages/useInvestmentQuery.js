import { useStaticQuery, graphql } from 'gatsby';
export const useInvestmentQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityInvestmentPage {
          _rawSection3Block
          pageDescription
          pageTitle
          section1Description
          section1Title
          section2ImageLeft {
            asset {
              gatsbyImageData
            }
          }
          section2ImageRight {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    `
  );
  const {
    pageTitle,
    pageDescription,
    section1Title,
    section1Description,
    section2ImageLeft,
    section2ImageRight,
    _rawSection3Block,
  } = data.sanityInvestmentPage;
  return {
    pageTitle,
    pageDescription,
    section1Title,
    section1Description,
    section2ImageLeft,
    section2ImageRight,
    _rawSection3Block,
  };
};
