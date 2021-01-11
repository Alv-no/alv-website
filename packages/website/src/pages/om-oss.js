import React from 'react';
import Layout from '../components/layout';
import { useAboutUsQuery } from '../hooks/useAboutUsQuery';
import Image from 'gatsby-image';
import { Title, Subtitle } from '../components/title';
import { BlogSlider } from '../components/blogSlider';
import BackgroundImage from 'gatsby-background-image-es5';
import * as Button from '../components/button';
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
                style={{ height: '600px', width: '100%' }}
              />
              <div className=" ml-30 tracking-wider font-light text-xl -mt-40">
                <h2 className="text-white font-semibold uppercase text-4xl w-80 relative z-30">
                  Sed ut perspici atis unde omnis iste natusRe
                </h2>
                <p className="mb-8 mt-6 pr-15 w-full pr-10">
                  Sed ut perspici atis unde omnis iste natus Excepturi quaerat
                  sapiente et omnis cum ut praesentium.
                </p>
                <p className="uppercase font-semibold text-lg mb-7 pr-35 text-about">
                  Vår misjon
                </p>
                <p className="mb-15 pr-10">
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
        <div
          className="max-w-1440 mx-auto grid gap-x-10 pt-20"
          style={{
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div className="w-full"></div>
          <div className="font-light flex flex-col justify-between h-full text-xl">
            <div>
              <Subtitle>Våre tjenester</Subtitle>
              <p className="mb-4 mt-4 pr-15 w-full pr-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <Button.CtaArrow>Les mer</Button.CtaArrow>
              <div className="h-12" />
            </div>
          </div>
        </div>
        <div
          className="max-w-1440 mx-auto grid gap-x-10 pb-15"
          style={{
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div className="w-full pl-12">
            <ul>
              <li className="text-nav tracking-wider font-semibold mb-8">
                <p className="uppercase">Systemutvikling</p>
                <div className="w-12 mt-2 mb-12 h-2px bg-yellow" />
                <div className="pl-10 mb-15">
                  <p className="tracking-wider text-lg leading-snug font-thin mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incidunt.
                  </p>
                  <div className="flex -mr-24 z-40 relative items-center cursor-pointer">
                    <p className="font-semibold tracking-wider uppercase text-base w-54">
                      Find out more
                    </p>
                    <div className="h-2px bg-white w-full" />
                  </div>
                </div>
              </li>
              <li className="uppercase text-nav tracking-wider font-semibold mb-8">
                Prosjektledelse
              </li>
              <li className="uppercase text-nav tracking-wider font-semibold mb-8">
                Digitalisering
              </li>
              <li className="uppercase text-nav tracking-wider font-semibold mb-8">
                Data & Analyse
              </li>
              <li className="uppercase text-nav tracking-wider font-semibold mb-8">
                Informasjonssikkerhet
              </li>
            </ul>
          </div>
          <div className="font-light flex flex-col justify-between h-full text-xl">
            <div>
              <BackgroundImage
                fluid={data.aboutUsTop.childImageSharp.fluid}
                style={{ height: '530px' }}
              >
                <div
                  className="flex justify-end items-center p-16 bg-black bg-opacity-50"
                  style={{ height: '530px' }}
                >
                  <div className="text-slider uppercase font-semibold tracking-wider leading-tighter w-5/6 text-right">
                    Quis autem vel eum iure reprehende
                  </div>
                </div>
              </BackgroundImage>
            </div>
          </div>
        </div>
        <div className="px-12 "></div>
        <div className="max-w-1440 mx-auto px-12 -mb-10 mt-12">
          <Subtitle>Ansatte</Subtitle>
        </div>
        <FeaturedTeam notitle team={team} color="navy" />
        <div className="mx-auto max-w-1440">
          <div className="-mb-7">
            <Subtitle>Hva tenker alvene?</Subtitle>
          </div>
          <BlogSlider
            image={data.sliderImg.childImageSharp.fluid}
            color="text-white"
            dot={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
