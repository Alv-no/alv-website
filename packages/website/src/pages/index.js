import React from 'react';
import Layout from '../components/layout';
import { Hero } from '../components/hero';
import { Subtitle } from '../components/title';
import { BlogSlider } from '../components/blogSlider';
import { CtaButton } from '../components/ctaButton';
import * as Button from '../components/button';
import BackgroundImage from 'gatsby-background-image-es5';
import { useIndexQuery } from '../hooks/useIndexQuery';
import video from '../assets/heroVideo.webm';

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
                src={video}
                title="Introduksjon"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
              />
              <h2 className="uppercase absolute top-0 right-0 text-slider font-semibold tracking-wider text-white w-4/12 transform translate-x-20 leading-tight -mr-40 mt-40">
                Sed ut perspici atis unde omnis iste natus.
              </h2>
            </div>
          </div>
          <div
            className="px-12 grid text-white mt-20 tracking-wider gap-x-10 max-w-1440 mx-auto"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            <div className="flex justify-end w-full">
              <div>
                <h4 className="uppercase font-semibold text-about mt-2">
                  Hvem er vi
                </h4>
                <div className="w-10 h-2px bg-yellow mt-2" />
              </div>
            </div>
            <div>
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
              <Button.CtaArrow>Les mer</Button.CtaArrow>
            </div>
          </div>
        </div>
        {/* CTA STARTS HERE */}
        <div className="bg-navy w-full pt-15 pb-5 text-white">
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
                  <h2 className="uppercase text-slider mb-8 font-semibold tracking-wider text-white ">
                    Sed ut perspici atis unde omnis iste natus.
                  </h2>
                  <p className="text-xl tracking-wider mb-12 font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                  <div className="w-full flex justify-end">
                    <div className="-mr-40">
                      <CtaButton>Hyr en alv</CtaButton>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
        {/* SERVICES STARTS HERE */}

        <div
          className="max-w-1440 mx-auto grid gap-x-10 pt-10 bg-navy text-white"
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
          className="max-w-1440 mx-auto grid gap-x-10 pb-20 bg-navy text-white"
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
                fluid={data.services.childImageSharp.fluid}
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
        {/* CTA2 STARTS HERE */}
        <div className="bg-navy w-full pt-24 pb-20">
          <div
            className="max-w-1440 mx-auto text-white pl-12 grid tracking-wider"
            style={{ gridTemplateColumns: '60% auto' }}
          >
            <div className="pr-20 w-5/6">
              <h2 className="text-5xl font-light mb-7 uppercase">
                Bli en av oss
              </h2>
              <p className="mb-4 pr-15 w-full font-light text-xl mb-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="w-full flex justify-end">
                <div className="mb-20">
                  <CtaButton>Hyr en alv</CtaButton>
                </div>
              </div>
              <div className="h-10 relative" />
              <div
                className="absolute tracking-wider leading-tight inset-x-0 text-white text-3xl font-semibold w-3/12 text-right z-40 uppercase"
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
          <div className="max-w-1440 mx-auto">
            <div className="px-12 -mb-7">
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
        <div className="bg-darkblue bg-opacity-50 w-full text-white tracking-wider py-20 mt-15">
          <div
            className="max-w-1440 mx-auto px-12 grid gap-x-25"
            style={{ gridTemplateColumns: '30% auto' }}
          >
            <div className="">
              <h3 className="text-about-xl font-light mb-10 uppercase">
                Eid av våre ansatte
              </h3>
              <p className="font-light text-xl">
                Alv AS is 100% owned by our employees. This means that you will
                have the opportunity to buy into the ownership side of the
                company when you are hired.
              </p>
            </div>
            <div className="flex h-full items-center">
              <div className="w-64 h-64 bg-black rounded-full mr-15">
                {/* Image */}
              </div>
              <div className="flex">
                <div className="tracking-wider border-r-2 pr-6">
                  <div className="text-slider font-semibold mb-10">50%</div>
                  <div className="text-slider font-semibold mb-10">25%</div>
                  <div className="text-slider font-semibold">25%</div>
                </div>
                <div className="text-lg font-light tracking-wider w-64 pl-6">
                  <p className="mb-9 leading-snug">
                    <span className="font-semibold">Reinvestert</span> tilbake i
                    selskapet
                  </p>
                  <p className="mb-9 leading-snug">
                    <span className="font-semibold">Fordelt</span> utover
                    ansatte i form av bonus
                  </p>
                  <p className="leading-snug">
                    <span className="font-semibold">Tilgjengelig</span> som
                    utbytte for eiere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
