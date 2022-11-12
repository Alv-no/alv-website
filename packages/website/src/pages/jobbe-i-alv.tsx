import React from 'react';
import Layout from '../components/layout';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';
import { ImageTextListHero } from '../components/imageTextHero';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { gql } from '@apollo/client';
import { graphql } from 'gatsby';

interface Props {
  data: any;
  serverData: any;
}

const WorkForAlv : React.FC<Props> = ({ data, serverData }) => {
  const { stairs, street } = data;
  const sanityCareerPage = serverData.careerData.allCareerPage[0];

  const layoutData = useLayoutQuery();
  return (
    <>
      <Layout
        whiteIcons
        layoutData={layoutData}
        pageTitle={sanityCareerPage.pageTitle}
        pageDescription={sanityCareerPage.pageDescription}
      >
        <div className="overflow-hidden">
          <ImageTextListHero
            image={stairs.childImageSharp.gatsbyImageData}
            positionsListLeft={sanityCareerPage.positionsListLeft}
            positionsListRight={sanityCareerPage.positionsListRight}
          />
        </div>
        <div className="py-15 twelve:py-25">
          {sanityCareerPage.reasonsCarousel && (
            <ReasonsSlider
              mainHeading={sanityCareerPage.reasonsCarousel.mainHeading}
              slides={sanityCareerPage.reasonsCarousel.process}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

export default WorkForAlv;

export const query = graphql`
  {
    stairs: file(name: { eq: "stairs" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    street: file(name: { eq: "jobbeialv_1" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

async function getCareerPageServerSide() {
  const response = await client.query({
    query: gql`
      {
        allCareerPage {
          pageDescription
          pageTitle
          positionsListLeft {
            slug {
              current
            }
            pageTitle
          }
          positionsListRight {
            pageTitle
            slug {
              current
            }
          }
          reasonsCarousel {
            mainHeading
            process {
              heading
              description
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
      }
    `,
    fetchPolicy: 'no-cache',
  });
  createGatsbyImages(response.data);
  return response.data;
}

export async function getServerData() {
  try {
    const careerData = await getCareerPageServerSide();
    return {
      props: {
        careerData,
      },
      status: 200,
    };
  } catch {
    return {
      status: 500,
    };
  }
}
