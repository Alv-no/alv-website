/*
conf: {
  id,
  playlistId,
  maxResults,
  onBehalfOfContentOwner,
  pageToken,
  videoId,
}
*/

// API docs: https://developers.google.com/youtube/v3/docs/playlistItems/list
export const playlistItems = async (key, conf, part = "snippet") => {
  const url = "https://youtube.googleapis.com/youtube/v3/playlistItems";

  if (!key) {
    throw new Error("Missing api key, set the 'key' prop in the function");
  }

  if (!conf.id && !conf.playlistId) {
    throw new Error("Required to provide either 'id' or 'playlistId'");
  }

  if (conf.id && conf.playlistId) {
    throw new Error(
      "Required to only provide either 'id' or 'playlistId' and not both"
    );
  }

  const potentialParams = {
    key,
    part,
    ...conf,
  };

  const urlParams = Object.keys(potentialParams)
    .map((key) => {
      if (!potentialParams[key]) return null;

      return `${key}=${encodeURIComponent(potentialParams[key])}`;
    })
    .filter((value) => value !== null)
    .join("&");

  const res = await fetch(`${url}?${urlParams}`);
  const json = await res.json();
  return json;
};

// One api call can only fetch 50 videoes at a time
// This functions loops over it calling it as many times as needed until it gets the whole playlist
export const playlistItemsFull = async (key, conf, part = "snippet") => {
  let firstBatch = await playlistItems(key, conf, part);
  let currentBatch = firstBatch;

  while (currentBatch.nextPageToken) {
    const { nextPageToken } = currentBatch;
    currentBatch = await playlistItems(
      key,
      { pageToken: nextPageToken, ...conf },
      part
    );
    firstBatch.items = [...firstBatch.items, ...currentBatch.items];
  }

  return firstBatch;
};
