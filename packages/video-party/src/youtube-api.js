import fetch from "node-fetch";

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

  return fetch(`${url}?${urlParams}`);
  // TODO: fetch all videos, not just the first page
};
