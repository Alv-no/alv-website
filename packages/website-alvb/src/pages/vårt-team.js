import React from 'react';
import { Layout } from '../components/layout';
import {
  Title,
  Description,
  NoTagsEmployeeSection,
  Cta,
} from 'shared-components';
import { useEmployeeQuery } from '../hookspages/useEmployeeQuery';
import slugify from 'slugify';

const Employees = ({ location }) => {
  const data = useEmployeeQuery();
  const { allEmployees } = data;
  const {
    pageDescription,
    pageTitle,
    section1Description,
    section1Title,
    section2Title,
    section2Text,
    section2Image,
  } = data.sanityEmployeePage;

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
    <Layout white pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="bg-white w-full pt-10 sm:pt-16 sm:pb-12 pb-4 overflow-hidden">
        <Title>{section1Title}</Title>
        <div className="sm:h-8 h-4" />
        <div className="flex justify-center">
          <span className="px-6">
            <Description align="center">
              <span className="text-navy">{section1Description}</span>
            </Description>
          </span>
        </div>
        <div className="h-10 sm:h-16 md:h-24 mt-3" />
        <NoTagsEmployeeSection
          allEmployees={allEmployees}
          linkedId={activeCard}
        />
        <Cta
          image={section2Image.asset.gatsbyImageData}
          heading={section2Title}
          internalLink="/samarbeid-med-oss/investering"
          buttonText="Bli investor"
          description={section2Text}
          white
        />
      </div>
    </Layout>
  );
};

export default Employees;
