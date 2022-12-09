// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import employee from './employee';
import article from './article';
import meta from './meta';
import button from './button';
import articleTag from './articleTag';
import bioBank from './bioBank';
import servicesIntro from './servicesIntro';
import localeText from './localeText';
import localeString from './localeString';
import twoImages from './twoImages';
import download from './download';
import landingPage from './landingPage';
import titleBlockImage from './titleBlockImage';
import founder from './founder';
import blockImage from './blockImage';
import mainMenu from './menuColumn';
import menuItem from './menuItem';
import categoryList from './categoryList';
import localeImageText from './localeImageText';
import titleBlock from './titleBlock';
import titleTextButtonImage from './titleTextButtonImage';
import titleTextImage from './titleTextImage';
import localeButton from './localeButton';
import textOverlapVideo from './textOverlapVideo';
import imageTitleTextButton from './imageTitleTextButton';
import localeCta from './localeCta';
import titleText from './titleText';
import serviceItem from './serviceItem';
import localeMeta from './localeMeta';
import employeePage from './employeePage';
import ourProjectsPage from './ourProjects';
import localeSimpleBlock from './localeSimpleBlock';
import heroBlockContent from './heroBlockContent';
import titleTextButton from './titleTextButton';
import localeBlockContent from './localeBlockContent';
import titleBlockCtaColumn from './titleBlockCtaColumn';
import localeHeroBlockContent from './localeHeroBlockContent';
import contactPage from './contactPage';
import imageHero from './textImageHero';
import investmentPage from './investmentPage';
import socials from './socials';
import productCta from './productCta';
import imageAndText from './imageAndText';
import blogPage from './blogPage';
import siteSettings from './siteSettings';
import cta from './cta';
// Company page dependencies
import companyPage from './companyPage';
import linkableBlockContent from './linkableBlockContent';
import linkableHeading from './linkableHeading';
import imageTextFlip from './imageTextFlip';

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
    article,
    employeePage,
    blogPage,
    contactPage,
    bioBank,
    articleTag,
    employee,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    heroBlockContent,
    servicesIntro,
    blockContent,
    imageAndText,
    mainMenu,
    titleTextButtonImage,
    ourProjectsPage,
    localeSimpleBlock,
    localeBlockContent,
    localeHeroBlockContent,
    imageTitleTextButton,
    titleBlockImage,
    download,
    localeMeta,
    titleTextImage,
    textOverlapVideo,
    localeButton,
    localeCta,
    twoImages,
    titleBlock,
    button,
    menuItem,
    blockImage,
    titleTextButton,
    productCta,
    serviceItem,
    titleText,
    categoryList,
    localeImageText,
    meta,
    imageHero,
    investmentPage,
    titleBlockCtaColumn,
    localeText,
    localeString,
    founder,
    socials,
    cta,
    // Company page dependencies
    linkableHeading,
    imageTextFlip,
    linkableBlockContent,
    companyPage,
  ]),
});
