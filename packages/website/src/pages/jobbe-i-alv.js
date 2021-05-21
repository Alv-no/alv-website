import React from 'react';
import Layout from '../layout';
import { ImageTextListHero } from '../components/imageTextHero';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useWorkQuery } from '../hooks/useWorkQuery';
import image1 from '../assets/forstegangsintervju.jpg';
import { Title } from '../components/title';
import { Subtitle } from '../components/subtitle';

const WorkForAlv = () => {
  const data = useWorkQuery();
  const {
    sanityCareerPage: { pageDescription } = { pageDescription: false },
    sanityCareerPage: { pageTitle } = { pageTitle: false },
    sanityCareerPage: { reasonsCarousel } = { reasonsCarousel: false },
  } = data;
  const linkStyle = { textDecoration: 'underline' };
  const paragraphStyle = { marginTop: 12, marginBottom: 12 };
  const imageSize = { width: 600 };

  return (
    <>
      <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
        <div className="overflow-hidden">
          <ImageTextListHero
            image={data.stairs.childImageSharp.fluid}
            openPositions={data.allSanityOpenPostionPage.nodes}
          />
        </div>
        <div className="py-15 twelve:py-25">
          {reasonsCarousel && (
            <ReasonsSlider
              image={data.street.childImageSharp.fluid}
              mainHeading={reasonsCarousel.mainHeading}
              slides={reasonsCarousel.process}
            />
          )}
        </div>
        <div className="bg-white text-navy px-5 sm:px-12 lg:px-0 sm:-mt-20 -mt-5 overflow-hidden max-w-1200 mx-auto w-full">
          <div className="tracking-wider sm:pb-15">
            <div
              className="max-w-1200 mx-auto lg:grid gap-x-3 xl:gap-x-10 "
              style={{
                gridTemplateColumns:
                  'minmax(610px, 740px) minmax(320px, 400px)',
              }}
            >
              <div className="sm:h-auto overflow-hidden lg:mx-12">
                <div>
                  <Title color="text-black" underline={true}>
                    Intervjuprosessen i Alv AS
                  </Title>
                </div>
                <div>
                  <p style={paragraphStyle}>
                    Alv har som målsetning å bygge Norges mest attraktive
                    konsulentselskap. Rekruttering er derfor av avgjørende
                    betydning. Sluttproduktet blir aldri bedre enn kvaliteten på
                    «råvarene». Vår målsetning er at Alv skal være et selskap
                    hvor konsulenter utvikler ser raskere enn andre steder. For
                    å oppnå dette må grunnlaget, potensialet og motivasjonen i
                    høyeste grad være tilstede.
                  </p>
                  <p style={paragraphStyle}>
                    Derfor tar vi rekruttering på alvor, og vi kjører en grundig
                    prosess fra vurdering til signering.
                  </p>
                  <p style={paragraphStyle}>
                    For at du skal kunne være best mulig forberedt til en
                    eventuell intervjuprosess, forklarer vi under stegene Alv
                    har, hvilke vurderinger vi gjør og hvordan du best kan
                    forberede deg til hvert steg.
                  </p>
                  <p style={paragraphStyle}>
                    De alle fleste prosesser begynner med en søknad og en CV.
                    For oss er CVen viktigst. Som konsulentselskap, er CVen din
                    det viktigste salgsverktøyet vi har for å sikre deg et
                    spennende oppdrag hos en kunde. Konsulent-CVer er ofte litt
                    annerlede bygd opp enn en tradisjonell CV. Den er for det
                    første ofte mer detaljert og innholdsrik. Det er ikke
                    uvanlig at CVen til en seniorkonsulent er på 10 sider eller
                    mer. Grunnen til dette er at en konsulent-CV i stor grad er
                    fokusert rundt prosjektene du har gjennomført og hvilke
                    kunder du har vært hos.
                  </p>
                  <p style={paragraphStyle}>
                    Hvis du ikke har jobbet som konsulent tidligere, vil vi
                    derfor likevel anbefale deg å organisere CVen din etter
                    prosjekter. Her bør du fortelle litt om prosjektet du
                    gjennomførte, din rolle, eller roller i dette prosjektet,
                    samt noe om hvilken verdi og forskjell din deltagelse i
                    prosjektet utgjorde. Se gjerne på våre{' '}
                    <a style={linkStyle} href="https://alv.no/ansatte">
                      nettsider
                    </a>{' '}
                    for hvordan CVene til våre medarbeidere ser ut. Du finner
                    dem under «Ansatte».
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-navy px-5 sm:px-12 lg:px-0 sm:-mt-20 -mt-5 overflow-hidden max-w-1200 mx-auto w-full">
          <div className="tracking-wider sm:pb-15">
            <div
              className="max-w-1200 mx-auto lg:grid gap-x-3 xl:gap-x-10 "
              style={{
                gridTemplateColumns:
                  'minmax(610px, 740px) minmax(600px, 600px)',
              }}
            >
              <div className="pt-8 lg:ml-5 -mx-5 sm:mx-0">
                <img
                  src={image1}
                  alt="forstegangsintervju"
                  style={imageSize}
                ></img>
              </div>
              <div className="sm:h-auto overflow-hidden lg:mx-12">
                <div>
                  <Subtitle>Førstegangsintervju</Subtitle>
                </div>
                <div>
                  <p style={paragraphStyle}>
                    Førstegangsintervjuet er vår første mulighet til å bli kjent
                    med deg. Vi gjennomfører noen ganger førstegangsintervjuet
                    digitalt, men foretrekker absolutt å gjennomføre et fysisk
                    intervju hos oss.
                  </p>
                  <p style={paragraphStyle}>
                    Førsteintrykk er ikke avgjørende, men det betyr likevel mye.
                    Spesielt for konsulenter betyr førsteinntrykket mye, siden
                    det er gjennom oppdragsintervjuer hos kunder du vinner
                    oppdragene vi lever av. Vi har skrevet en bloggpost om
                    førsteinntrykk og vurderingen av ulike typer. Den kan du
                    lese{' '}
                    <a
                      style={linkStyle}
                      href="https://alv.no/blogg/forsteinntrykket-har-mer-a-si-enn-du-tror"
                    >
                      her
                    </a>
                    .
                  </p>
                  <p style={paragraphStyle}>
                    Selve førstegangsintervjuet har som hovedmål at vi skal bli
                    kjent med hverandre. Vi ønsker at du skal bli best mulig
                    kjent med Alv og vi ønsker å bli best mulig kjent med deg.
                  </p>
                  <p style={paragraphStyle}>
                    Det er alltid en fordel å forberede seg litt på forhånd. I
                    innkallingen til intervjuet sender vi ut noen linker om Alv.
                    Vi har blant annet en{' '}
                    <a style={linkStyle} href="https://alv.no/videoserie">
                      videoserie
                    </a>
                    , hvor vi dokumenterer hverdagen og utviklingen i Alv. Ved å
                    se litt på den, vil du forhåpentligvis bli litt bedre kjent
                    med oss. Vi har også skrevet bloggposter om alt fra hva Alv
                    er, hva Alv ønsker å bli, at Alv ikke er for alle, samt
                    grunner til å jobbe i Alv.
                  </p>
                  <p style={paragraphStyle}>
                    Etter en samtale om Alv og hva du ønsker å høre mer om, går
                    vi ganske raskt over til din bakgrunn, og ønsker at du med
                    egne ord skal ta oss gjennom din CV. Dette utvikler seg
                    raskt til en samtale. Selve faktaene står jo i Cven, så det
                    har vi allerede lest. Derfor er vi mer interessert i dine
                    tanker rundt det du har gjort. Hvorfor gjorde du valgene du
                    gjorde? Hvilken verdi ga du i de ulike prosjektene? Hvorfor
                    valgte du å begynne på nettopp det studiet, eller bytte til
                    den jobben?
                  </p>
                  <p style={paragraphStyle}>
                    Mens bakgrunnen er viktig for å skjønne din kompetanse og
                    erfaring, ønsker vi også å høre om hvilke tanker, mål,
                    forventninger og ønsker du har for fremtiden. Hvorfor Alv?
                    Hvordan ønsker du å utvikle deg? Hva er det du brenner for?
                  </p>
                  <p style={paragraphStyle}>
                    I Alv er vi også opptatte av å bli bedre kjent med deg som
                    menneske. Hvem er du utenom jobb? Har du familie? Hva liker
                    du å gjøre på fritiden?
                  </p>
                  <p style={paragraphStyle}>
                    I løpet av førstegangsintervjet kommer vi også til å spørre
                    deg om dine lønnsforventninger. Det er ikke meningen at vi
                    skal ha en fullstendig lønnsforhandling allerede ved første
                    møte, men for oss er det viktig at vi er omforent om omtrent
                    samme nivå. Vi vet godt hva kompetanse og erfaring er verdt
                    for Alv, så hvis dine forventninger ikke stemmer overens med
                    dette, må vi finne ut bakgrunnen for gapet. Har vi
                    misforstått noe av din bakgrunn, eller har du urealistiske
                    forventninger?
                  </p>
                  <p style={paragraphStyle}>
                    Vurderingen vi gjør oss etter førstegangsintervjuet, avgjør
                    om du blir kalt inn til faglig/teknisk intervju eller ikke.
                    Vi ser etter helheten og om vi tror at du er en person som
                    er riktig for Alv. Har du en personlighet som passer inn i
                    selskapet? Har du riktig motivasjon?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ImageTextShifted image={data.interview.childImageSharp.fluid} /> */}
      </Layout>
    </>
  );
};

export default WorkForAlv;
