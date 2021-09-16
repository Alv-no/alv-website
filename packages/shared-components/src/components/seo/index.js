import React from 'react';
import { Helmet } from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';

export const SEO = ({
  description,
  lang,
  meta,
  title,
  metaImage,
  socialSubtitle,
  socialTitle,
  author,
}) => {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `
  // );
  const metaAuthor = author || 'site.siteMetadata.author;';
  const metaDescription = description || 'site.siteMetadata.description;';
  const metaTitle = title || 'site.siteMetadata.title;';
  const metaArr = meta || [];
  const metaLang = lang || { lang: 'no' };
  return (
    <Helmet
      htmlAttributes={metaLang}
      title={metaTitle}
      titleTemplate={`%s | ${'site.siteMetadata.title'}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: socialTitle || title,
        },
        {
          name: `twitter:description`,
          content: socialSubtitle || description,
        },
      ].concat(metaArr)}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        media="none"
        onload="if(media!='all')media='all'"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        media="none"
        onload="if(media!='all')media='all'"
      />
    </Helmet>
  );
};

export default SEO;
