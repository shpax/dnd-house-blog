const ghost = require("../api/ghost");

async function home(ctx) {
  const posts = await ghost.posts.browse({
    limit: 6,
    fields: "title,feature_image,url,excerpt,primary_tag,custom_excerpt,slug",
    // filter: "featured:false",
    formats: "plaintext",
    include: "tags",
  });

  return ctx.render("home", {
    settings: ctx.settings,
    posts,
  });
}

module.exports = home;
