import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './landingpage.module.css';
import { BlockContent, CtaButton } from 'shared-components';
import config from '../../config';
import { Offer } from 'shared-components/src/components/form';

const LandingPageHero = ({
  backgroundImage,
  callToAction,
  showCta = true,
  ctaPosition = 'right',
  introduction,
  subHeading,
  showContactForm = true,
}) => {
  return (
    <>
      <div className={styles.landingPageImageWrapper}>
        <GatsbyImage
          style={{ height: '100%', width: '100%' }}
          alt="Top title image"
          image={backgroundImage.asset.gatsbyImageData}
        />
      </div>
      <div
        className={`${styles.landingPageHeroContentWrapper} justify-center flex flex-col`}
      >
        <div className={styles.columnWrapper}>
          <div className="w-full"></div>
          <div
            className={`relative container max-w-5xl col-span-3 max-w- twelve:col-span-1 ${
              showContactForm ? '' : styles.dynamicColumn
            }`}
          >
            <div
              className={`${styles.richText} text-xl 2xs:text-2xl xs:text:2xl md:text-4xl lg:4xl text-white`}
            >
              <BlockContent blocks={introduction} config={config} whiteText />
            </div>
            <div className="font-bold">
              <BlockContent blocks={subHeading} config={config} whiteText />
            </div>

            {showCta && (
              <div
                className="relative mt-10"
                style={{ justifyContent: ctaPosition }}
              >
                <CtaButton internalLink={callToAction.link}>
                  <p class="text-lg text-right font-thin">
                    {callToAction.eyebrow}
                  </p>
                  <h2 class="text-right text-xl sm:text-2xl">
                    {callToAction.title}
                  </h2>
                </CtaButton>
              </div>
            )}
          </div>
          {showContactForm && (
            <div className={`relative hidden twelve:flex justify-end`}>
              <div
                className={`${styles.transparentBackground} text-thin border-l-4 w-fit container`}
              >
                <h4 className="text-white font-bold font-sans text-2xl my-8 w-fit">
                  KONTAKT OSS
                </h4>
                {showContactForm && <Offer compact sendButtonTransparent />}
              </div>
            </div>
          )}
          {showContactForm && (
            <div
              className={`${styles.transparentBackground} bg-white relative w-full h-full`}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPageHero;
