import React from 'react';
import Layout from '../components/layout';
import { useAboutUsQuery } from '../hookspages/useAboutUsQuery';
import { BlogCarousel } from '../components/blogCarousel';
import {
  Title,
  OurServices,
  AboutIntro,
  FeaturedTeam,
  Container,
} from 'shared-components';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';
import { gql } from '@apollo/client';

const About = ({ serverData }) => {
  const data = useAboutUsQuery();
  const layoutData = useLayoutQuery();
  const {
    sanityAboutPage: { pageDescription } = { pageDescription: false },
    sanityAboutPage: { pageTitle } = { pageTitle: false },
  } = serverData.aboutPage;
  const employees = data.allSanityEmployee.edges.map((el) => el.node);
  employees.map(
    (el) => (el.fallbackImg = data.fallbackImg.childImageSharp.gatsbyImageData)
  );
  const team = employees.slice(0, 4);

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
          <OurServices
            darkFade
            {...serverData.allLandingPage[0].section2Services}
          />
        </Container>
        <Container theme="navy">
          <Title align="left">Ansatte</Title>
          <FeaturedTeam notitle team={team} color="navy" />
        </Container>
        <div className="max-w-1440 mx-auto">
          <BlogCarousel />
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
          pageDescription
          pageTitle
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
    aboutPage: data.aboutPage[0],
    allLandingPage: data.allLandingPage,
  };
}

export async function getServerData() {
  try {
    const aboutData = await getAboutContent();
    return {
      status: 200,
      props: {
        ...aboutData,
      },
    };
  } catch {
    return {
      status: 500,
    };
  }
}

export default About;
