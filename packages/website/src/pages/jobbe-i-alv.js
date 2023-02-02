import { gql } from '@apollo/client';
import React from 'react';
import { ImageTextListHero } from '../components/imageTextHero';
import Layout from '../components/layout';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';

const WorkForAlv = ({ serverData }) => {
  const sanityCareerPage = serverData.allCareerPage[0];

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
            image={sanityCareerPage.mainImage.asset.gatsbyImageData}
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

async function getCareerPageServerSide() {
  const response = await client.query({
    query: gql`
      {
        allCareerPage {
          pageDescription
          pageTitle
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
      props: careerData,
      status: 200,
    };
  } catch {
    return {
      status: 500,
    };
  }
}
