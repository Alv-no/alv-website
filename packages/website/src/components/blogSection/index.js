import React, { useState } from 'react';
import { BlogFilter } from '../blogFilter';
import { PostCard } from '../postCard';
import * as Button from '../button';

export const BlogSection = ({ allArticles }) => {
  const [articles, setArticles] = useState(allArticles);
  const [visibleRows, setVisibleRows] = useState(3);

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 3);
  };

  const allAuthors = [
    ...new Set(
      articles.map(({ author }) => `${author.firstname} ${author.lastname}`)
    ),
  ];

  const allTags = [
    ...new Set(articles.flatMap(({ tags }) => tags.map(({ tag }) => tag))),
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
            allArticles={articles}
            onChange={updateArticles}
          />
        )}
        <div className="max-w-1200 mx-auto">
          <div
            className="w-full grid xs:gap-4 xl:mx-0 justify-center xs:mx-auto mb-4 xs:max-w-570 seven:max-w-none nine:max-w-grid -mx-4 xs:mx-0 grid-cols-employees-xs xs:grid-cols-employees-sm seven:grid-cols-employees-md nine:grid-cols-employees-lg"
            style={{ rowGap: '50px' }}
          >
            {articles.map((article) => {
              return (
                <>
                  <PostCard {...article} />
                  <PostCard {...article} />
                </>
              );
            })}
          </div>
        </div>
        {/* VIEW MORE BUTTON */}
        <div className="max-w-1200 mx-auto flex justify-center sm:mt-15 xs:mt-12 mt-10 twelve:px-6 mb-20">
          <Button.OvalSimple onClick={handleViewMoreClick}>
            Last inn flere artikler
          </Button.OvalSimple>
        </div>
      </div>
    </>
  );
};
