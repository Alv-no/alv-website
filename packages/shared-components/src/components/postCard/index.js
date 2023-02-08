import Link from 'gatsby-link';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Arrow } from '../icon';
import * as styles from './PostCard.module.css';

export const PostCard = ({
  slug,
  mainImage,
  description,
  title,
  tags,
  author,
  readMoreText,
  postPrefix,
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

  const formattedDate = new Date(publishedAt).toLocaleDateString('nb-NO');

  return (
    <Link
      to={`/${postPrefix}/${slug.current}`}
      className={`${styles.container} group relative pb-6`}
    >
      <div>
        <div className="flex justify-end text-sm absolute bottom-0 z-40 mb-2 w-full px-6 text-navy transform -translate-y-3">
          <div className="font-semibold uppercase w-32 text-right justify-end items-end tracking-wider group-hover:text-white w-full">
            <div
              className={`${styles.button} flex justify-end transform translate-x-2`}
            >
              {readMoreText}{' '}
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
              alt=""
              image={
                (mainImage && mainImage.asset.gatsbyImageData) || fallbackImg
              }
              className="transform group-hover:scale-110 object-cover duration-300 transition h-full"
            />
          </div>
          <div className="p-4 text-navy h-full">
            <h3 className="text-lg font-semibold tracking-wide mb-4">
              {title}
            </h3>
            <div className="flex flex-wrap mb-4 gap-6px">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-2 py-1 uppercase tracking-wider text-xs text-tag bg-tagbg"
                >
                  {tag.tag}
                </div>
              ))}
            </div>
            <div className="flex items-center mb-3">
              <div className="h-6 w-6 rounded-full overflow-hidden mr-2 filter-grayscale">
                <GatsbyImage
                  alt=""
                  image={
                    (author &&
                      author.image &&
                      author.image.asset.gatsbyImageData) ||
                    fallbackImg
                  }
                />
              </div>
              <div className="text-sm">
                {author ? `${author.firstname} ${author.lastname}` : null}
                <span className="text-postgray"> - {formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
