import React from 'react';
import { Layout } from '../components/layout';
import { Title, Description, EmployeeSection, Cta } from 'shared-components';
import { useEmployeeQuery } from '../hookspages/useEmployeeQuery';
import slugify from 'slugify';

const Employees = ({ location }) => {
  const data = useEmployeeQuery();
  const {
    allEmployees,
    sanityEmployeePage: { pageDescription } = { pageDescription: false },
    sanityEmployeePage: { pageTitle } = { pageTitle: false },
  } = data;

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
    <Layout whiteIcons pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="bg-navy w-full pt-10 sm:pt-16 sm:pb-12 pb-4 overflow-hidden">
        <Title>Våre Konsulenter</Title>
        <div className="sm:h-8 h-4" />
        <div className="flex justify-center">
          <span className="px-6">
            <Description align="center">
              Alv er produktet av alle konsulentene som jobber i selskapet.
              Utforsk våre konsulenter - alle med Alv i genene
            </Description>
          </span>
        </div>
        <div className="h-10 sm:h-16 md:h-24 mt-3" />
        <EmployeeSection
          allTags={data.allSanityEmployeeTag.edges}
          allEmployees={allEmployees}
          linkedId={activeCard}
          fallbackImg={data.fallbackImg.childImageSharp.gatsbyImageData}
        />
        <Cta
          image={data.cta.childImageSharp.gatsbyImageData}
          fallback={data.ctaFallback.childImageSharp.gatsbyImageData}
          white={true}
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

export default Employees;
