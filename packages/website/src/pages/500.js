import React from "react";
import Layout from "../components/layout";
import { useLayoutQuery } from "../hooks/useLayoutQuery";

const NotFoundPage = () => {
  const layoutData = useLayoutQuery();

  return (
    <Layout
      layoutData={layoutData}
      pageTitle="404 - siden finnes ikke"
      whiteIcons
      path={[]}
    >
      <div className="min-h-screen bg-navy text-2xl text-white flex items-center justify-center flex-col">
        <div className="text-center transform -translate-y-20">
          <h2 className="mb-5">Noe har gått galt</h2>
          <p>
            Det kan hende innholdet du forsøkte å hente ikke lenger er publisert
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
