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
let allSeasons = [];
let videoCategories = [];

exports.createPages = async ({ graphql, actions }) => {
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
      }
    `
  );

  videoCategories = res.data.allSanityVideoseries.nodes;

  // fetch videos from playlists (seasons)
  new Promise(() => {
    videoCategories &&
      videoCategories.forEach(async (category) => {
        const categorySlug = category.slug.current;

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
              seasonVideos = seasonVideos.map((el) => {
                const video = el.snippet;
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
              videos = videos.concat(seasonVideos);
              allSeasons = allSeasons.concat(seasonVideos);
              return seasonVideos;
            })
            .then((season) => {
              if (process.env.YT_API) {
                exports.sourceNodes = async ({ actions }) => {
                  // build Gatsby nodes from fetch result
                  const makeNode = (node) => {
                    node.internal.contentDigest = crypto
                      .createHash('md5')
                      .update(JSON.stringify(node))
                      .digest('hex');
                    actions.createNode(node);
                  };
                  console.log(season);
                  season.forEach(
                    ({
                      title,
                      description,
                      videoId,
                      thumbnails,
                      position,
                      publishedAt,
                      formattedPublishedAt,
                      playlistId,
                      categoryName,
                      categorySlug,
                      slug,
                    }) => {
                      makeNode({
                        id: `ytVideo-${videoId}`,
                        slug,
                        title,
                        description,
                        thumbnails,
                        videoId,
                        position,
                        publishedAt,
                        formattedPublishedAt,
                        playlistId,
                        categoryName,
                        categorySlug,
                        internal: {
                          type: 'ytVideo',
                        },
                        parent: 'playlist',
                        children: [],
                      });
                    }
                  );
                  makeNode({
                    id: 'playlist',
                    parent: 'ytPlaylists',
                    children: [],
                    internal: {
                      type: 'ytPlaylist',
                    },
                  });
                };
              } else {
                exports.sourceNodes = async ({ actions }) => {
                  const makeNode = (node) => {
                    node.internal.contentDigest = crypto
                      .createHash('md5')
                      .update(JSON.stringify(node))
                      .digest('hex');
                    actions.createNode(node);
                  };

                  const videoId = '';
                  makeNode({
                    id: `ytVideo-${videoId}`,
                    title: '',
                    description: '',
                    videoId: '',
                    slug: '',
                    thumbnails: { standard: { url: '' } },
                    position: 0,
                    publishedAt: '',
                    formattedPublishedAt: '',
                    playlistId: '',
                    categoryName: '',
                    categorySlug: '',
                    internal: {
                      type: 'ytVideo',
                    },
                    parent: 'playlist',
                    children: [],
                  });

                  makeNode({
                    id: 'playlist',
                    parent: 'ytPlaylists',
                    children: [],
                    internal: {
                      type: 'ytPlaylist',
                    },
                  });
                };
              }
            });
        });
      });
  })
    // Fetch videos with Youtube API
    .then(() =>
      graphql(
        `
          {
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
      )
    )
    .then((response) => {
      const { createPage } = actions;
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

      // create videoCategory pages
      videoCategories &&
        videoCategories.forEach((category) => {
          createPage({
            component: videoCategoryTemplate,
            path: `videoserie/${category.slug.current}`,
            context: {
              slug: category.slug.current,
            },
          });
        });

      // create episode pages
      // category.seasons.forEach((season) => {
      //   season.forEach((video) => {
      //     createPage({
      //       component: videoTemplate,
      //       path: `videoserie/${category.slug.current}/${video.slug}`,
      //       context: {
      //         video: video,
      //         playlistSlug: video.categorySlug,
      //         playlistName: video.categoryName,
      //         list: video.season,
      //       },
      //     });
      //   });
      // });

      // Create blog posts pages.
      response.data.allSanityArticle.edges.forEach((edge) => {
        createPage({
          component: articleTemplate,
          path: `/blogg/${edge.node.slug.current}`,
          context: {
            slug: edge.node.slug.current,
          },
        });
      });

      // Create services pages.
      response.data.allSanityServices.edges.forEach((edge) => {
        createPage({
          component: serviceTemplate,
          path: `/vi-tilbyr/${edge.node.parentPage.slug.current}/${edge.node.slug.current}`,
          context: {
            slug: edge.node.slug.current,
          },
        });
      });

      // Create category pages.
      response.data.allSanityCategoryPage.edges.forEach((edge) => {
        createPage({
          component: categoryTemplate,
          path: `/vi-tilbyr/${edge.node.slug.current}`,
          context: {
            slug: edge.node.slug.current,
          },
        });
      });

      // Create career pages.
      response.data.allSanityOpenPostionPage.edges.forEach((edge) => {
        createPage({
          component: careerTemplate,
          path: `/jobbe-i-alv/${edge.node.slug.current}`,
          context: {
            slug: edge.node.slug.current,
          },
        });
      });
    });
};
