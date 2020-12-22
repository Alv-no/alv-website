import React from 'react';
import Layout from '../components/layout';
import { useSubServiceQuery } from '../hooks/useSubServiceQuery';
import { ServiceNavList } from '../components/serviceNavList';
import { RolesList } from '../components/rolesList';
import { NavyIntroImage } from '../components/navyIntroImage';
import { BlogSlider } from '../components/blogSlider';
import { FeaturedTeam } from '../components/featuredTeam';
import { Testimonials } from '../components/testimonials';
import { CtaSection } from '../components/ctaSection';

const Systemutvikling = () => {
  const data = useSubServiceQuery();
  const employees = data.allSanityEmployee.edges.map((el) => el.node);
  const team = employees.slice(0, 4);
  console.log(data);

  const nav = ['Oversikt', 'Hva Gjør Vi', 'Vårt Team', 'Blogg', 'Kundeomtaler'];
  return (
    <Layout>
      <NavyIntroImage
        title="C# Utvikler"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
        buttonText="Request a QUOTE"
        link="/kontakt-oss"
        image={data.cUtvikler.childImageSharp.fluid}
      />
      <div className="w-full bg-white sm:pb-20 pb-4 overflow-hidden tracking-wider">
        <ServiceNavList nav={nav} />
        <RolesList image={data.rolesImg.childImageSharp.fluid} />
        <CtaSection
          eyebrow="At vero eos et accusamus et iusto"
          heading="Excepteur sint occaeuiecat cupidatat."
          buttonText="Meld deg på"
        />
        <FeaturedTeam team={team} />
        <BlogSlider image={data.sliderImg.childImageSharp.fluid} />
        <Testimonials image={data.sliderImg.childImageSharp.fluid} />
      </div>
    </Layout>
  );
};

export default Systemutvikling;
