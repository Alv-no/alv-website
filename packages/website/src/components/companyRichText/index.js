import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import * as styles from './CompanyRichText.module.css';

const projectId = 'mnr37rl0';
const dataset = 'production';

const urlFor = (source) =>
  imageUrlBuilder({ projectId, dataset }).image(source);

export const companyRichTextTypes = {
  types: {
    linkableHeading: (props) => {
      const formattedEl = props.node.Heading?.split(' ').join('-');
      const navElement = formattedEl?.toLowerCase();
      return <h2 id={navElement}> {props.node.Heading}</h2>;
    },
    imageTextFlip: (props) => {
      return (
        <section className="grid sm:grid-cols-2">
          <img
            alt={props.node.heading}
            src={urlFor(props.node.image.asset).width(700).height(700).url()}
            className="px-0 my-0 object-cover h-full"
            style={{ padding: 0, margin: 0 }}
          />
          <div
            className={`${
              props.node.flip ? 'sm:order-first sm:pr-8' : 'sm:pl-8'
            } flex flex-col justify-center py-2`}
          >
            <span className="font-thin">
              <PortableText
                blocks={props.node.linkableBlock}
                projectId="mnr37rl0"
                dataset="production"
                className={styles.body}
                serializers={companyRichTextTypes}
              />
            </span>
          </div>
        </section>
      );
    },
  },
};
