import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { FeaturedCard } from '../components/featuredCard';
import { BlogTagBar } from '../components/BlogTagBar';
import image from '../assets/cta.png';
import { useBlogQuery } from '../hooks/useBlogQuery';

const Blog = () => {
  const data = useBlogQuery();
  const articles = data.articles.edges;
  const featuredArticle = data.featuredArticle.article;
  console.log(featuredArticle);
  console.log(featuredArticle);
  return (
    <Layout>
      <FeaturedCard {...featuredArticle} image={image}>
        <Title align="left">Blogg</Title>
        <div className="text-white tracking-wider w-full text-blog font-light mt-8">
          Vi vil gjerne dele litt av vår{' '}
          <span className="font-semibold">kunnskap</span>, og gi deg noen av
          våre <span className="font-semibold">tips og tanker</span>
        </div>
      </FeaturedCard>
      {/* Tags will be passed */}
      <BlogTagBar tags={articles} />
    </Layout>
  );
};

export default Blog;
