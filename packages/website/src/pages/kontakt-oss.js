import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { generatePlausibleClass, Title, Description } from "shared-components";
import { FormSelect } from "../../../shared-components/src/components/button";
import { Phone, Mail } from "../../../shared-components/src/components/icon";
import { useContactQuery } from "../hookspages/useContactQuery";
import * as Form from "../../../shared-components/src/components/form";
import { useLayoutQuery } from "../hooks/useLayoutQuery";
import {
  PLAUSIBLE_CONTACT_EMAIL,
  PLAUSIBLE_CONTACT_PAGE_LINK,
  PLAUSIBLE_CONTACT_PHONE,
} from "../plausible/plausible-events";

const Contact = ({ location }) => {
  const [active, setActive] = useState("offer");
  const layoutData = useLayoutQuery();
  const formChange = (e) => {
    setActive(e.target.id);
    document.querySelector("form").scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  };

  const { address, phone, image, email, org, pageTitle, pageDescription } =
    useContactQuery();
  return (
    <Layout
      layoutData={layoutData}
      whiteIcons
      path={location.pathname}
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <div className="bg-navy xl:pt-5">
        <div
          className="bg-navy w-full -mt-16 lg:mt-8 text-white max-w-1440 mx-auto xl:grid xl:pb-20"
          style={{ gridTemplateColumns: "50% 50%" }}
        >
          <div className="flex-1 mt-6 sm:px-10 xl:block sm:grid grid-cols-fifty sm:-ml-12 xl:ml-0">
            <div>
              <div className="opacity-60 w-full xl:h-full h-40vh mt-8 xl:mt-0">
                <GatsbyImage image={image} className="h-full" alt="kontakt" />
              </div>
            </div>
            <div className="2xl:ml-15 ml-5 sm:mt-8 xl:mt-0">
              <div className="z-20 relative -mt-15 sm:w-100 sm:mt-5 xl:-mt-15 sm:-ml-20 xl:ml-0">
                <Title align="text-left sm:text-cta-lg">Kontakt Oss</Title>
                <div className="sm:h-6 h-6" />
                <span className="">
                  <Description align="left">
                    Vi holder til i helt nye lokaler i {address}. Ta gjerne
                    turen innom for en hyggelig prat, eller kontakt oss
                  </Description>
                </span>
              </div>
              <div className="text-white tracking-wider 2xl:ml-30 mt-12 text-lg xl:mb-15">
                <FormSelect id="offer" onClick={formChange} active={active}>
                  Send oss en e-post
                </FormSelect>
                <FormSelect id="call" onClick={formChange} active={active}>
                  Ring meg tilbake
                </FormSelect>
                <FormSelect id="visit" onClick={formChange} active={active}>
                  Besøk
                </FormSelect>
              </div>
              <div className="hidden xl:block">
                <div className="text-lg tracking-wider 2xl:ml-30 mb-20">
                  <div className="mb-3">
                    <PhoneLink phone={phone} />
                  </div>
                  <div className="mb-3">
                    <MailLink email={email} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-25 xl:hidden h-40 flex items-center">
            <div>
              <div className="text-lg tracking-wider">
                <div className="mb-3">
                  <PhoneLink phone={phone} />
                </div>
                <div className="mb-3">
                  <MailLink email={email} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 p-5 sm:p-12 lg:mx-0 lg:pb-15 tracking-wider bg-lightblue">
            {active === "offer" && (
              <Form.Offer trackingEventName={PLAUSIBLE_CONTACT_EMAIL} />
            )}
            {active === "call" && (
              <Form.Call trackingEventName={PLAUSIBLE_CONTACT_PHONE} />
            )}
            {active === "visit" && <Form.Visit address={address} org={org} />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const PhoneLink = ({ phone }) => {
  return (
    <a
      href={"tel:" + phone}
      className={
        "flex" +
        generatePlausibleClass(PLAUSIBLE_CONTACT_PAGE_LINK, {
          key: "type",
          value: "phone",
        })
      }
    >
      <span className="mr-3">
        <Phone />
      </span>{" "}
      {phone}
    </a>
  );
};

const MailLink = ({ email }) => {
  return (
    <a
      href={"mailto:" + email}
      className={
        "flex items-center" +
        generatePlausibleClass(PLAUSIBLE_CONTACT_PAGE_LINK, {
          key: "type",
          value: "mail",
        })
      }
    >
      <span className="mr-3">
        <Mail />
      </span>{" "}
      {email}
    </a>
  );
};

export default Contact;
