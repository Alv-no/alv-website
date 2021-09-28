// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import employee from './employee';
import article from './article';
import articleTag from './articleTag';
import bioBank from './bioBank';
import servicesIntro from './servicesIntro';
import landingPage from './landingPage';
import founder from './founder';
import serviceItem from './serviceItem';
import employeePage from './employeePage';
import ourProjectsPage from './ourProjects';
import heroBlockContent from './heroBlockContent';
import contactPage from './contactPage';
import imageHero from './imageHero';
import socials from './socials';
import imageAndText from './imageAndText';
import blogPage from './blogPage';
import siteSettings from './siteSettings';
import cta from './cta';

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
    ourProjectsPage,
    serviceItem,
    imageHero,
    founder,
    socials,
    cta,
  ]),
});
