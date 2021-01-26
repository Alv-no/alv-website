import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { Title } from '../components/title';
import * as Icon from '../components/icon';
import { useContactQuery } from '../hooks/useContactQuery';
import { Description } from '../components/description';
import Image from 'gatsby-image';
import * as Form from '../components/form';
import { FormSelect } from '../components/button';

const Contact = ({ location }) => {
  const [active, setActive] = useState('visit');
  const formChange = (e) => {
    setActive(e.target.id);
  };
  const queryData = useContactQuery();
  return (
    <Layout path={location.pathname}>
      <div className="bg-navy">
        <div
          className="bg-navy w-full sm:pb-12 pb-4 -mt-16 lg:-mt-8 text-white max-w-1440 mx-auto xl:grid"
          style={{ gridTemplateColumns: '50% 50%' }}
        >
          <div className="flex-1 mt-18 sm:px-10">
            <div className="">
              <div className="opacity-90 w-full xl:h-full h-40vh">
                <Image
                  fluid={queryData.contactUsImg.childImageSharp.fluid}
                  className="h-full"
                  alt="kontakt"
                />
              </div>
            </div>
            <div className="2xl:ml-15 ml-5">
              <div className="z-20 relative -mt-15 sm:w-80">
                <Title align="left">Kontakt Oss</Title>
                <div className="sm:h-6 h-6" />
                <span className="">
                  <Description align="left">
                    Vi holder til i helt nye lokaler i Pløens gate 1, 0181 Oslo.
                    Ta gjerne turen innom for en hyggelig prat, eller kontakt
                    oss
                  </Description>
                </span>
              </div>
              <div className="text-white tracking-wider 2xl:ml-30 mt-12 text-lg xl:mb-15">
                {/* <FormSelect id="offer" onClick={formChange} active={active}>
                  Be om et tilbud
                </FormSelect>
                <FormSelect id="call" onClick={formChange} active={active}>
                  Ring meg tilbake
                </FormSelect> */}
                <FormSelect id="visit" onClick={formChange} active={active}>
                  Besøk
                </FormSelect>
              </div>
              <div className="text-lg tracking-wider 2xl:ml-30 mb-20">
                <div className="mb-3">
                  <a href="tel:822704042" className="flex">
                    <span className="mr-3">
                      <Icon.Phone />
                    </span>{' '}
                    915 30 363
                  </a>
                </div>
                <div className="mb-3">
                  <a href="mailto:hei@alv.no" className="flex items-center">
                    <span className="mr-3">
                      <Icon.Mail />
                    </span>{' '}
                    hei@alv.no
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-5 sm:px-12 lg:mx-0 lg:p-12 lg:pb-15 tracking-wider bg-lightblue">
            {active === 'offer' && <Form.Offer />}
            {active === 'call' && <Form.Call />}
            {active === 'visit' && <Form.Visit />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
