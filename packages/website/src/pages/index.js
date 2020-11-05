import React from 'react';
import Layout from '../components/layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="text-white flex items-center justify-center h-screen flex-col">
        <p className="text-center text-black p-2">Tailwind color profile:</p>
        <div className="flex">
          <div className="p-10 h-10 w-10 flex justify-center items-center bg-blue">
            Blue
          </div>
          <div className="p-10 h-10 w-10 flex justify-center items-center bg-navy">
            Navy
          </div>
          <div className="p-10 h-10 w-10 flex justify-center items-center bg-yellow">
            Yellow
          </div>
          <div className="p-10 h-10 w-10 flex justify-center items-center bg-orange">
            orange
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
