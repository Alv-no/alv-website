import React from 'react';
import Layout from '../components/layout';
import { useLayoutQuery } from '../hooks/useLayoutQuery';

const NotFoundPage = () => {
  const layoutData = useLayoutQuery();

  return (
    <Layout
      layoutData={layoutData}
      pageTitle="404 - siden finnes ikke"
      whiteIcons
    >
      <div className="min-h-screen bg-navy text-2xl text-white flex items-center justify-center flex-col">
        <div className="text-center transform -translate-y-20">
          <h1 className="mb-5">Not Found.</h1>
          <p>You just hit a route that doesn&#39;t exist.</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
