import React from 'react';
import Layout from '../components/layout';
import { Hero } from '../components/hero';
import { Subtitle } from '../components/title';
import { BlogSlider } from '../components/blogSlider';
import { CtaButton } from '../components/ctaButton';
import { WhoWeAre } from '../components/whoWeAre';
import { OwnedByStaff } from '../components/ownedByStaff';
import { OurServices } from '../components/ourServices';
import BackgroundImage from 'gatsby-background-image-es5';
import { useIndexQuery } from '../hooks/useIndexQuery';
import video from '../assets/heroVideo.webm';
import Fade from 'react-reveal/Fade';

const Index = () => {
  const data = useIndexQuery();
  return (
    <Layout>
      <Hero>
        <div>Vi bygger </div>
        <div className="font-black">Norges mest attraktive</div>
        <span>konsulentselskap</span>
      </Hero>
      <div className="bg-navy">
        <div className="bg-navy w-full py-15">
          <div
            className="pr-12 grid mx-auto max-w-1440"
            style={{ gridTemplateColumns: '70% auto' }}
          >
            <div style={{ height: '550px' }} className="relative">
              <iframe
                className="w-full h-full"
                src={`${video}?controls=0`}
                title="Introduksjon"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
                controls="0"
                volume="0"
                autoplay="true"
              />
              <Fade>
                <h2 className="uppercase absolute top-0 right-0 text-slider font-semibold tracking-wider text-white w-4/12 transform translate-x-20 leading-tight -mr-40 mt-40">
                  Sed ut perspici atis unde omnis iste natus.
                </h2>
              </Fade>
            </div>
          </div>
          <WhoWeAre title="Hvem er vi">
            {' '}
            <p className="text-xl tracking-wider mb-8 font-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <p className="text-xl tracking-wider mb-8 font-thin">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum.
            </p>
          </WhoWeAre>
        </div>
        {/* CTA STARTS HERE */}
        <div className="bg-navy w-full 2xl:pt-15 pb-5 text-white">
          <div
            className="pr-12 grid max-w-1440 mx-auto"
            style={{ gridTemplateColumns: '50% auto' }}
          >
            <BackgroundImage fluid={data.interview.childImageSharp.fluid}>
              <div
                className="flex justify-end items-center bg-black bg-opacity-25"
                style={{ height: '715px' }}
              >
                <div className="-mr-64 w-6/12">
                  <Fade>
                    <h2 className="uppercase text-slider mb-8 font-semibold tracking-wider text-white ">
                      Sed ut perspici atis unde omnis iste natus.
                    </h2>
                    <p className="text-xl tracking-wider mb-12 font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut.
                    </p>
                    <div className="w-full flex justify-end">
                      <div className="-mr-40">
                        <CtaButton>Hyr en alv</CtaButton>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
        <div className="bg-navy h-32" />
        {/* SERVICES STARTS HERE */}
        <OurServices image={data.services.childImageSharp.fluid}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </OurServices>
        {/* CTA2 STARTS HERE */}
        <div className="bg-navy w-full pt-24 pb-20">
          <div
            className="max-w-1440 mx-auto text-white pl-12 grid tracking-wider"
            style={{ gridTemplateColumns: '60% auto' }}
          >
            <div className="pr-20 w-5/6">
              <Fade>
                <h2 className="text-5xl font-light mb-7 uppercase">
                  Bli en av oss
                </h2>
                <p className="mb-4 pr-15 w-full font-light text-xl mb-15">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </Fade>
              <div className="w-full flex justify-end">
                <div className="mb-20">
                  <Fade>
                    <CtaButton>Hyr en alv</CtaButton>
                  </Fade>
                </div>
              </div>
              <div className="h-10 relative" />
              <div
                className="absolute tracking-wider leading-tight inset-x-0 text-white text-3xl font-semibold w-7/12 lg:w-5/12 2xl:w-3/12 text-right z-40 uppercase"
                style={{ left: '42%', right: '50%' }}
              >
                Ut enim ad minima veniam, quis nostrum exerciE tationem ullam
              </div>
            </div>
            <BackgroundImage fluid={data.cta.childImageSharp.fluid}>
              <div
                className="bg-navy bg-opacity-25"
                style={{ height: '715px' }}
              ></div>
            </BackgroundImage>
          </div>
        </div>
        {/* BLOGG SLIDER STARTS HERE */}
        <div className="w-full bg-navy">
          <div className="">
            <div className="mx-12 -mb-7 max-w-1440 mx-auto">
              <Subtitle>Hva tenker alvene?</Subtitle>
            </div>
            <BlogSlider
              image={data.sliderImg.childImageSharp.fluid}
              color="text-white"
              dot={false}
            />
          </div>
        </div>
        {/* OWNED BY STAFF SECTION */}
        <OwnedByStaff>
          Alv AS is 100% owned by our employees. This means that you will have
          the opportunity to buy into the ownership side of the company when you
          are hired.
        </OwnedByStaff>
      </div>
    </Layout>
  );
};

export default Index;
