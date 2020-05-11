const Router = require("@koa/router");
const _ = require("lodash");
const spellsModel = require("./models/spellsModel");

const router = new Router();

router.get("/", (ctx) => ctx.render("home"));
router.get("/spells", (ctx) =>
  ctx.render("spells", { data: spellsModel.getSpells(), cols: 3 })
);
router.get("/items", (ctx) => ctx.render("items"));

module.exports = router;
