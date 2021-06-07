import React from 'react';
import Layout from '../layout';
import { useAboutUsQuery } from '../hookspages/useAboutUsQuery';
import { Subtitle } from '../components/title';
import { OurServices } from '../components/ourServices';
import { BlogSlider } from '../components/blogSlider';
import { AboutIntro } from '../components/aboutIntro';
import { FeaturedTeam } from '../components/featuredTeam';

const About = () => {
  const data = useAboutUsQuery();
  const {
    sanityAboutPage: { pageDescription } = { pageDescription: false },
    sanityAboutPage: { pageTitle } = { pageTitle: false },
  } = data;
  const employees = data.allSanityEmployee.edges.map((el) => el.node);
  employees.map(
    (el) => (el.fallbackImg = data.fallbackImg.childImageSharp.gatsbyImageData)
  );
  const team = employees.slice(0, 4);
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="w-full bg-navy text-white sm:pb-20 pb-4 overflow-hidden tracking-wider">
        <div className="w-full">
          <AboutIntro
            topImg={data.aboutUsTop.childImageSharp.gatsbyImageData}
            bottomImg={data.aboutUsLower.childImageSharp.gatsbyImageData}
          />
          <div className="sm:h-10 lg:h-20" />
        </div>
        <div className="h-10 lg:h-0" />
        <OurServices image={data.services.childImageSharp.gatsbyImageData}>
          Alv er produktet av alle konsulentene som jobber i selskapet. Dyktige
          konsulenter gjør Alv til et bra produkt.
        </OurServices>
        <div className="px-12 lg:h-5"></div>
        <div className="max-w-1440 mx-auto sm:px-12 px-5 -mb-10 mt-12">
          <Subtitle>Ansatte</Subtitle>
        </div>
        <FeaturedTeam notitle team={team} color="navy" />
        <div className="max-w-1440 mx-auto">
          <BlogSlider />
        </div>
      </div>
    </Layout>
  );
};

export default About;
