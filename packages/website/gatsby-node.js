const path = require(`path`);
const crypto = require('crypto');
const slugify = require('slugify');
const fetch = require('node-fetch');

const videoTemplate = path.resolve(`./src/templates/video.js`);
const careerTemplate = path.resolve(`./src/templates/career.js`);
const articleTemplate = path.resolve(`./src/templates/article.js`);
const serviceTemplate = path.resolve(`./src/templates/service.js`);
const categoryTemplate = path.resolve(`./src/templates/category.js`);
const videoCategoryTemplate = path.resolve(`./src/templates/videoCategory.js`);

let videos = [];
const allSeasons = [];

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const res = await graphql(
    `
      {
        allSanityVideoseries {
          nodes {
            id
            description
            featuredVideo
            videoseriesTitle
            slug {
              current
            }
            playlists {
              process {
                description
                id
                title
              }
            }
            heroImage {
              asset {
                url
                fluid {
                  src
                }
              }
            }
          }
        }
        allSanityArticle {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
        allSanityCategoryPage {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
        allSanityOpenPostionPage {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
        allSanityServices {
          edges {
            node {
              slug {
                current
              }
              parentPage {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    `
  );

  // fetch videos from playlists (seasons)
  const allCategories = [];
  await res.data.allSanityVideoseries.nodes.forEach(async (category) => {
    const categorySlug = category.slug.current;
    const newCategory = { categorySlug };
    newCategory.seasons = [];
    new Promise(() => {
      category.playlists.process.forEach(async (el) => {
        await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&key=${process.env.YT_API}`
        )
          .then((res) => res.json())
          .then((list) => {
            let seasonVideos = list.items;

            // more than 50 videos in a playlist (season)
            if (list.pageInfo.totalResults > 50) {
              let nextPageToken = list.nextPageToken;
              while (nextPageToken) {
                const nextPageList = fetch(
                  `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&pageToken=${nextPageToken}&key=${process.env.YT_API}`
                ).then((res) => res.json());

                seasonVideos = seasonVideos.concat(nextPageList.items);
                nextPageToken = nextPageList.nextPageToken || false;
              }
            }

            // format season video data
            seasonVideos = seasonVideos.map((vid) => {
              const video = vid.snippet;
              video.season = seasonVideos;
              video.playlistSlug = categorySlug;
              video.videoId = video.resourceId.videoId;
              video.playlistName = category.videoseriesTitle;
              video.slug = slugify(video.title.replace(' |', ''), {
                remove: /[*+~.()|#'"!:@?]/,
                lower: true,
              });
              video.formattedPublishedAt = new Date(
                video.publishedAt
              ).toUTCString();
              return video;
            });

            seasonVideos.sort((a, b) => (a.position > b.position ? -1 : 1));
            newCategory.seasons.push(seasonVideos);
            videos = videos.concat(seasonVideos);
            allSeasons = allSeasons.concat(seasonVideos);
            return seasonVideos;
          });
      });
    })
      .then(() => allCategories.push(newCategory))
      .then(() => console.log(allCategories));
  });

  videos.forEach((video) => {
    const { slug, playlistSlug } = video;
    createPage({
      component: videoTemplate,
      path: `videoserie/${playlistSlug}/${slug}`,
      context: {
        slug,
      },
    });
  });

  // // create videoCategory pages
  // videoCategories &&
  //   videoCategories.forEach((category) => {
  //     createPage({
  //       component: videoCategoryTemplate,
  //       path: `videoserie/${category.slug.current}`,
  //       context: {
  //         slug: category.slug.current,
  //       },
  //     });
  //     // create episode pages
  //     category.seasons.forEach((season) => {
  //       season.forEach((video) => {
  //         createPage({
  //           component: videoTemplate,
  //           path: `videoserie/${category.slug.current}/${video.slug}`,
  //           context: {
  //             video: video,
  //             playlistSlug: video.categorySlug,
  //             playlistName: video.categoryName,
  //             list: video.season,
  //           },
  //         });
  //       });
  //     });
  //   });

  // Create blog posts pages.
  res.data.allSanityArticle.edges.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/blogg/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });

  // Create services pages.
  res.data.allSanityServices.edges.forEach((edge) => {
    createPage({
      component: serviceTemplate,
      path: `/vi-tilbyr/${edge.node.parentPage.slug.current}/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });

  // Create category pages.
  res.data.allSanityCategoryPage.edges.forEach((edge) => {
    createPage({
      component: categoryTemplate,
      path: `/vi-tilbyr/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });

  // Create career pages.
  res.data.allSanityOpenPostionPage.edges.forEach((edge) => {
    createPage({
      component: careerTemplate,
      path: `/jobbe-i-alv/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
};
