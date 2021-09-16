import React from 'react';
import { Layout } from '../components/layout';
import { Title, IntroContainer, BlogSection } from 'shared-components';
import { useBlogQuery } from '../hooks/useBlogQuery';

const Blog = () => {
  const data = useBlogQuery();
  const articles = data.articles.edges
    .map((article) => article.node)
    .sort((a, b) => (a.rawDate > b.rawDate ? -1 : 1));
  articles.map(
    (el) => (el.fallbackImg = data.fallbackImg.childImageSharp.gatsbyImageData)
  );
  const featuredArticle = articles[0];
  articles.shift();
  featuredArticle.fallbackImg =
    data.fallbackImg.childImageSharp.gatsbyImageData;
  return (
    <Layout
      pageTitle={data.sanityBlogPage.pageTitle}
      pageDescription={data.sanityBlogPage.pageDescription}
    >
      <div className="overflow-hidden">
        <IntroContainer article={featuredArticle}>
          <Title align="text-center twelve:text-left">Blogg</Title>
          <div className="w-full text-center">
            <div className="text-white tracking-wider text-blog font-light mt-8 twelve:w-full eight:w-1/2 w-5/6 mx-auto twelve:mx-0 twelve:text-left">
              Vi vil gjerne dele litt av vår{' '}
              <span className="font-semibold">kunnskap</span>, og gi deg noen av
              våre <span className="font-semibold">tips og tanker</span>
            </div>
          </div>
        </IntroContainer>
        <BlogSection allArticles={articles} />
      </div>
    </Layout>
  );
};

export default Blog;
