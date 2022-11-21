import { graphql } from 'gatsby';
import React from 'react';
import { BlogSection, IntroContainer, Title } from 'shared-components';
import { Layout } from '../components/layout';
import localize from '../components/localize';
import { useBlogQuery } from '../hookspages/useBlogQuery';

const Blog = ({ data }) => {
  const { section, meta } = data.sanityBlogPage;

  const articleData = useBlogQuery();
  const articles = articleData.articles.edges
    .map((article) => article.node)
    .sort((a, b) => (a.rawDate > b.rawDate ? -1 : 1));
  const featuredArticle = articles[0];
  articles.shift();

  const eyebrowText = 'Our most recent article';
  const postPrefix = 'blog';
  const readMoreText = 'Read more';

  return (
    <Layout
      navyHeader
      white
      whiteIcons
      pageTitle={meta.metaTitle}
      pageDescription={meta.metaDescription}
    >
      <div className="overflow-hidden">
        <IntroContainer
          article={featuredArticle}
          postPrefix={postPrefix}
          readMoreText={readMoreText}
          eyebrowText={eyebrowText}
        >
          <Title align="text-center twelve:text-left">
            <span className="text-white">{section.title}</span>
          </Title>
          <div className="w-full text-center">
            <div className="text-white tracking-wider text-blog font-light mt-8 twelve:w-full eight:w-1/2 w-5/6 mx-auto twelve:mx-0 twelve:text-left">
              {section.text}
            </div>
          </div>
        </IntroContainer>
        <BlogSection
          allArticles={articles}
          postPrefix={postPrefix}
          readMoreText={readMoreText}
        />
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
