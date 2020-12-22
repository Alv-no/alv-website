import React from 'react';
import Layout from '../components/layout';
import { ImageTextShifted } from '../components/imageTextOverlap';
import { ImageTextListHero } from '../components/imageTextHero';
import { useWorkQuery } from '../hooks/useWorkQuery';
import Image from 'gatsby-image';

const WorkForAlv = () => {
  const data = useWorkQuery();
  return (
    <Layout>
      <ImageTextListHero image={data.stairs.childImageSharp.fluid} />
      <div className="bg-white w-full py-18 tracking-wider relative">
        <div
          className="max-w-1440 mx-auto grid"
          style={{ gridTemplateColumns: '65% auto' }}
        >
          <div className="px-30">
            <h3 className="uppercase text-4xl leading-snug font-semibold w-100">
              10 Gode grunner til å jobbe i Alv
            </h3>
            <div className="pl-32 pr-18">
              <div className="flex mt-10">
                <div className="text-4xl mr-5 text-white py-0 flex items-center px-12 bg-navy">
                  1
                </div>
                <h4 className="uppercase text-2xl font-semibold w-100">
                  10 Gode grunner til å jobbe i Alv
                </h4>
              </div>
              <p className="font-light mt-12">
                I Alv har du som medarbeider direkte innflytelse på den kulturen
                vi bygger og du kan dermed skape din egen drømmearbeidsplass.
                Alv skal være et sted medarbeidere ønsker å jobbe lenge. Det er
                en arbeidsplass hvor man utfordres og utvikles, og samtidig et
                sted hvor vi har det morsomt på veien. Vi bygger en kultur i Alv
                på verdiene våre om ærlighet, råskap og engasjement.
              </p>
            </div>
          </div>
          <Image fluid={data.street.childImageSharp.fluid} />
        </div>
      </div>
      <ImageTextShifted image={data.interview.childImageSharp.fluid} />
    </Layout>
  );
};

export default WorkForAlv;
