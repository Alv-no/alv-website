import { graphql } from 'gatsby';
import React from 'react';
import { Container, FeaturedTeam, NavyIntro } from 'shared-components';
import { BlogCarousel } from '../components/blogCarousel';
import Layout from '../components/layout';
import { Overview } from '../components/overview';
import { RolesList } from '../components/rolesList';
import { ServicesNav } from '../components/servicesNav';
import { StyledBlockContent } from '../components/styledBlockContent';
import { useBlogQueryRecent } from '../hooks/useBlogQueryRecent';
import { useLayoutQuery } from '../hooks/useLayoutQuery';

const Category = ({ data }) => {
  const { sanityCategoryPage } = data;
  const layoutData = useLayoutQuery();

  const nav = [
    { label: 'Oversikt', id: 'oversikt' },
    { label: 'Tjenester', id: 'tjenester' },
    { label: 'Konsulenter', id: 'konsulentene' },
  ];

  const scrollTo = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const {
    sanityCategoryPage: { pageDescription } = { pageDescription: false },
    sanityCategoryPage: { pageTitle } = { pageTitle: false },
    sanityCategoryPage: { categoryTag } = { categoryTag: '' },
    sanityCategoryPage: { featuredTeam },
  } = data;

  let topFour = data.allSanityEmployee.nodes
    .filter((el) => el.tags.some((el) => el.tag === categoryTag.tag))
    .sort((a, b) => {
      if (a.experience > b.experience) {
        return -1;
      } else {
        return 1;
      }
    });

  topFour = topFour.slice(0, topFour.length > 4 ? 4 : topFour.length);

  const recentArticles = useBlogQueryRecent().articles.nodes;

  const blogCarouselArticles =
    data.sanityCategoryPage?.blogCarousel?.selectedArticles || recentArticles;

  return (
    <Layout
      whiteIcons
      layoutData={layoutData}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <NavyIntro
        title={sanityCategoryPage.heroHeading}
        description={sanityCategoryPage.heroDescription}
      />
      <Container removePaddingBottom>
        <ServicesNav nav={nav} scrollTo={scrollTo} />
      </Container>
      <Container>
        <Overview
          image={
            sanityCategoryPage.heroImage
              ? sanityCategoryPage.heroImage.asset.gatsbyImageData
              : null
          }
          id="oversikt"
        >
          <StyledBlockContent blocks={sanityCategoryPage._rawText || null} />
        </Overview>
      </Container>
      {sanityCategoryPage.servicesListText && (
        <Container theme="gray">
          <RolesList
            categoryName={sanityCategoryPage.heroHeading}
            image={sanityCategoryPage.servicesListImage.asset.gatsbyImageData}
            roles={data.allSanityServices.edges}
          />
        </Container>
      )}
      {sanityCategoryPage.featuredTeam && (
        <Container>
          <FeaturedTeam
            team={featuredTeam[0] ? featuredTeam : topFour}
            notransparent
          />
        </Container>
      )}
      <div className="text-navy">
        <BlogCarousel blueText blue={true} articles={blogCarouselArticles} />
      </div>
    </Layout>
  );
};

export default Category;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    sanityCategoryPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      heroDescription
      heroHeading
      pageDescription
      pageTitle
      categoryTag {
        tag
      }
      heroImage {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          url
        }
      }
      overviewTitle
      featuredTeam {
        firstname
        lastname
        experience
        title
        id
        image {
          asset {
            url
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
      servicesListImage {
        asset {
          url
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
      servicesListText
      _rawText
      blogCarousel {
        selectedArticles {
          slug {
            current
          }
          id
          title
          mainImage {
            asset {
              url
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
        }
      }
    }
    allSanityServices(
      filter: { parentPage: { slug: { current: { eq: $slug } } } }
    ) {
      edges {
        node {
          heroHeading
          parentPage {
            slug {
              current
            }
          }
          slug {
            current
          }
        }
      }
    }
    allSanityEmployee {
      nodes {
        firstname
        lastname
        experience
        title
        id
        tags {
          tag
        }
        image {
          asset {
            url
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
