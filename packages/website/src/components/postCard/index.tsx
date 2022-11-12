import React from 'react';
import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Icon } from 'shared-components';
import styles from './PostCard.module.css';

const { Arrow } = Icon

interface Props {
  slug: any,
  mainImage: any,
  mainImageAlt: string,
  description: string,
  title: string,
  tags: any,
  author: any,
  authorAlt: string,
  publishedAt: any,
  fallbackImg: any,
};

export const PostCard : React.FC<Props> = ({
  slug,
  mainImage,
  mainImageAlt,
  description,
  title,
  tags,
  author,
  authorAlt,
  publishedAt,
  fallbackImg,
}) => {
  let newDescription = description;
  if (description.length > 200) {
    newDescription = description
      .split(' ')
      .slice(0, 30)
      .join(' ')
      .concat('...');
  }

  const formattedPublishData = new Date(publishedAt).toLocaleDateString(
    'no-NB'
  );

  return (
    <Link
      to={`/blogg/${slug.current}`}
      className={`${styles.container} group relative pb-6`}
    >
      <div>
        <div className="flex justify-end text-sm absolute bottom-0 z-40 mb-2 w-full px-6 text-navy transform -translate-y-3">
          <div className="font-semibold uppercase w-32 text-right justify-end items-end tracking-wider group-hover:text-white w-full">
            <div
              className={`${styles.button} flex justify-end transform translate-x-2`}
            >
              Les mer{' '}
              <div className="ml-2 transform scale-80">
                <Arrow />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className="text-white h-auto bg-navy bottom-0 absolute z-10 p-6 tracking-wider transition duration-300 opacity-0 group-hover:opacity-100">
            <h3 className="text-lg font-semibold mb-3 -mx-2px">{title}</h3>
            <div className="font-light mb-8">{newDescription}</div>
          </div>
          <div className="overflow-hidden h-50">
            <GatsbyImage
              image={
                (mainImage && mainImage.asset.gatsbyImageData) || fallbackImg
              }
              alt={mainImageAlt}
              className="transform group-hover:scale-110 object-cover duration-300 transition h-full"
            />
          </div>
          <div className="p-4 text-navy h-full">
            <h3 className="text-lg font-semibold tracking-wide mb-4">
              {title}
            </h3>
            <div className="flex flex-wrap mb-4">
              {tags.map((tag : any) => (
                <div className="px-2 py-1 uppercase tracking-wider mr-6px text-xs text-tag bg-tagbg">
                  {tag.tag}
                </div>
              ))}
            </div>
            <div className="flex items-center mb-3">
              <div className="h-6 w-6 rounded-full overflow-hidden mr-2 filter-grayscale">
                <GatsbyImage
                  image={
                    (author &&
                      author.image &&
                      author.image.asset.gatsbyImageData) ||
                    fallbackImg
                  }
                  alt={authorAlt}
                />
              </div>
              <div className="text-sm">
                {author ? `${author.firstname} ${author.lastname}` : null}
                <span className="text-postgray"> - {formattedPublishData}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
