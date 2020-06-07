const _ = require("lodash");

function logError(error) {
  // todo: log this

  console.log(error.message);
}

function renderTemplate(view, getContext = Promise.resolve({})) {
  return async (ctx) => {
    const context = await awaitPromises(await getContext(ctx));

    return ctx.render(view, context);
  };
}

async function awaitPromises(promiseMap) {
  const result = {};

  await Promise.all(
    _.toPairs(promiseMap).map(async ([key, promise]) => {
      result[key] = await promise;
    })
  );

  return result;
}

module.exports = {
  logError,
  renderTemplate,
  awaitPromises,
};
