// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const crypto = require('crypto');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`./src/templates/article.js`);
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
      }
    `
  );

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
};
if (process.env.YT_API)
  exports.sourceNodes = async ({ actions }) => {
    const { createNode } = actions;
    const playlistData = await fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=localizations&maxResults=20&channelId=UCLaJhfc1tFmHzP4usj1LKfA&key=${process.env.YT_API}`
    )
      .then((res) => res.json())
      .then((result) => result);

    let formattedItems;
    const playlists = await Promise.all(
      playlistData.items.map(async (el) => {
        const apiCall = await fetch(
          `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${el.id}&key=${process.env.YT_API}`
        );
        const list = await apiCall.json();
        formattedItems = await list.items.map((item) => {
          item.snippet.formattedPublishedAt = new Date(
            item.snippet.publishedAt
          ).toUTCString();
          item.snippet.videoId = item.snippet.resourceId.videoId;
          return item.snippet;
        });
        formattedItems.sort((a, b) => (a.position > b.position ? -1 : 1));
        return formattedItems;
      })
    );
    // build Gatsby nodes
    const makeNode = (node) => {
      node.internal.contentDigest = crypto
        .createHash('md5')
        .update(JSON.stringify(node))
        .digest('hex');
      createNode(node);
    };

    const playlistNode = {
      id: 'playlist',
      parent: 'ytPlaylists',
      children: [],
      internal: {
        type: 'ytPlaylist',
      },
    };
    playlistNode.children = playlists.forEach((list) =>
      list.map(
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
          const id = `ytVideo-${videoId}`;
          makeNode({
            id,
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
          return id;
        }
      )
    );

    makeNode(playlistNode);
  };
