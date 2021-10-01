import React from 'react';
import { Layout } from '../components/layout';
import { Title, IntroContainer, BlogSection } from 'shared-components';
import { useBlogQuery } from '../hookspages/useBlogQuery';

const Blog = () => {
  const data = useBlogQuery();
  const articles = data.articles.edges
    .map((article) => article.node)
    .sort((a, b) => (a.rawDate > b.rawDate ? -1 : 1));
  const featuredArticle = articles[0];
  articles.shift();
  const { section1Description, section1Title } = data.sanityBlogPage;
  return (
    <Layout
      navyHeader
      white
      whiteIcons
      pageTitle={data.sanityBlogPage.pageTitle}
      pageDescription={data.sanityBlogPage.pageDescription}
    >
      <div className="overflow-hidden">
        <IntroContainer article={featuredArticle}>
          <Title align="text-center twelve:text-left">
            <span className="text-white">{section1Title}</span>
          </Title>
          <div className="w-full text-center">
            <div className="text-white tracking-wider text-blog font-light mt-8 twelve:w-full eight:w-1/2 w-5/6 mx-auto twelve:mx-0 twelve:text-left">
              {section1Description}
            </div>
          </div>
        </IntroContainer>
        <BlogSection allArticles={articles} />
      </div>
    </Layout>
  );
};

export default Blog;
