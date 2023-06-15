import React from "react";
import { BlockContent } from "shared-components";
import { NavyIntro } from "../../../../shared-components/src/components/navyIntro";
import ApplyForm from "../../components/applyForm";
import Layout from "../../components/layout";
import configuration from "../../config";
import { useLayoutQuery } from "../../hooks/useLayoutQuery";
import { createGatsbyImages } from "../../server-side/imageCreator";
import { sanityClient } from "../../server-side/sanityClient";

const Career = ({ serverData }) => {
  const layoutData = useLayoutQuery();

  const {
    pageTitle,
    pageDescription,
    heroImage,
    formHeader,
    formDescription,
    jobDescription,
  } = serverData;

  return (
    <Layout
      layoutData={layoutData}
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <div className="bg-navy">
        <NavyIntro
          title={pageTitle}
          description={pageDescription}
          image={heroImage.asset.gatsbyImageData}
        />
      </div>
      <div
        className="bg-white max-w-1200 mx-auto lg:grid sm:px-12 lg:pr-0 pt-12 lg:pb-18 sm:pb-8 gap-x-12"
        style={{
          gridTemplateColumns: "55% minmax(min-content, 500px)",
        }}
      >
        <div className="px-5">
          <BlockContent blocks={jobDescription} config={configuration} />
        </div>
        <div>
          <div className="tracking-wider py-10 bg-[#fafafb] px-8 mt-6 lg:mt-0">
            <h2 className="text-xl font-bold mb-4 uppercase mb-4">
              {formHeader}
            </h2>
            <p className="mb-6">{formDescription}</p>
            <ApplyForm jobTitle={pageTitle} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;

export async function getServerData(context) {
  const slug = context.params["slug"];
  const result = (
    await sanityClient.fetch(
      `*[_type == "openPostionPage" && slug.current == '${slug}' && !(_id in path('drafts.**'))]`
    )
  )[0];

  if (!result) {
    throw new Error("No such published article");
  }

  createGatsbyImages(result, true);

  return {
    props: result,
    status: 200,
  };
}
