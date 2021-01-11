import React from 'react';
import { Helmet } from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({ title }) => {
  // Will source SEO data from SANITY

  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `
  // );

  // const metaDescription = description || 'Alv';

  return (
    <Helmet
      title={title}
      // meta={[
      //   {
      //     name: `description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:title`,
      //     content: title,
      //   },
      //   {
      //     property: `og:description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:type`,
      //     content: `website`,
      //   },
      // ].concat(meta)}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>
  );
};

export default SEO;
