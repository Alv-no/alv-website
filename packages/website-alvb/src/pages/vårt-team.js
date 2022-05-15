import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { useEmployeeQuery } from '../hookspages/useEmployeeQuery';
import { Title, Description, EmployeeSection, Cta } from 'shared-components';
import localize from '../components/localize';
import slugify from 'slugify';
import config from '../config';
const Employees = ({ location, data }) => {
  const { meta, section1, _rawSection2, section2 } = data.sanityEmployeePage;

  const employees = useEmployeeQuery();
  let activeCard;
  if (location.state) {
    activeCard = location.state.activeCard;
  } else if (location.hash) {
    const card = employees.find((el) => {
      return el.slug === slugify(location.hash);
    });
    activeCard = card.id;
  }

  const isEnLocale = config.LOCALE === 'en';

  return (
    <Layout
      white
      pageTitle={meta.metaTitle}
      pageDescription={meta.metaDescription}
    >
      <div className="bg-white w-full pt-10 sm:pt-16 sm:pb-12 pb-4 overflow-hidden">
        <Title>{section1.title}</Title>
        <div className="sm:h-8 h-4" />
        <div className="flex justify-center">
          <span className="px-6">
            <Description align="center">
              <span className="text-navy">{section1.text}</span>
            </Description>
          </span>
        </div>
        <div className="h-10 sm:h-16 md:h-24 mt-3" />
        <EmployeeSection
          allEmployees={employees}
          linkedId={activeCard}
          isEnLocale={isEnLocale}
          filter={false}
          showVideo={false}
          centerBioText={true}
          greyCards={false}
          config={config}
        />
        <Cta
          image={section2.image.asset.gatsbyImageData}
          title={section2.title}
          description={section2.text}
          buttonText={_rawSection2.button.text}
          internalLink={_rawSection2.button.link}
          white
        />
      </div>
    </Layout>
  );
};

export default localize(Employees);

export const query = graphql`
  query EmployeesQuery {
    sanityEmployeePage {
      meta {
        en {
          _type
          metaDescription
          metaTitle
        }
        no {
          _type
          metaDescription
          metaTitle
        }
      }
      section1 {
        text {
          en
          no
          _type
        }
        title {
          _type
          en
          no
        }
      }
      _rawSection2
      section2 {
        button {
          en {
            link
            text
            _type
          }
          no {
            _type
            link
            text
          }
        }
        image {
          asset {
            gatsbyImageData
          }
        }
        text {
          _type
          en
          no
        }
        title {
          _type
          en
          no
        }
      }
    }
  }
`;
