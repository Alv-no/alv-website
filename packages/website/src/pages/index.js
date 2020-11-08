import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';

const Employees = () => {
  return (
    <Layout>
      {/* Navy background for illustrative purposes */}
      <div className="bg-navy h-40 w-full text-4xl py-12">
        <Title>Ansatte</Title>
      </div>
    </Layout>
  );
};

export default Employees;
