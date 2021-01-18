import React from 'react';
import Layout from '../components/layout';
import { useSubServiceQuery } from '../hooks/useSubServiceQuery';
import { NavyIntro } from '../components/navyIntro';
import { Overview } from '../components/overview';
import { ServicesNav } from '../components/servicesNav';
import { WhatWeDo } from '../components/whatWeDo';
import { RolesList } from '../components/rolesList';
import { BlogSlider } from '../components/blogSlider';
import { FeaturedTeam } from '../components/featuredTeam';
import { Testimonials } from '../components/testimonials';

const Systemutvikling = () => {
  const data = useSubServiceQuery();
  const employees = data.allSanityEmployee.edges.map((el) => el.node);
  const fallbackImg = data.fallbackImg.childImageSharp.fluid;
  const team = employees.slice(0, 4);
  const nav = ['Oversikt', 'Hva Gjør Vi', 'Vårt Team', 'Blogg', 'Kundeomtaler'];
  return (
    <Layout>
      <NavyIntro
        title="Systemutvikling"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button=""
      />
      <div className="w-full bg-white sm:pb-20 pb-12 overflow-hidden tracking-wider overflow-hidden">
        <ServicesNav nav={nav} />
        <Overview image={data.heroImage.childImageSharp.fluid} />
        <WhatWeDo />
        <div className="sm:mt-12 lg:mt-20" />
        <RolesList image={data.rolesImg.childImageSharp.fluid} />
        <div className="sm:mt-16 lg:mt-20" />
        <FeaturedTeam team={team} fallbackImg={fallbackImg} />
        <BlogSlider image={data.sliderImg.childImageSharp.fluid} blueText />
        <Testimonials image={data.sliderImg.childImageSharp.fluid} />
      </div>
    </Layout>
  );
};

export default Systemutvikling;
