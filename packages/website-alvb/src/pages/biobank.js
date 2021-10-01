import React from 'react';
import { Layout } from '../components/layout';
import { useBiobankQuery } from '../hookspages/useBiobankQuery';
import { RichtextAndImage } from '../components/richtextAndImage';
import { Services } from '../components/services';
import { NavyIntro, ServicesCard } from 'shared-components';

const cards = [
  {
    title: 'Loom',
    text: 'We normally biobank tissues and solid tumors from dogs and cats.',
  },
  {
    title: 'Organoids',
    text: 'Organoids are prepared from the tumor tissue of dogs and cats.',
  },
  {
    title: 'Primary patient cell cultures',
    text:
      'We biobank early passages of dog and cat patient cell material, such as normal cell cultures and various cancer cultures.',
  },
  {
    title: 'Loom',
    text: 'We normally biobank tissues and solid tumors from dogs and cats.',
  },
  {
    title: 'Organoids',
    text: 'Organoids are prepared from the tumor tissue of dogs and cats.',
  },
  {
    title: 'Primary patient cell cultures',
    text:
      'We biobank early passages of dog and cat patient cell material, such as normal cell cultures and various cancer cultures.',
  },
];

const Biobank = () => {
  const data = useBiobankQuery();
  const {
    pageTitle,
    pageDescription,
    heading,
    description,
    section2Image,
    section2Title,
    _rawSection2Block,
  } = data.sanityBioBank;

  return (
    <div className="overflow-hidden">
      <Layout
        white
        whiteIcons
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      >
        <NavyIntro title={heading} description={description} white />
        <RichtextAndImage
          image={section2Image.asset.gatsbyImageData}
          blocks={_rawSection2Block}
          leftColSize={'30%'}
          title={section2Title}
          flip
        />
        <div className="bg-servicesgray text-navy px-5 sm:px-12 overflow-hidden">
          <Services title="Categories">
            {cards.map((card) => {
              return (
                <ServicesCard title={card.title} description={card.text} />
              );
            })}
          </Services>
        </div>
      </Layout>
    </div>
  );
};

export default Biobank;
