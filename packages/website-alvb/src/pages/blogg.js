import React, { useEffect } from 'react';
import localize from '../components/localize';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { Title, IntroContainer, BlogSection } from 'shared-components';
import { useBlogQuery } from '../hookspages/useBlogQuery';
import config from '../config';

const Blog = ({ data }) => {
  const isEnLocale = config.LOCALE === 'en';
  const { section, meta } = data.sanityBlogPage;

  const articleData = useBlogQuery();
  const articles = articleData.articles.edges
    .map((article) => article.node)
    .sort((a, b) => (a.rawDate > b.rawDate ? -1 : 1));
  const featuredArticle = articles[0];
  articles.shift();

  return (
    <Layout
      navyHeader
      white
      whiteIcons
      pageTitle={meta.metaTitle}
      pageDescription={meta.metaDescription}
    >
      <div className="overflow-hidden">
        <IntroContainer article={featuredArticle} isEnLocale={isEnLocale}>
          <Title align="text-center twelve:text-left">
            <span className="text-white">{section.title}</span>
          </Title>
          <div className="w-full text-center">
            <div className="text-white tracking-wider text-blog font-light mt-8 twelve:w-full eight:w-1/2 w-5/6 mx-auto twelve:mx-0 twelve:text-left">
              {section.text}
            </div>
          </div>
        </IntroContainer>
        <BlogSection allArticles={articles} isEnLocale={isEnLocale} />
      </div>
    </Layout>
  );
};

export default localize(Blog);

export const query = graphql`
  query BlogPageQuery {
    sanityBlogPage {
      meta {
        en {
          _type
          metaDescription
          metaTitle
        }
        no {
          _type
          metaDescription
          metaTitle
        }
      }
      section {
        text {
          en
          no
          _type
        }
        title {
          _type
          en
          no
        }
      }
    }
  }
`;
