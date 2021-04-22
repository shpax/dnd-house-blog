const Router = require("@koa/router");
const { renderTemplate } = require("../helpers");
const {
  getPage,
  getSettings,
  getFeaturedPosts,
  getSinglePost,
} = require("../models/ghost");

const router = new Router();

/* HOME PAGE */
router.get(
  "/",
  renderTemplate("home", async () => ({
    settings: getSettings(),
    page: getPage("home"),
    posts: getFeaturedPosts(),
  }))
);

/* MONSTERS PAGE */
router.get(
  "/monsters",
  renderTemplate("page-react", async () => ({
    settings: getSettings(),
    page: getPage("monsters"),
    slug: "monsters",
  }))
);

/* ITEMS PAGE */
router.get(
  "/items",
  renderTemplate("page-react", async () => ({
    settings: getSettings(),
    page: getPage("items"),
    slug: "items",
  }))
);

/* SPELLS PAGE */
router.get(
  "/spells",
  renderTemplate("page-react", async () => ({
    settings: getSettings(),
    page: getPage("spells"),
    slug: "spells",
  }))
);

/* CONDITIONS PAGE */
router.get(
  "/conditions",
  renderTemplate("page-react", async () => ({
    settings: getSettings(),
    page: getPage("conditions"),
    slug: "conditions",
  }))
);

/* NOTES PAGE */
router.get(
  "/notes",
  renderTemplate("page-react", async () => ({
    settings: getSettings(),
    page: getPage("notes"),
    slug: "notes",
  }))
);

/* ABOUT PAGE */
router.get(
  "/about",
  renderTemplate("page-react", async () => ({
    settings: getSettings(),
    page: getPage("about"),
    slug: "about",
  }))
);

/* SINGLE POST PAGE */
router.get(
  "/blog/:slug",
  renderTemplate("post", async ({ params: { slug } }) => ({
    settings: getSettings(),
    post: getSinglePost(slug),
  }))
);

module.exports = router;
