import React from 'react';
import { CookieNotice } from 'gatsby-cookie-notice';
import * as styles from './cookie.module.css';
const CookieNoticeWrapper = () => {
  return (
    <>
      <CookieNotice
        personalizeButtonText="Tilpass samtykke"
        acceptButtonText="Jeg samtykker"
        personalizeValidationText="Lagre samtykke"
        declineButton={false}
        cookies={[
          {
            name: 'neccessary',
            editable: false,
            default: true,
            title: 'Nødvendige cookies',
            text:
              'Cookies helt nødvendig for at siden skal fungere som den skal',
          },
          {
            name: 'gatsby-gdpr-google-analytics',
            editable: true,
            default: true,
            title: 'Google Analytics',
            text:
              'Vi bruker Google Analytics til å forbedre og utvikle Alv sine hjemmesider og markedsføring.',
          },
          {
            name: 'gatsby-gdpr-google-tagmanager',
            editable: true,
            default: true,
            title: 'Google TagManager',
            text:
              'Vi bruker Google Tags til å forbedre og utvikle Alv sine hjemmesider og markedsføring.',
          },
          {
            name: 'gatsby-gdpr-facebook-pixel',
            editable: true,
            default: true,
            title: 'Facebook',
            text:
              'Vi bruker Facebook Pixel til å forbedre brukeropplevelsen av Alv sin markedsføring.',
          },
          {
            name: 'gatsby-gdpr-linked-in',
            editable: true,
            default: true,
            title: 'Linkedin',
            text:
              'Vi bruker LinkedIn til å forbedre brukeropplevelsen av Alv sin markedsføring.',
          },
        ]}
        backgroundClasses="md:flex justify-between w-full shrink-0 sm:block"
        wrapperClasses="text-white flex flex-col-reverse items-center sm:py-4"
        backgroundWrapperClasses={
          styles.backgroundWrapper +
          ' bottom-0 fixed w-full px-20 -mb-8px py-8 z-50 border-t-4 border-theme-accent flex '
        }
        acceptButtonClasses="rounded-full border-2 border-white p-4 uppercase text-lg px-8 my-2 hover:border-theme-accent"
        cookieTitleClasses="text-xl text-white ml-4"
        cookieMapClasses={`${styles.cookieWrapper} cookie-wrapper text-white text-footer sm:text-md my-2 text-md`}
        personalizeValidationWrapperClasses="text-white rounded-full border-2 border-white p-4 uppercase text-lg my-2 hover:border-theme-accent w-max sm:float-right"
      >
        <div>
          <h4 class="consent-header text-4xl mt-4 text-white uppercase">
            Denne siden bruker cookies
          </h4>
          <p class="text-footer sm:text-xl text-white sm:py-4">
            Vi bruker cookies for å forbedre din opplevelse av nettsiden
          </p>
        </div>
      </CookieNotice>
    </>
  );
};

export default CookieNoticeWrapper;
