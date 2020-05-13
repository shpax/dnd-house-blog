const ghost = require("../api/ghost");

async function post(ctx) {
  const post = await ghost.posts.read(
    { slug: ctx.params.slug },
    { include: "tags" }
  );
  console.log(post);

  return ctx.render("post", { post, settings: ctx.settings });
}

module.exports = post;
