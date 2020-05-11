const Koa = require("koa");
const render = require("koa-ejs");
const serve = require("koa-static");
const mount = require("koa-mount");
const router = require("./router");

const app = new Koa();

render(app, {
  root: "views",
  layout: "template",
  viewExt: "ejs",
  //   async: true,
});

app.use(router.routes());
app.use(router.allowedMethods());

if (process.env.NODE_ENV !== "production") {
  app.use(mount("/static", serve("static")));
}

module.exports = app;
