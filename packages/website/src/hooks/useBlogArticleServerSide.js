import { gql } from '@apollo/client';
import { client } from '../server-side/client';
import { createGatsbyImages } from '../server-side/imageCreator';

export async function getBlogArticleServerSide(slug) {
  const response = await client.query({
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache',
    query: gql`
      query($slug: String!) {
        allArticle(where: { slug: { current: { eq: $slug } } }) {
          title
          description
          author {
            firstname
            lastname
            cv {
              asset {
                url
              }
            }
            id: _id
            title
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
          }
          _rawBody: bodyRaw
          tags {
            tag
          }
          slug {
            current
          }
          mainImage {
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

          guestAuthor {
            guestAuthor {
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
              title
              id: _id
            }
          }
          socials {
            socialSubtitle
            socialTitle
            socialImage {
              asset {
                id: _id
                url
                metadata {
                  dimensions {
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  const article = response.data.allArticle[0];
  createGatsbyImages(article);
  return article;
}
