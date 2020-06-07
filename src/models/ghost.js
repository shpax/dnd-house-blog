const ghost = require("../api/ghost");
const { logError } = require("../helpers");

async function getPage(slug) {
  try {
    const page = await ghost.pages.read({ slug });
    return page;
  } catch (e) {
    logError(e);

    return {};
  }
}

async function getFeaturedPosts(count = 6) {
  try {
    const posts = await ghost.posts.browse({
      limit: count,
      fields: "title,feature_image,url,excerpt,slug",
      formats: "plaintext",
    });

    //make urls relative
    posts.forEach((p) => {
      p.url = p.url.replace(/https?:\/\/[^/]+/, "");
    });

    return posts;
  } catch (e) {
    logError(e);

    return [];
  }
}

async function getSinglePost(slug) {
  try {
    const post = await ghost.posts.read({ slug }, { include: "tags" });

    return post;
  } catch (e) {
    logError(e);

    return {};
  }
}

async function getSettings() {
  try {
    const settings = await ghost.settings.browse();

    return settings;
  } catch (e) {
    logError(e);

    return [];
  }
}

module.exports = {
  getPage,
  getFeaturedPosts,
  getSettings,
  getSinglePost,
};
