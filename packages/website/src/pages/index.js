import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { Description } from '../components/description';
import { Tags } from '../components/tagbar';

const Employees = () => {
  return (
    <Layout>
      {/* Navy background for illustrative purposes */}
      <div className="bg-navy h-screen w-full py-12">
        <Title>Ansatte</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Description>
        <div className="h-24" />
        <Tags />
      </div>
    </Layout>
  );
};

export default Employees;
