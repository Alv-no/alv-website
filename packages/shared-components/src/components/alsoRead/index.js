import Link from 'gatsby-link';
import React from 'react';
import { Arrow } from '../icon';
import { PostCard } from '../postCard';

export const AlsoRead = ({
  articles,
  currentTags,
  currentAuthor,
  postPrefix,
  alsoReadText,
  seeAllText,
  readMoreText,
}) => {
  const sortedArticles = articles.edges
    .map((el) => el.node)
    .sort((a, b) => (a.rawDate < b.rawDate ? 1 : -1))
    .sort((a, b) => {
      const aBool = a.tags.some((tag) => currentTags.indexOf(tag.tag) > -1);
      const bBool = b.tags.some((tag) => currentTags.indexOf(tag.tag) > -1);
      return aBool === bBool ? 0 : aBool ? -1 : 1;
    })
    .sort((a, b) => {
      const aBool = a.author
        ? a.author.firstname.concat(' ').concat(a.author.lastname) ===
          currentAuthor
        : false;
      const bBool = b.author
        ? b.author.firstname.concat(' ').concat(b.author.lastname) ===
          currentAuthor
        : false;
      return aBool === bBool ? 0 : aBool ? -1 : 1;
    });

  return (
    <div className="mt-8">
      <div className="flex justify-between mb-5">
        <div className="mb-4">
          <div className="uppercase text-navy text-lg font-semibold mb-2 tracking-wider">
            {alsoReadText}
          </div>
          <div className="w-12 h-3px bg-theme-accent" />
        </div>
        <div className="">
          <Link className="relative z-50" to={`/${postPrefix}/`}>
            <div className="flex items-center font-semibold uppercase">
              {seeAllText}
              <span className="transform text-navy ml-3">
                <Arrow />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:hidden md:grid-cols-3 gap-5 md:grid lg:hidden 2xl:grid">
        {sortedArticles.slice(0, 3).map((article, i) => (
          <PostCard
            {...article}
            key={i}
            readMoreText={readMoreText}
            pathPrefix={postPrefix}
          />
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-x-5 md:hidden lg:grid 2xl:hidden">
        {sortedArticles.slice(0, 2).map((article, i) => (
          <PostCard
            {...article}
            key={i}
            readMoreText={readMoreText}
            pathPrefix={postPrefix}
          />
        ))}
      </div>
    </div>
  );
};
