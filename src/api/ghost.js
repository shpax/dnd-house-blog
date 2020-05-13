const GhostContentAPI = require("@tryghost/content-api");
const config = require("config");

const api = new GhostContentAPI(config.ghost);

module.exports = api;
