import React from 'react';
import Layout from '../layout';
import { Hero } from '../components/hero';
import { WhoWeAre } from '../components/whoWeAre';
import { OwnedByStaff } from '../components/ownedByStaff';
import { OurServices } from '../components/ourServices';
import { Hire, HireAlt } from '../components/hire';
import { BlogSlider } from '../components/blogSlider';
import { VideoIntro } from '../components/videoIntro';
import { graphql } from 'gatsby';

const Index = ({ data, location }) => {
  const linesAndClasses = [
    { line: 'Vi bygger', classes: '' },
    { line: 'Norges mest attraktive', classes: 'font-black' },
    { line: 'konsulentselskap', classes: '', dot: true },
  ];

  const pageTitle = data.sanityLandingPage.pageTitle || false;
  const pageDescription = data.sanityLandingPage.pageDescription || false;

  return (
    <div className="overflow-hidden">
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <Hero
          linesAndClasses={linesAndClasses}
          delay={90}
          videoMp4={data.video.heroVideoMp4.asset.url}
          videoWebm={data.video.heroVideoWebm.asset.url}
          routeUpdate={location.action}
        />
        <div className="">
          <div className="bg-navy">
            <div className="bg-navy w-full pb-15 sm:pt-0 pt-10">
              <VideoIntro
                videoMp4={data.video.videoMp4.asset.url}
                videoWebm={data.video.videoWebm.asset.url}
              >
                FØLG OSS GJENNOM VÅR UKENTLIGE VIDEOSERIE
              </VideoIntro>
              <WhoWeAre title="Hvem er vi">
                {' '}
                <p className="text-footer sm:text-xl tracking-wider mb-8 font-extralight">
                  Alv er produktet av alle konsulentene som jobber i selskapet.
                  Dyktige konsulenter gjør Alv til et bra produkt. En dyktig
                  konsulent er en konsulent som er mer en bare faglig sterk.
                </p>
                <p className="text-footer sm:text-xl tracking-wider mb-8 font-extralight">
                  I Alv har vi tro på at dyktige konsulenter er de som hele
                  tiden ønsker å utvikle seg selv, og de rundt seg. Dette er
                  grunnpilarene for hvordan vi bygger Alv. Følg gjerne
                  videoserien vår for å få et bedre innblikk i hvordan vi bygger
                  Alv som selskap.
                </p>
              </WhoWeAre>
            </div>
            <Hire data={data} />
            <div className="bg-navy h-10 lg:h-32" />
            <OurServices image={data.services.childImageSharp.gatsbyImageData}>
              Kjernen i det vi driver med og kan er koding, men for å skape gode
              løsninger av kode, trengs det også en rekke støttefunksjoner.
            </OurServices>
            <div className="lg:h-40  h-5" />
            <HireAlt data={data} />
            <BlogSlider />
            <OwnedByStaff>
              Alv AS er 100% eid av våre ansatte. Det betyr at du vil få
              mulighet til å kjøpe deg inn på eiersiden av selskapet når du blir
              ansatt.
            </OwnedByStaff>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Index;

export const query = graphql`{
  sanityLandingPage {
    pageDescription
    pageTitle
  }
  video: sanityLandingPage(videoMp4: {asset: {url: {ne: ""}}}) {
    id
    pageTitle
    videoMp4 {
      asset {
        url
      }
    }
    heroVideoWebm {
      asset {
        url
      }
    }
    heroVideoMp4 {
      asset {
        url
      }
    }
    videoWebm {
      asset {
        url
      }
    }
    videoMp4 {
      asset {
        url
      }
    }
  }
  stairs: file(name: {eq: "stairs"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  street: file(name: {eq: "street"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  services: file(name: {eq: "vitilbyr_header"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  cta: file(name: {eq: "Alv_fredag"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  sliderImg: file(name: {eq: "systemutvikling_img"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  interview: file(name: {eq: "interview"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`;
