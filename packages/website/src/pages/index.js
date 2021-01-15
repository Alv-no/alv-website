import React from 'react';
import Layout from '../components/layout';
import { Hero } from '../components/hero';
import { Subtitle } from '../components/title';
import { BlogSlider } from '../components/blogSlider';
import { WhoWeAre } from '../components/whoWeAre';
import { OwnedByStaff } from '../components/ownedByStaff';
import { OurServices } from '../components/ourServices';
import { Hire, HireAlt } from '../components/hire';
import { VideoIntro } from '../components/videoIntro';
import { useIndexQuery } from '../hooks/useIndexQuery';
import video from '../assets/heroVideo.webm';

const Index = () => {
  const data = useIndexQuery();
  return (
    <Layout>
      <div className="overflow-hidden">
        <Hero>
          <div>Vi bygger </div>
          <div className="font-black">Norges mest attraktive</div>
          <span>konsulentselskap</span>
        </Hero>
        <div className="bg-navy">
          <div className="bg-navy w-full py-15">
            <VideoIntro video={video}>
              Sed ut perspici atis unde omnis iste natus.
            </VideoIntro>
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

          <Hire data={data} />

          <div className="bg-navy h-10 lg:h-32" />

          <OurServices image={data.services.childImageSharp.fluid}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut.
          </OurServices>
          <div className="lg:h-40  h-5" />
          <HireAlt data={data} />
          <div className="px-5 sm:px-12 -mb-7 max-w-1440 mx-auto">
            <Subtitle>Hva tenker alvene?</Subtitle>
          </div>
          <div className="mt-10" />
          <BlogSlider
            image={data.sliderImg.childImageSharp.fluid}
            color="text-white"
            dot={false}
          />
          <div className="h-6" />
          <OwnedByStaff>
            Alv AS is 100% owned by our employees. This means that you will have
            the opportunity to buy into the ownership side of the company when
            you are hired.
          </OwnedByStaff>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
