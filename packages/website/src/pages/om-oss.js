import { gql } from '@apollo/client';
import React from 'react';
import { Container, FeaturedTeam, OurServices, Title } from 'shared-components';
import AboutIntro from '../components/aboutIntro';
import { BlogCarousel } from '../components/blogCarousel';
import Brands from '../components/brands';
import Layout from '../components/layout';
import config from '../config';
import { useBlogQueryRecent } from '../hooks/useBlogQueryRecent';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { useAboutUsQuery } from '../hookspages/useAboutUsQuery';
import { brandsQuery } from '../queryFragments';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';

const About = ({ serverData }) => {
  const data = useAboutUsQuery();
  const layoutData = useLayoutQuery();

  const {
    sanityAboutPage: { pageDescription } = { pageDescription: false },
    sanityAboutPage: { pageTitle } = { pageTitle: false },
  } = serverData;

  const employees = data.allSanityEmployee.edges.map((el) => el.node);
  employees.map(
    (el) => (el.fallbackImg = data.fallbackImg.childImageSharp.gatsbyImageData),
  );
  const team = employees.slice(0, 4);

  const recentArticles = useBlogQueryRecent().articles.nodes;
  const blogCarouselArticles =
    serverData?.blogCarousel?.selectedArticles || recentArticles;

  return (
    <Layout
      layoutData={layoutData}
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <div className="w-full bg-navy text-white sm:pb-20 pb-4 overflow-hidden tracking-wider">
        <div className="w-full">
          <AboutIntro
            topImg={data.aboutUsTop.childImageSharp.gatsbyImageData}
            bottomImg={data.aboutUsLower.childImageSharp.gatsbyImageData}
          />
        </div>
        <Container theme="navy">
          <Brands {...serverData.brands} config={config} />
        </Container>
        <Container theme="navy">
          <OurServices darkFade {...serverData.section2Services} />
        </Container>
        <Container theme="navy">
          <Title align="text-left">Ansatte</Title>
          <FeaturedTeam notitle team={team} color="navy" />
        </Container>
        <div className="max-w-1440 mx-auto">
          <BlogCarousel articles={blogCarouselArticles} />
        </div>
      </div>
    </Layout>
  );
};

async function getAboutContent() {
  const response = await client.query({
    query: gql`
      {
        aboutPage: allAboutPage {
          ${brandsQuery}
          pageDescription
          pageTitle
          blogCarousel {
            selectedArticles {
              slug {
                current
              }
              id: _id
              title
              mainImage {
                asset {
                  id: _id
                  metadata {
                    dimensions {
                      height
                      width
                    }
                  }
                }
              }
            }
          }
        }
        allLandingPage {
          section2Services {
            description
            heading
            link
            textOverImage
            servicesList {
              link
              subtitle
              text
              title
            }
            image {
              asset {
                id: _id
                metadata {
                  dimensions {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    `,
    fetchPolicy: 'no-cache',
  });

  const data = response.data;
  createGatsbyImages(data);

  return {
    ...data.aboutPage[0],
    ...data.allLandingPage[0],
  };
}

export async function getServerData() {
  try {
    const aboutData = await getAboutContent();
    return {
      status: 200,
      props: aboutData,
    };
  } catch {
    return {
      status: 500,
    };
  }
}

export default About;
