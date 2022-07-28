import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import * as styles from './CompanyRichText.module.css';
import { ProductCta } from '../button';
import { handleEmailSubmit } from './utils';

/* eslint-disable no-dupe-keys */
export function companyRichTextTypesSerializer(config) {
  const urlBuilder = (source) =>
    imageUrlBuilder({
      projectId: config.SANITY_PROJECT_ID,
      dataset: config.SANITY_DATASET,
    }).image(source);
  return {
    types: {
      productCta: () => null,
      linkableHeading: (props) => {
        const formattedEl = props.node.Heading?.split(' ').join('-');
        const navElement = formattedEl?.toLowerCase();
        return <h2 id={navElement}>{props.node.Heading}</h2>;
      },
      productCta: (props) => {
        return (
          <ProductCta
            productName={props.node.productName}
            buttonText={props.node.buttonText}
            sendEmailCallback={handleEmailSubmit}
          />
        );
      },
      imageTextFlip: (props) => {
        return (
          <section className="grid sm:grid-cols-2">
            <img
              alt={props.node.heading}
              src={urlBuilder(props.node.image.asset)
                .width(700)
                .height(700)
                .url()}
              className="px-0 my-0 object-cover h-full p-0 m-0"
              style={{ padding: 0, margin: 0, maxHeight: '383px' }}
            />
            <div
              className={`${
                props.node.flip ? 'sm:order-first sm:pr-8' : 'sm:pl-8'
              } flex flex-col font-thin`}
            >
              <PortableText
                blocks={props.node.linkableBlock}
                projectId={config.SANITY_PROJECT_ID}
                dataset={config.SANITY_DATASET}
                className={styles.body}
                serializers={companyRichTextTypesSerializer(config)}
              />
            </div>
          </section>
        );
      },
    },
  };
}
