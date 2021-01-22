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
      <div className="">
        <Hero>
          <div>Vi bygger </div>
          <div className="font-black">Norges mest attraktive</div>
          <span>konsulentselskap</span>
        </Hero>
        <div className="bg-navy">
          <div className="bg-navy w-full py-15">
            <VideoIntro video={video}>
              FØLG OSS GJENNOM VÅR UKENTLIGE VIDEOSERIE
            </VideoIntro>
            <WhoWeAre title="Hvem er vi">
              {' '}
              <p className="text-xl tracking-wider mb-8 font-thin">
                Alv er produktet av alle konsulentene som jobber i selskapet.
                Dyktige konsulenter gjør Alv til et bra produkt. En dyktig
                konsulent er en konsulent som er mer en bare faglig sterk.
              </p>
              <p className="text-xl tracking-wider mb-8 font-thin">
                I Alv har vi tro på at dyktige konsulenter er de som hele tiden
                ønsker å utvikle seg selv, og de rundt seg. Dette er
                grunnpilarene for hvordan vi bygger Alv. Følg gjerne videoserien
                vår for å få et bedre innblikk i hvordan vi bygger Alv som
                selskap.
              </p>
            </WhoWeAre>
          </div>

          <Hire data={data} />

          <div className="bg-navy h-10 lg:h-32" />

          <OurServices image={data.services.childImageSharp.fluid}>
            Alv bygges rundt systemutviklingsprosessen. Kjernen i det vi driver
            med og kan er koding, men for å skape gode løsninger av kode, trengs
            det også en rekke støttefunksjoner.
          </OurServices>
          <div className="lg:h-40  h-5" />
          <HireAlt data={data} />
          <div className="px-5 sm:px-12 -mb-10 max-w-1440 mx-auto">
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
            Alv AS er 100% eid av våre ansatte. Det betyr at du vil få mulighet
            til å kjøpe deg inn på eiersiden av selskapet når du blir ansatt.
          </OwnedByStaff>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
