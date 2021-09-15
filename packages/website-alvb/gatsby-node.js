const path = require(`path`);
const slugify = require('slugify');
const fetch = require('node-fetch');

// const videoTemplate = path.resolve(`./src/templates/video.js`);
// const careerTemplate = path.resolve(`./src/templates/career.js`);
// const articleTemplate = path.resolve(`./src/templates/article.js`);
// const serviceTemplate = path.resolve(`./src/templates/service.js`);
// const categoryTemplate = path.resolve(`./src/templates/category.js`);
// const videoCategoryTemplate = path.resolve(`./src/templates/videoCategory.js`);
// const videoserieTemplate = path.resolve(`./src/templates/videoserie.js`);

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
// const res = await graphql(
//   `
//     {
//       allSanityVideoseries {
//         nodes {
//           id
//           description
//           featuredVideo
//           videoseriesTitle
//           slug {
//             current
//           }
//           playlists {
//             process {
//               description
//               id
//               title
//             }
//           }
//           heroImage {
//             asset {
//               url
//               gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
//             }
//           }
//         }
//       }
//       imageSharp(fixed: { originalName: { eq: "bioVideoFallback.png" } }) {
//         id
//         fixed(width: 335, height: 250) {
//           src
//         }
//       }
//       allSanityArticle {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//       allSanityCategoryPage {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//       allSanityOpenPostionPage {
//         edges {
//           node {
//             slug {
//               current
//             }
//           }
//         }
//       }
//       allSanityServices {
//         edges {
//           node {
//             slug {
//               current
//             }
//             parentPage {
//               slug {
//                 current
//               }
//             }
//           }
//         }
//       }
//     }
//   `
// );

// let videoseries;
// if (process.env.YT_API) {
//   // fetch videos from playlists (seasons)
//   videoseries = await Promise.all(
//     res.data.allSanityVideoseries.nodes.map(async (category) => {
//       const seasons = [];
//       await Promise.all(
//         category.playlists.process.map(async ({ id }) => {
//           const response = await fetch(
//             `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${process.env.YT_API}`
//           );
//           const list = await response.json();
//           let seasonVideos = list.items;

//           // more than 50 videos in a playlist (season)
//           if (list.pageInfo.totalResults > 50) {
//             let nextPageToken = list.nextPageToken;
//             while (nextPageToken) {
//               const response = await fetch(
//                 `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&pageToken=${nextPageToken}&key=${process.env.YT_API}`
//               );
//               const nextPageList = await response.json();
//               seasonVideos = seasonVideos.concat(nextPageList.items);
//               nextPageToken = nextPageList.nextPageToken || false;
//             }
//           }

//           // format season video data
//           seasonVideos = seasonVideos
//             .map((vid) => {
//               const video = vid.snippet;
//               video.playlistSlug = category.slug.current;
//               video.videoId = video.resourceId.videoId;
//               video.playlistName = category.videoseriesTitle;
//               video.thumbnail =
//                 video.thumbnails?.high?.url || res.data.imageSharp.fixed.src;
//               video.slug = slugify(video.title.replace(' |', ''), {
//                 remove: /[*+~.()|#'"!:@?]/,
//                 lower: true,
//               });
//               video.formattedPublishedAt = new Date(
//                 video.publishedAt
//               ).toUTCString();
//               return video;
//             })
//             .sort((a, b) => (a.position > b.position ? -1 : 1));

//           seasons.push(seasonVideos);
//         })
//       );
//       const newCategory = category;
//       newCategory.seasons = seasons;
//       return newCategory;
//     })
//   );
// }

// // // create videoCategory pages
// videoseries &&
//   videoseries.forEach((category, i) => {
//     createPage({
//       component: videoCategoryTemplate,
//       path: `videoserie/${category.slug.current}`,
//       context: {
//         category,
//       },
//     });

//     const sortingArr = res.data.allSanityVideoseries.nodes[
//       i
//     ].playlists.process.map((season) => season.id);

//     const sortedSeasons = category.seasons.sort(
//       (a, b) =>
//         sortingArr.indexOf(a[0].playlistId) -
//         sortingArr.indexOf(b[0].playlistId)
//     );

//     // create episode pages
//     sortedSeasons.forEach((season) => {
//       season.forEach((video) => {
//         createPage({
//           component: videoTemplate,
//           path: `videoserie/${category.slug.current}/${video.slug}`,
//           context: {
//             video: video,
//             playlistSlug: video.playlistSlug,
//             playlistName: video.playlistName,
//             season: season,
//           },
//         });
//       });
//     });
//   });

// // Create blog posts pages.
// res.data.allSanityArticle.edges.forEach((edge) => {
//   createPage({
//     component: articleTemplate,
//     path: `/blogg/${edge.node.slug.current}`,
//     context: {
//       slug: edge.node.slug.current,
//     },
//   });
// });

// // Create services pages.
// res.data.allSanityServices.edges.forEach((edge) => {
//   createPage({
//     component: serviceTemplate,
//     path: `/vi-tilbyr/${edge.node.parentPage.slug.current}/${edge.node.slug.current}`,
//     context: {
//       slug: edge.node.slug.current,
//     },
//   });
// });

// // Create category pages.
// res.data.allSanityCategoryPage.edges.forEach((edge) => {
//   createPage({
//     component: categoryTemplate,
//     path: `/vi-tilbyr/${edge.node.slug.current}`,
//     context: {
//       slug: edge.node.slug.current,
//     },
//   });
// });

// // Create career pages.
// res.data.allSanityOpenPostionPage.edges.forEach((edge) => {
//   createPage({
//     component: careerTemplate,
//     path: `/jobbe-i-alv/${edge.node.slug.current}`,
//     context: {
//       slug: edge.node.slug.current,
//     },
//   });
// });

// videoseries &&
//   createPage({
//     component: videoserieTemplate,
//     path: `videoserie`,
//     context: {
//       videoseries,
//     },
//   });
// };
