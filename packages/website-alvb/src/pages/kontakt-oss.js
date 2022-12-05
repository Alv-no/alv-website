import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Description, Title } from 'shared-components';
import { Visit } from '../../../shared-components/src/components/form';
import { Layout } from '../components/layout';
import localize from '../components/localize';

const Contact = ({ data }) => {
  const { section1, meta } = data.sanityContactPage;
  const { address, phone, hours, email } = data.sanitySiteSettings;
  return (
    <Layout
      noCta
      white
      pageTitle={meta.metaTitle}
      pageDescription={meta.metaDescription}
    >
      <div className="xl:pt-10">
        <div
          className="w-full text-navy max-w-1440 mx-auto xl:grid xl:pb-20"
          style={{ gridTemplateColumns: '50% 50%' }}
        >
          <div className="mt-6 sm:px-10 xl:block sm:grid grid-cols-fifty">
            <div className="sm:hidden xl:block">
              <div className="w-full h-40vh mt-8 xl:mt-0">
                <GatsbyImage
                  image={section1.image.asset.gatsbyImageData}
                  className="h-full"
                  alt="kontakt"
                />
              </div>
            </div>
            <div className="sm:my-8 xl:mt-0">
              <div className="z-20 relative -mt-15 sm:mt-5">
                <Title align="text-left sm:text-cta-lg">
                  <span className="text-navy">{section1.title}</span>
                </Title>
                <div className="sm:h-6 h-6" />
                <span className="">
                  <Description align="left" color="navy">
                    {section1.text}
                  </Description>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-5 sm:p-12 lg:mx-0 lg:pb-15 tracking-wider bg-theme-footer w-full">
              <Visit
                address={address}
                email={email}
                phone={phone}
                hours={hours}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default localize(Contact);

export const query = graphql`
  query ContactPageQuery {
    sanityContactPage {
      section1 {
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
      section2 {
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
    }
    sanitySiteSettings {
      address
      phone
      email
      hours
    }
  }
`;
