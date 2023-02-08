// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import aboutPage from './aboutPage';
import article from './article';
import articleTag from './articleTag';
import blockContent from './blockContent';
import blogCarousel from './blogCarousel';
import blogPage from './blogPage';
import brands from './brands';
import careerPage from './careerPage';
import categoryPage from './categoryPage';
import companyPage from './companyPage';
import contactPage from './contactPage';
import cta from './cta';
import employee from './employee';
import employeePage from './employeePage';
import brandPackageButton from './brandPackageButton';
import employeeTag from './employeeTag';
import externalProfiles from './externalProfiles';
import guestAuthor from './guestAuthor';
import headingDescButtonCta from './headingDescButtonCta';
import heroCta from './heroCta';
import imageAndText from './imageAndText';
import imageTextFlip from './imageTextFlip';
import imageWithAlt from './imageWithAlt';
import landingPage from './landingPage';
import linkableHeading from './linkableHeading';
import openPositionPage from './openPositionPage';
import ourServicesPage from './ourServicesPage';
import playlist from './playlist';
import playlists from './playlists';
import reasonsCard from './reasonsCard';
import reasonsCarousel from './reasonsCarousel';
import redirects from './redirects';
import serviceItem from './serviceItem';
import servicePage from './servicePage';
import servicesIntro from './servicesIntro';
import siteSettings from './siteSettings';
import socials from './socials';
import testimonial from './testimonial';
import textCta from './textCta';
import video from './video';
import videoseries from './videoseries';
import videoseriesPage from './videoseriesPage';
import youtube from './youtube';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
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
    contactPage,
    aboutPage,
    careerPage,
    ourServicesPage,
    articleTag,
    employee,
    employeeTag,
    linkableHeading,
    testimonial,
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
    playlist,
    youtube,
    socials,
    heroCta,
    textCta,
    cta,
  ]),
});
