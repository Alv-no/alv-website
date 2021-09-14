import React from 'react';
import Link from 'gatsby-link';
import { PostCard } from '../postCard';
import * as Icon from '../icon';

export const AlsoRead = ({ articles, currentTags, currentAuthor }) => {
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
            Also Read
          </div>
          <div className="w-12 h-3px bg-yellow" />
        </div>
        <div className="">
          <Link className="relative z-50" to="/blogg">
            <div className="flex items-center font-semibold uppercase">
              Se alle artikler
              <span className="transform text-navy ml-3">
                <Icon.Arrow />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:hidden md:grid-cols-3 gap-5 md:grid lg:hidden 2xl:grid">
        {sortedArticles.slice(0, 3).map((article, i) => (
          <PostCard {...article} key={i} />
        ))}
      </div>
      <div className="hidden sm:grid grid-cols-2 gap-x-5 md:hidden lg:grid 2xl:hidden">
        {sortedArticles.slice(0, 2).map((article, i) => (
          <PostCard {...article} key={i} />
        ))}
      </div>
    </div>
  );
};
