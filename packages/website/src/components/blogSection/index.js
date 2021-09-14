import React, { useState } from 'react';
import { BlogFilter } from '../blogFilter';
import { PostCard } from '../postCard';
import * as Button from '../../../../shared-components/button';

export const BlogSection = ({ allArticles }) => {
  const [articles, setArticles] = useState(allArticles);
  const [visibleRows, setVisibleRows] = useState(12);
  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 12);
  };

  const allAuthors = [
    ...new Set(
      allArticles.map(({ author }) => {
        if (author) return `${author.firstname} ${author.lastname}`;
        return '';
      })
    ),
  ];

  const allTags = [
    ...new Set(allArticles.flatMap(({ tags }) => tags.map(({ tag }) => tag))),
  ];

  const updateArticles = (articles) => {
    setArticles(articles);
  };

  return (
    <>
      <div className="w-full">
        {allTags && (
          <BlogFilter
            allTags={allTags}
            allAuthors={allAuthors}
            allArticles={allArticles}
            onChange={updateArticles}
          />
        )}
        <div className="max-w-1200 mx-auto flex justify-center px-6 min-h-screen">
          <div className="w-full mb-4 grid justify-center five:gap-y-12 gap-y-4 xs:gap-4 xs:max-w-570 seven:max-w-none nine:max-w-1200 grid-cols-blog-xs five:grid-cols-blog-sm nine:grid-cols-blog-nine twelve:grid-cols-employees-lg">
            {articles.slice(0, visibleRows).map((article) => {
              return (
                <>
                  <PostCard {...article} key={article.id} />
                </>
              );
            })}
          </div>
        </div>
        {/* VIEW MORE BUTTON */}
        <div
          className="max-w-1200 mx-auto flex justify-center sm:mt-15 xs:mt-12 mt-10 twelve:px-6 mb-20"
          style={{
            opacity: visibleRows && visibleRows > articles.length ? 0 : 1,
          }}
        >
          <Button.OvalSimple onClick={handleViewMoreClick}>
            Last inn flere artikler
          </Button.OvalSimple>
        </div>
      </div>
    </>
  );
};
