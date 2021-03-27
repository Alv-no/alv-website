const path = require(`path`);
const fetch = require('node-fetch');
const crypto = require('crypto');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`./src/templates/article.js`);
  const serviceTemplate = path.resolve(`./src/templates/service.js`);
  const categoryTemplate = path.resolve(`./src/templates/category.js`);
  const careerTemplate = path.resolve(`./src/templates/career.js`);
  const videoTemplate = path.resolve(`./src/templates/video.js`);
  const res = await graphql(
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
  );

  // Fetch videos with Youtube API
  if (process.env.YT_API) {
    const playlistData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=localizations&maxResults=20&channelId=UCLaJhfc1tFmHzP4usj1LKfA&key=${process.env.YT_API}`
    )
      .then((res) => res.json())
      .then((result) => result);

    const playlists = await Promise.all(
      playlistData.items.map(async (el) => {
        const apiCall = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&key=${process.env.YT_API}`
        );
        const list = await apiCall.json();
        let formattedItems = await list.items.map((item) => {
          item.snippet.formattedPublishedAt = new Date(
            item.snippet.publishedAt
          ).toUTCString();
          item.snippet.videoId = item.snippet.resourceId.videoId;
          return item.snippet;
        });
        if (list.pageInfo.totalResults > 50) {
          let nextPageToken = list.nextPageToken;
          while (nextPageToken) {
            const apiCall = await fetch(
              `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&pageToken=${nextPageToken}&key=${process.env.YT_API}`
            );
            const nextPageList = await apiCall.json();
            const nextPageItems = await nextPageList.items.map((item) => {
              item.snippet.formattedPublishedAt = new Date(
                item.snippet.publishedAt
              ).toUTCString();
              item.snippet.videoId = item.snippet.resourceId.videoId;
              return item.snippet;
            });
            formattedItems = formattedItems.concat(nextPageItems);
            nextPageToken = nextPageList.nextPageToken || false;
          }
        }

        return formattedItems.sort((a, b) =>
          a.position > b.position ? -1 : 1
        );
      })
    );

    playlists.forEach((playlist) => {
      playlist.forEach((video) => {
        const slug = slugify(video.title.replace(' |', ''), {
          remove: /[*+~.()|#'"!:@]/,
          lower: true,
        });

        createPage({
          component: videoTemplate,
          path: `/videoserie/${slug}`,
          context: {
            video: video,
          },
        });
      });
    });
  }
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

// Fetch videos with Youtube API
if (process.env.YT_API) {
  exports.sourceNodes = async ({ actions }) => {
    const playlistData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=localizations&maxResults=20&channelId=UCLaJhfc1tFmHzP4usj1LKfA&key=${process.env.YT_API}`
    )
      .then((res) => res.json())
      .then((result) => result);

    const playlists = await Promise.all(
      playlistData.items.map(async (el) => {
        const apiCall = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&key=${process.env.YT_API}`
        );
        const list = await apiCall.json();
        let formattedItems = await list.items.map((item) => {
          item.snippet.formattedPublishedAt = new Date(
            item.snippet.publishedAt
          ).toUTCString();
          item.snippet.videoId = item.snippet.resourceId.videoId;
          return item.snippet;
        });
        if (list.pageInfo.totalResults > 50) {
          let nextPageToken = list.nextPageToken;
          while (nextPageToken) {
            const apiCall = await fetch(
              `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&pageToken=${nextPageToken}&key=${process.env.YT_API}`
            );
            const nextPageList = await apiCall.json();
            const nextPageItems = await nextPageList.items.map((item) => {
              item.snippet.formattedPublishedAt = new Date(
                item.snippet.publishedAt
              ).toUTCString();
              item.snippet.videoId = item.snippet.resourceId.videoId;
              return item.snippet;
            });
            formattedItems = formattedItems.concat(nextPageItems);
            nextPageToken = nextPageList.nextPageToken || false;
          }
        }

        return formattedItems.sort((a, b) =>
          a.position > b.position ? -1 : 1
        );
      })
    );

    // build Gatsby nodes from fetch result
    const makeNode = (node) => {
      node.internal.contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(node))
        .digest('hex');
      actions.createNode(node);
    };
    playlists.forEach((list) =>
      list.forEach(
        ({
          title,
          description,
          videoId,
          thumbnails,
          position,
          publishedAt,
          formattedPublishedAt,
          playlistId,
        }) => {
          const slug = slugify(title.replace(' |', ''), {
            remove: /[*+~.()|#'"!:@]/,
            lower: true,
          });
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
            internal: {
              type: 'ytVideo',
            },
            parent: 'playlist',
            children: [],
          });
        }
      )
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
      videoId,
      slug: '',
      thumbnails: { standard: { url: '' } },
      position: 0,
      publishedAt: '',
      formattedPublishedAt: '',
      playlistId: '',
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
