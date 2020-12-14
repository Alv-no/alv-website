import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { Title } from '../components/title';
import * as Icon from '../components/icon';
import { Description } from '../components/description';
import Image from 'gatsby-image';
import * as Form from '../components/form';
import { FormSelect } from '../components/button';

const Contact = ({ location, data }) => {
  const [active, setActive] = useState('offer');
  const formChange = (e) => {
    setActive(e.target.id);
  };
  return (
    <Layout path={location.pathname}>
      <div className="bg-navy">
        <div className="bg-navy w-full sm:pb-12 pb-4 flex lg:flex-row flex-col -mt-16 lg:-mt-8 text-white max-w-1440 mx-auto">
          <div className="flex-1 mt-18 px-10">
            <div className="" style={{ height: '23vw', width: '45vw' }}>
              <div className="opacity-90 w-full h-full">
                <Image
                  fluid={data.allFile.edges[2].node.childImageSharp.fluid}
                  className="h-full"
                  alt="kontakt"
                />
              </div>
            </div>
            <div className="2xl:ml-15 ml-5">
              <div className="z-20 relative -mt-15 w-80">
                <Title align="left">Kontakt Oss</Title>
                <div className="sm:h-6 h-6" />
                <span className="">
                  <Description align="left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Description>
                </span>
              </div>
              <div className="text-white tracking-wider 2xl:ml-30 mt-12 text-lg mb-15">
                <FormSelect id="offer" onClick={formChange} active={active}>
                  Be om et tilbud
                </FormSelect>
                <FormSelect id="call" onClick={formChange} active={active}>
                  Ring meg tilbake
                </FormSelect>
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
                    822 70 4042
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
          <div
            className="flex-1 -mx-10 p-10 lg:mx-0 lg:p-18 lg:pb-15 tracking-wider bg-lightblue"
            style={{ maxWidth: '725px' }}
          >
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
