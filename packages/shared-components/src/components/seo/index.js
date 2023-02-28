import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({
  description,
  title,
  metaImage,
  socialSubtitle,
  socialTitle,
  metaAuthor,
  metaDescription,
  metaTitle,
  titleTemplate,
  metaArr,
  metaLang,
}) => {
  return (
    <Helmet
      htmlAttributes={metaLang}
      title={metaTitle}
      titleTemplate={titleTemplate || `%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description || metaDescription,
        },
        {
          name: `author`,
          content: metaAuthor,
        },
        {
          property: `og:title`,
          content: title || metaTitle,
        },
        {
          property: `og:description`,
          content: description || metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
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
