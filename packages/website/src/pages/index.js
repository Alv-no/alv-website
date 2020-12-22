import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';

const Index = () => {
  return (
    <Layout>
      <div className="bg-navy w-full text-6xl flex justify-center items-center pb-56 h-screen">
        <Title bold={false} size="text-6xl leading-tight">
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
