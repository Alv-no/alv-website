import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/title';
import { FeaturedCard } from '../components/featuredCard';
import image from '../assets/cta.png';
import { useBlogQuery } from '../hooks/useBlogQuery';

const Blog = () => {
  const data = useBlogQuery();
  const posts = data.allSanityArticle.edges;
  return (
    <Layout>
      <FeaturedCard posts={posts} image={image}>
        <Title align="left">Blogg</Title>
        <div className="text-white tracking-wider w-full text-blog font-light mt-8">
          Vi vil gjerne dele litt av vår{' '}
          <span className="font-semibold">kunnskap</span>, og gi deg noen av
          våre <span className="font-semibold">tips og tanker</span>
        </div>
      </FeaturedCard>
      <div className="h-screen bg-white w-full"></div>
    </Layout>
  );
};

export default Blog;
