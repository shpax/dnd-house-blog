const Router = require("@koa/router");
const home = require("./home");
const post = require("./post");
const general = require("./settings");

const router = new Router();

router.use(general);

router.get("/", home);
router.get("/spells", (ctx) => ctx.render("spells", ctx));
router.get("/items", (ctx) => ctx.render("items", ctx));
router.get("/:slug", post);

module.exports = router;
