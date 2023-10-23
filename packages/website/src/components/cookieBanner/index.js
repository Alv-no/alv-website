import React, { useState, useEffect } from "react";
import {
  shouldShowCookieBanner,
  enableCookies,
  dismissCookies,
} from "~plugins/alv-gdpr-tracking";

const CookieBanner = () => {



  const [showBanner, setShowBanner] = useState(false);
  const handleAcceptCookies = () => {
    setShowBanner(false);
    enableCookies();
  };

  useEffect(() => {
    setShowBanner(shouldShowCookieBanner());
  }, []);

  const handleDeclineCookies = () => {
    setShowBanner(false);
    dismissCookies();
  };

  return (
    <div className={`fixed bottom-0 left-0 bg-navy text-white z-[50000000] w-screen border-t-solid border-t-4 p-6 sm:w-2/3 sm:max-w-[400px] sm:left-4 sm:bottom-4 sm:border-solid sm:border-2 sm:rounded-xl ${showBanner ? 'block' : 'hidden'}`}>
        <h3 className="text-center font-bold">
          Denne nettsiden benytter cookies
        </h3>
        <p className="text-center font-light mt-4 text-sm">
          Vi bruker informasjonskapsler for å gi deg en best mulig opplevelse
          av alv.no, du kan lese mer om det i{" "}
          <a
            className="underline"
            href="https://alv.no/om-oss/personvernerklaering/"
          >
            personvernerklæringen vår.
          </a>
        </p>
        <div className="flex mt-4 justify-evenly">
          <button onClick={handleDeclineCookies} className="px-5 py-2">
            Ikke tillat
          </button>
          <button
            onClick={handleAcceptCookies}
            className="px-6 py-2 border border-solid rounded-xl border-1 border-yellow hover:border-white hover:bg-lightblue"
          >
            Tillat alle
          </button>
        </div>
      </div>);

};

export default CookieBanner;
