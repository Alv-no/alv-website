import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Layout } from '../components/layout';
import { Title, Description } from 'shared-components';
import { useContactQuery } from '../hookspages/useContactQuery';
import * as Form from '../../../shared-components/src/components/form';

const Contact = () => {
  const { address, phone, hours, email, contactImage } = useContactQuery();

  return (
    <Layout noCta white pageTitle="pageTitle" pageDescription="pageDescription">
      <div className="xl:pt-10">
        <div
          className="w-full text-navy max-w-1440 mx-auto xl:grid xl:pb-20"
          style={{ gridTemplateColumns: '50% 50%' }}
        >
          <div className="mt-6 sm:px-10 xl:block sm:grid grid-cols-fifty">
            <div className="sm:hidden xl:block">
              <div className="w-full h-40vh mt-8 xl:mt-0">
                <GatsbyImage
                  image={contactImage.asset.gatsbyImageData}
                  className="h-full"
                  alt="kontakt"
                />
              </div>
            </div>
            <div className="sm:my-8 xl:mt-0">
              <div className="z-20 relative -mt-15 sm:mt-5">
                <Title align="left sm:text-cta-lg">
                  <span className="text-navy">Kontakt Oss</span>
                </Title>
                <div className="sm:h-6 h-6" />
                <span className="">
                  <Description align="left" color="navy">
                    Vi holder til i helt nye lokaler i {address}. Ta gjerne
                    turen innom for en hyggelig prat, eller kontakt oss
                  </Description>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className=" p-5 sm:p-12 lg:mx-0 lg:pb-15 tracking-wider bg-theme-footer w-full">
              <Form.Visit
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

export default Contact;
