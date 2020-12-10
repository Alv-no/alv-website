import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { Tagbar } from '../components/tagbar';
import { Cta } from '../components/cta';
import { useEmployeeQuery } from '../hooks/useEmployeeQuery';

const Employees = ({ location }) => {
  const data = useEmployeeQuery();
  const activeCard = location.state ? location.state.activeCard : null;
  return (
    <Layout>
      <div className="bg-navy w-full pt-10 sm:pt-16 sm:pb-12 pb-4 overflow-hidden">
        <Title>Ansatte</Title>
        <div className="sm:h-8 h-4" />
        <div className="flex justify-center">
          <span className="px-6">
            <Description align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Description>
          </span>
        </div>
        <div className="h-10 sm:h-16 md:h-24 mt-3" />
        <Tagbar
          allTags={data.allSanityEmployeeTag.edges}
          allEmployees={data.allSanityEmployee.edges}
          linkedId={activeCard}
        />
        <Cta
          heading="Join With Us"
          internalLink="/bli-en-alv"
          buttonText="Bli en alv"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam."
        />
      </div>
    </Layout>
  );
};

export default Employees;
