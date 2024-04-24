import { gql } from "@apollo/client";
import React from "react";
import { Cta, Description, EmployeeSection, Title } from "shared-components";
import { createSlugForEmployee } from "shared-components/src/components/createSlugForEmployee";
import slugify from "slugify";
import Layout from "../components/layout";
import config from "../config";
import { useLayoutQuery } from "../hooks/useLayoutQuery";
import { useEmployeeQuery } from "../hookspages/useEmployeeQuery";
import { client } from "../server-side/client";
import { createGatsbyImages } from "../server-side/imageCreator";

const Employees = ({ location, serverData }) => {
  const data = useEmployeeQuery();
  const layoutData = useLayoutQuery();
  const allEmployees = serverData.allEmployee;
  const employeeTags = serverData.allEmployeeTag;

  const { pageDescription, pageTitle } = serverData.allEmployeePage[0];

  let activeCard;
  if (location.state) {
    activeCard = location.state.activeCard;
  } else if (location.hash) {
    const card = allEmployees.find((el) => {
      return el.slug === slugify(location.hash);
    });
    activeCard = card.id;
  }
  return (
    <Layout
      layoutData={layoutData}
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <div className="bg-navy w-full pt-20 sm:pt-16 sm:pb-12 pb-4 overflow-hidden">
        <Title>Våre Konsulenter</Title>
        <div className="sm:h-8 h-4" />
        <div className="flex justify-center">
          <span className="px-6">
            <Description align="center">
              Alv er produktet av alle konsulentene som jobber i selskapet.
              Utforsk våre konsulenter - alle med Alv i genene.
            </Description>
          </span>
        </div>
        <div className="h-10 sm:h-16 md:h-24 mt-3" />
        <EmployeeSection
          allTags={employeeTags}
          allEmployees={allEmployees}
          linkedId={activeCard}
          fallbackImg={data.fallbackImg.childImageSharp.gatsbyImageData}
          showVideo={true}
          config={config}
        />
        <Cta
          image={data.cta.childImageSharp.gatsbyImageData}
          fallback={data.ctaFallback.childImageSharp.gatsbyImageData}
          color="white"
          heading="Bli en av oss"
          internalLink="/jobbe-i-alv"
          buttonText="Bli en alv"
          description="Vi bygger Norges mest attraktive konsulentselskap. For å lykkes
          med dette, trenger vi flere medarbeidere. Vi trenger all
          kompetanse relatert til systemutvikling."
        />
      </div>
    </Layout>
  );
};

async function getEmployeeData() {
  const response = await client.query({
    fetchPolicy: "no-cache",
    query: gql`
      {
        allEmployeePage {
          pageDescription
          pageTitle
        }
        allEmployee {
          tags {
            tag
          }
          firstname
          lastname
          ytVideoId
          id: _id
          video {
            asset {
              url
            }
          }
          cv {
            asset {
              url
            }
          }
          id: _id
          title
          experienceSinceYear
          _rawBio: bioRaw
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
        allEmployeeTag {
          tag
          id: _id
        }
      }
    `,
  });
  const employeeData = response.data;
  createGatsbyImages(employeeData);

  employeeData.allEmployeeTag = employeeData.allEmployeeTag.map((tag) => ({
    node: tag,
  }));

  employeeData.allEmployee = employeeData.allEmployee.map((employee) => {
    employee.slug = createSlugForEmployee(
      employee?.firstname,
      employee?.lastname
    );
    return employee;
  });
  return employeeData;
}

export async function getServerData() {
  try {
    return {
      status: 200,
      props: await getEmployeeData(),
    };
  } catch {
    return {
      status: 500,
    };
  }
}

export default Employees;
