import { gql } from "@apollo/client";
import React from "react";
import { Container } from "shared-components";
import { ImageTextListHero } from "../components/imageTextHero";
import Layout from "../components/layout";
import { ReasonsSlider } from "../components/reasonsSlider";
import { useLayoutQuery } from "../hooks/useLayoutQuery";
import { client } from "../server-side/client";
import { createGatsbyImages } from "../server-side/imageCreator";
import { sectionsQuery } from "../queryFragments";
import Sections from "../components/sections";

const WorkForAlv = ({ serverData }) => {
  const sanityCareerPage = serverData.allCareerPage[0];

  const layoutData = useLayoutQuery();
  return (
    <Layout
      whiteIcons
      layoutData={layoutData}
      pageTitle={sanityCareerPage.pageTitle}
      pageDescription={sanityCareerPage.pageDescription}
    >
      <Container
        theme="navy"
        maxWidth={1280}
        removePaddingBottom
        className="xl:px-20"
      >
        <ImageTextListHero
          image={sanityCareerPage.mainImage.asset.gatsbyImageData}
          positionsListLeft={sanityCareerPage.positionsListLeft}
          positionsListRight={sanityCareerPage.positionsListRight}
        />
      </Container>

      <Sections sections={sanityCareerPage.sections} maxWidth={1280} />

      {sanityCareerPage.reasonsCarousel && (
        <ReasonsSlider
          mainHeading={sanityCareerPage.reasonsCarousel.mainHeading}
          slides={sanityCareerPage.reasonsCarousel.process}
        />
      )}
    </Layout>
  );
};

export default WorkForAlv;

async function getCareerPageServerSide() {
  const response = await client.query({
    query: gql`
      {
        allCareerPage {
          ${sectionsQuery}
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
    fetchPolicy: "no-cache",
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
