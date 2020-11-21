import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { Description } from '../components/description';

const Index = () => {
  return (
    <Layout>
      <div className="bg-navy w-full pt-8 sm:pt-16 sm:pb-12 pb-4">
        <Title>Index</Title>
        <div className="sm:h-3 h-4" />
        <div className="flex justify-center">
          <span className="px-6">
            <Description align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Description>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
