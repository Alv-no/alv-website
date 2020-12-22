import React from 'react';
import Layout from '../components/layout';
import { useAboutUsQuery } from '../hooks/useAboutUsQuery';
import Image from 'gatsby-image';
import { Title } from '../components/title';
import { BlogSlider } from '../components/blogSlider';
import { FeaturedTeam } from '../components/featuredTeam';

const About = () => {
  const data = useAboutUsQuery();
  const employees = data.allSanityEmployee.edges.map((el) => el.node);
  const team = employees.slice(0, 4);
  return (
    <Layout>
      <div className="w-full bg-navy text-white sm:pb-20 pb-4 overflow-hidden tracking-wider">
        <div className="w-full">
          <div
            className="max-w-1440 mx-auto grid gap-x-10 py-15"
            style={{
              gridTemplateColumns: '1fr 1fr',
            }}
          >
            <div className="w-full">
              <Image
                fluid={data.aboutUsTop.childImageSharp.fluid}
                style={{ height: '600px' }}
              />
              <div className=" ml-30 tracking-wider font-light text-xl -mt-40">
                <h2 className="text-white font-semibold uppercase text-4xl w-80 relative z-30">
                  Sed ut perspici atis unde omnis iste natusRe
                </h2>
                <p className="mb-8 mt-6 pr-15 w-full pr-20">
                  Sed ut perspici atis unde omnis iste natus Excepturi quaerat
                  sapiente et omnis cum ut praesentium.
                </p>
                <p className="uppercase font-semibold text-lg mb-7 pr-35 text-about">
                  Vår misjon
                </p>
                <p className="mb-15 pr-30">
                  Excepturi quaerat sapiente et omnis cum ut praesentium
                  doloremque. Velit quas in eum. Tenetur enim aperiam. Lorem
                  ipsum dolor sit
                </p>
              </div>
            </div>
            <div className="px-12 pr-20 font-light flex flex-col justify-between h-full text-xl">
              <div>
                <Title align="left">Om oss</Title>
                <p className="mb-8 mt-6 pr-15">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="uppercase font-semibold text-lg mb-7 pr-20 text-about">
                  Vår visjon
                </p>
                <p className="mb-15">
                  Sed ut perspici atis unde omnis iste natus Excepturi quaerat
                  sapiente et omnis cum ut praesentium doloremque. Velit quas in
                  eum. Tenetur enim aperiam. Lorem ipsum dolor sit amet.
                </p>

                <Image fluid={data.aboutUsLower.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="text-center mx-12">
              <h2 className="" style={{ fontSize: '70px' }}>
                50+
              </h2>
              <p>Ansatte</p>
            </div>
            <div className="text-center mx-12">
              <h2 className="" style={{ fontSize: '70px' }}>
                15
              </h2>
              <p>Års erfaring</p>
            </div>
            <div className="text-center mx-12">
              <h2 className="" style={{ fontSize: '70px' }}>
                1,000+
              </h2>
              <p>Kundeforhold</p>
            </div>
            <div className="text-center mx-12">
              <h2 className="" style={{ fontSize: '70px' }}>
                4
              </h2>
              <p>Kontorer</p>
            </div>
          </div>
        </div>
        <FeaturedTeam team={team} color="navy" />
        <BlogSlider image={data.sliderImg.childImageSharp.fluid} />
      </div>
    </Layout>
  );
};

export default About;
