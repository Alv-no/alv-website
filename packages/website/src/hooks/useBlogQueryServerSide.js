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
        pageMetaData: allBlogPage {
          pageTitle
          pageDescription
        }
      }
    `,
  });
  response.data.articles.forEach((article) => {
    createGatsbyImages(article);
  });

  response.data.pageMetaData = response.data.pageMetaData[0];

  const { pageMetaData, articles } = response.data;

  return { pageMetaData, articles };
}
