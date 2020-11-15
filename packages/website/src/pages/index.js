import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { Tags } from '../components/tagbar';
import { Cta } from '../components/cta';
import { useEmployeeQuery } from '../hooks/useEmployeeQuery';

const Employees = () => {
  const data = useEmployeeQuery();
  return (
    <Layout>
      {/* Navy background for illustrative purposes */}
      <div className="bg-navy w-full py-12">
        <Title>Ansatte</Title>
        <div className="py-3">
          <Description align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Description>
        </div>
        <div className="h-10 sm:h-16 md:h-24" />
        <Tags
          sanityTags={data.allSanityEmployeeTag.edges}
          sanityEmployees={data.allSanityEmployee.edges}
        />
        <Cta
          internalLink="/"
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
