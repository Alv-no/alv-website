// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import aboutPage from "./aboutPage";
import article from "./article";
import articleTag from "./articleTag";
import blockContent from "./blockContent";
import blogCarousel from "./blogCarousel";
import blogPage from "./blogPage";
import formCta from "./formCta";
import brands from "./brands";
import careerPage from "./careerPage";
import categoryPage from "./categoryPage";
import linkList from "./linkList";
import theme from "./theme";
import companyPage from "./companyPage";
import contactPage from "./contactPage";
import cta from "./cta";
import employee from "./employee";
import urlWithText from "./urlWithText";
import employeePage from "./employeePage";
import videoAndBody from "./videoAndBody";
import brandPackageButton from "./brandPackageButton";
import employeeTag from "./employeeTag";
import externalProfiles from "./externalProfiles";
import sections from "./sections";
import guestAuthor from "./guestAuthor";
import headingDescButtonCta from "./headingDescButtonCta";
import heroCta from "./heroCta";
import imageAndText from "./imageAndText";
import imageTextFlip from "./imageTextFlip";
import imageWithAlt from "./imageWithAlt";
import landingPage from "./landingPage";
import linkableHeading from "./linkableHeading";
import openPositionPage from "./openPositionPage";
import imageWithText from "./imageWithText";
import ourServicesPage from "./ourServicesPage";
import playlist from "./playlist";
import playlists from "./playlists";
import reasonsCard from "./reasonsCard";
import reasonsCarousel from "./reasonsCarousel";
import redirects from "./redirects";
import serviceItem from "./serviceItem";
import servicePage from "./servicePage";
import servicesIntro from "./servicesIntro";
import siteSettings from "./siteSettings";
import socials from "./socials";
import testimonial from "./testimonial";
import textCta from "./textCta";
import video from "./video";
import videoseries from "./videoseries";
import videoseriesPage from "./videoseriesPage";
import youtube from "./youtube";
import testimonialSlider from "./testimonialSlider";
import multicol from "./sections/multicol";
import videoList from "./sections/videoList";
import videoCarousel from "./sections/videoCarousel";
import videoCard from "./videoCard";
import tracking from "./track";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    sections,
    landingPage,
    videoseriesPage,
    videoseries,
    servicePage,
    video,
    companyPage,
    categoryPage,
    openPositionPage,
    article,
    employeePage,
    blogPage,
    videoAndBody,
    contactPage,
    aboutPage,
    linkList,
    careerPage,
    ourServicesPage,
    articleTag,
    videoCard,
    videoCarousel,
    theme,
    employee,
    testimonialSlider,
    urlWithText,
    employeeTag,
    linkableHeading,
    testimonial,
    videoList,
    multicol,
    externalProfiles,
    redirects,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    reasonsCarousel,
    blockContent,
    imageAndText,
    imageTextFlip,
    headingDescButtonCta,
    guestAuthor,
    servicesIntro,
    blogCarousel,
    brands,
    brandPackageButton,
    imageWithAlt,
    reasonsCard,
    serviceItem,
    playlists,
    imageWithText,
    formCta,
    playlist,
    youtube,
    socials,
    heroCta,
    textCta,
    cta,

    tracking,
  ]),
});
