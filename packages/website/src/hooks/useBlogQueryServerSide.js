import { gql } from '@apollo/client';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';
export async function getBlogDataServerSide() {
  const response = await client.query({
    fetchPolicy: 'no-cache',
    query: gql`
      {
        articles: allArticle(sort: { publishedAt: ASC }) {
          id: _id
          _createdAt
          title
          description
          tags {
            tag
          }
          mainImage {
            asset {
              url
              id: _id
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
          }
          author {
            image {
              asset {
                id: _id
                metadata {
                  dimensions {
                    height
                    width
                  }
                }
              }
            }
            firstname
            lastname
          }
          guestAuthor {
            guestAuthor {
              image {
                asset {
                  url
                }
              }
              firstname
              lastname
              title
            }
          }
          publishedAt
          slug {
            current
          }
        }
        pageMetadata: allBlogPage {
          pageTitle
          pageDescription
        }
      }
    `,
  });
  response.data.articles.forEach((article) => {
    createGatsbyImages(article);
  });

  const { articles } = response.data;
  const pageMetadata = response.data.pageMetadata[0];

  return { pageMetadata, articles };
}
