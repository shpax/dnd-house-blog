const ghost = require("../api/ghost");

let nav = null;

async function settings(ctx, next) {
  const settings = await ghost.settings.browse();

  console.log(settings);

  ctx.settings = settings;

  return next();
}

module.exports = settings;
