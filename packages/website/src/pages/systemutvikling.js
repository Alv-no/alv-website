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
  const team = employees.slice(0, 4);
  const nav = ['Oversikt', 'Hva Gjør Vi', 'Vårt Team', 'Blogg', 'Kundeomtaler'];
  return (
    <Layout>
      <NavyIntro
        title="Systemutvikling"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        button=""
      />
      <div className="w-full bg-white sm:pb-20 pb-4 overflow-hidden tracking-wider">
        <ServicesNav nav={nav} />
        <Overview image={data.heroImage.childImageSharp.fluid} />
        <WhatWeDo />
        <RolesList image={data.rolesImg.childImageSharp.fluid} />
        <FeaturedTeam team={team} />
        <BlogSlider image={data.sliderImg.childImageSharp.fluid} />
        <Testimonials image={data.sliderImg.childImageSharp.fluid} />
      </div>
    </Layout>
  );
};

export default Systemutvikling;
