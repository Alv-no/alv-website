import React from 'react';
import Layout from '../layout';
import { ImageTextListHero } from '../components/imageTextHero';
import { ReasonsSlider } from '../components/reasonsSlider';
import { useWorkQuery } from '../hookspages/useWorkQuery';

const WorkForAlv = () => {
  const { sanityCareerPage, stairs, street } = useWorkQuery();

  return (
    <>
      <Layout
        pageTitle={sanityCareerPage.pageTitle}
        pageDescription={sanityCareerPage.pageDescription}
      >
        <div className="overflow-hidden">
          <ImageTextListHero
            image={stairs.childImageSharp.gatsbyImageData}
            positionsListLeft={sanityCareerPage.positionsListLeft}
            positionsListRight={sanityCareerPage.positionsListRight}
          />
        </div>
        <div className="py-15 twelve:py-25">
          {sanityCareerPage.reasonsCarousel && (
            <ReasonsSlider
              image={street.childImageSharp.gatsbyImageData}
              mainHeading={sanityCareerPage.reasonsCarousel.mainHeading}
              slides={sanityCareerPage.reasonsCarousel.process}
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
              <div class="w-full bg-white tracking-wider z-10 relative">
                <div class="px-5 sm:px-12 relative z-10" id="oversikt">
                  <div class="max-w-1200 mx-auto pt-10 sm:pt-16 w-full tracking-wider relative z-0">
                    <nav class="mx-auto sm:grid sm:gap-x-4 sm:grid-cols-navlist-sm">
                      <ul class="text-lg sm:mt-3 -mt-2 list-style-none text-navynav opacity-80 tracking-wider sm:block flex">
                        <a
                          href="#overskrift1"
                          aria-label="Scroll Link"
                          class="mb-7 block sm:mr-0 mr-4"
                          name="oversikt"
                        >
                          Oversikt
                        </a>
                        <a
                          href="#oversrkift2"
                          aria-label="Scroll Link"
                          class="mb-7 block sm:mr-0 mr-4"
                          name="hva-gjor-vi"
                        >
                          Hva Gjør Vi
                        </a>
                      </ul>
                      <div class="font-light block sm:mb-15 sm:h-auto -mb-10 relative overflow-hidden sm:overflow-visible">
                        <div class="cursor-text text-left z-20 relative">
                          <div class="z-50 relative sm:block twelve:hidden mb-10 hidden"></div>
                          <div class="mb-10">
                            <h2 class="w-full tracking-wider uppercase text-blog sm:text-4xl font-bold text-left sm:text-index text-navy text-blog">
                              <span class="">Javakonsulent i Alv</span>
                            </h2>
                            <div class="w-12 h-3px bg-yellow mt-6px"></div>
                          </div>
                          <span class="Blockcontent-module--body--2iCJD">
                            <div>
                              <p>
                                Java plattformen blir ofte brukt i viktige
                                prosjekter for å implementere forretningslogikk
                                og integrasjoner mellom andre systemer. Det
                                finnes mange gode rammeverk i Java for
                                mellomvare og backend systemer. Eksempler på det
                                er Spring for å lage fleksible webapplikasjoner
                                med REST grensesnitt, eller eller Apache Kafka
                                for å lage hendelsesstyrte systemer. Java har
                                god støtte for de nyeste sikkerhetsmekanismene
                                som Oauth 2 og OpenId.
                              </p>
                              <p>
                                <strong>Autonome team</strong>
                              </p>
                              <p>
                                Våre javakonsulenter er vant med å jobbe i
                                selvgående team. Dette betyr at teamene kan løse
                                alle oppgaver som skal til for å videreutvikle
                                produkter uten ekstern innblanding.
                                Autonomiteten gjør at man kan understøtte
                                forretningssidens ønsker om å lage forutsigbare
                                og gode løsninger raskt og smidig. For å lykkes
                                med dette er det viktig med tilgjengelige
                                ressurser fra forretnings om kan understøtte
                                teamet etter behov.
                              </p>
                              <p>
                                <strong>Fullstack</strong>
                              </p>
                              <p>
                                Javakonsulentene våre jobber ofte som
                                fullstackutviklere, og har erfaring med både
                                frontend teknologier, som React, Vue,
                                Typescript, Node.js og backend som Docker,
                                Openshift, Kybernetes, Kotlin, Spring,
                                Hibernate, Groovy etc. Ved å ha god kunnskap om
                                or erfaring med teknologier for frontenend,
                                backend og devops er våre konsulenter godt
                                rustet for fremtidens oppdrag.
                              </p>
                              <p>
                                <strong>Fremoverlent</strong>
                              </p>
                              <p>
                                Utviklerne er gode til å finne løsninger på nye
                                og utfordrende problemstillinger, og er flinke
                                til å samarbeide med andre mennesker i andre
                                roller, som for eksempel designere,
                                funksjonelle, kunder og produkteier. Det gjennom
                                god kommunikasjon og samarbeid at de gode
                                løsningene blir laget.
                              </p>
                              <p></p>
                            </div>
                          </span>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default WorkForAlv;
