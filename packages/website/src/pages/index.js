import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';

const Index = () => {
  return (
    <Layout>
      <div className="bg-navy w-full pt-8 sm:pt-16 sm:pb-12 pb-4 h-screen">
        <Title bold={false}>
          <div>Vi bygger </div>
          <div className="font-black">Norges mest attraktive</div>
          <span>konsulentselskap</span>
        </Title>
        <div className="sm:h-3 h-4" />
        <div className="flex justify-center"></div>
      </div>
    </Layout>
  );
};

export default Index;
