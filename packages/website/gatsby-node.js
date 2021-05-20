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

let videoseries;
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
  videoseries = await Promise.all(
    res.data.allSanityVideoseries.nodes.map(async (category) => {
      const seasons = [];
      return Promise.all(
        category.playlists.process.map(async ({ id }) => {
          const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${process.env.YT_API}`
          );
          const list = await response.json();
          let seasonVideos = list.items;

          // more than 50 videos in a playlist (season)
          if (list.pageInfo.totalResults > 50) {
            let nextPageToken = list.nextPageToken;
            while (nextPageToken) {
              const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&pageToken=${nextPageToken}&key=${process.env.YT_API}`
              );
              const nextPageList = await response.json();
              seasonVideos = seasonVideos.concat(nextPageList.items);
              nextPageToken = nextPageList.nextPageToken || false;
            }
          }

          // format season video data
          seasonVideos = seasonVideos
            .map((vid) => {
              const video = vid.snippet;
              // video.season = seasonVideos;
              video.playlistSlug = category.slug.current;
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
            })
            .sort((a, b) => (a.position > b.position ? -1 : 1));

          seasons.push(seasonVideos);
          return seasonVideos;
        })
      ).then(() => {
        const newCategory = category;
        newCategory.seasons = seasons;
        return newCategory;
      });
    })
  );

  exports.sourceNodes = async ({ actions }) => {
    const makeNode = (node) => {
      node.internal.contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(node))
        .digest('hex');
      actions.createNode(node);
    };

    makeNode({
      id: 'playlist',
      parent: 'ytPlaylists',
      children: [],
      internal: {
        type: 'ytPlaylist',
      },
    });

    videoseries.forEach((category) =>
      category.seasons.forEach((season) =>
        season.forEach(
          ({
            slug,
            title,
            videoId,
            position,
            playlistId,
            thumbnails,
            publishedAt,
            description,
            playlistSlug,
            playlistName,
            formattedPublishedAt,
          }) => {
            console.log(title);
            return makeNode({
              id: `ytVideo-${videoId}`,
              slug,
              title,
              videoId,
              position,
              thumbnails,
              playlistId,
              publishedAt,
              description,
              playlistSlug,
              playlistName,
              formattedPublishedAt,
              internal: {
                type: 'ytVideo',
              },
              parent: 'playlist',
              children: [],
            });
          }
        )
      )
    );
  };

  // // format season video data
  // seasonVideos = seasonVideos
  // .map((video) => ({
  //   ...video.snippet,
  //   season: seasonVideos,
  //   playlistSlug: category.slug.current,
  //   videoId: video.snippet.resourceId.videoId,
  //   thumbnail: video.snippet.thumbnails.standard.url,
  //   playlistName: category.videoseriesTitle,
  //   slug: slugify(video.snippet.title.replace(' |', ''), {
  //     remove: /[*+~.()|#'"!:@?]/,
  //     lower: true,
  //   }),
  //   formattedPublishedAt: new Date(
  //     video.snippet.publishedAt
  //   ).toUTCString(),
  // }))
  // .sort((a, b) => (a.position > b.position ? -1 : 1));

  // // create videoCategory pages
  videoseries.forEach((category) => {
    createPage({
      component: videoCategoryTemplate,
      path: `videoserie/${category.slug.current}`,
      context: {
        category,
      },
    });

    // create episode pages
    category.seasons.forEach((season) => {
      season.forEach((video) => {
        createPage({
          component: videoTemplate,
          path: `videoserie/${category.slug.current}/${video.slug}`,
          context: {
            video: video,
            playlistSlug: video.playlistSlug,
            playlistName: video.playlistName,
            season: season,
          },
        });
      });
    });
  });

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

// exports.sourceNodes = async ({ actions }) => {
//   const makeNode = (node) => {
//     node.internal.contentDigest = crypto
//       .createHash('md5')
//       .update(JSON.stringify(node))
//       .digest('hex');
//     actions.createNode(node);
//   };

//   makeNode({
//     id: 'playlist',
//     parent: 'ytPlaylists',
//     children: [],
//     internal: {
//       type: 'ytPlaylist',
//     },
//   });

//   videoseries.forEach((category) =>
//     category.seasons.forEach((season) =>
//       season.forEach(
//         ({
//           slug,
//           title,
//           videoId,
//           position,
//           playlistId,
//           thumbnails,
//           publishedAt,
//           description,
//           playlistSlug,
//           playlistName,
//           formattedPublishedAt,
//         }) => {
//           console.log(title);
//           return makeNode({
//             id: `ytVideo-${videoId}`,
//             slug,
//             title,
//             videoId,
//             position,
//             thumbnails,
//             playlistId,
//             publishedAt,
//             description,
//             playlistSlug,
//             playlistName,
//             formattedPublishedAt,
//             internal: {
//               type: 'ytVideo',
//             },
//             parent: 'playlist',
//             children: [],
//           });
//         }
//       )
//     )
//   );
// };

// Fetch videos with Youtube API
// if (process.env.YT_API) {
//   exports.sourceNodes = async ({ actions }) => {
//     // build Gatsby nodes from fetch result
//     const makeNode = (node) => {
//       node.internal.contentDigest = crypto
//         .createHash('md5')
//         .update(JSON.stringify(node))
//         .digest('hex');
//       actions.createNode(node);
//     };

//     makeNode({
//       id: 'playlist',
//       parent: 'ytPlaylists',
//       children: [],
//       internal: {
//         type: 'ytPlaylist',
//       },
//     });

//     videoseries.forEach((category) =>
//       category.seasons.forEach((season) =>
//         season.forEach(
//           ({
//             slug,
//             title,
//             videoId,
//             position,
//             playlistId,
//             thumbnails,
//             publishedAt,
//             description,
//             playlistSlug,
//             playlistName,
//             formattedPublishedAt,
//           }) => {
//             console.log(title);
//             return makeNode({
//               id: `ytVideo-${videoId}`,
//               slug,
//               title,
//               videoId,
//               position,
//               thumbnails,
//               playlistId,
//               publishedAt,
//               description,
//               playlistSlug,
//               playlistName,
//               formattedPublishedAt,
//               internal: {
//                 type: 'ytVideo',
//               },
//               parent: 'playlist',
//               children: [],
//             });
//           }
//         )
//       )
//     );
//   };
// } else {
//   exports.sourceNodes = async ({ actions }) => {
//     const makeNode = (node) => {
//       node.internal.contentDigest = crypto
//         .createHash('md5')
//         .update(JSON.stringify(node))
//         .digest('hex');
//       actions.createNode(node);
//     };

//     const videoId = '';
//     makeNode({
//       id: `ytVideo-${videoId}`,
//       title: '',
//       description: '',
//       videoId,
//       slug: '',
//       thumbnails: { standard: { url: '' } },
//       position: 0,
//       publishedAt: '',
//       formattedPublishedAt: '',
//       playlistId: '',
//       playlistName: '',
//       playlistSlug: '',
//       internal: {
//         type: 'ytVideo',
//       },
//       parent: 'playlist',
//       children: [],
//     });

//     makeNode({
//       id: 'playlist',
//       parent: 'ytPlaylists',
//       children: [],
//       internal: {
//         type: 'ytPlaylist',
//       },
//     });
//   };
// }
