const _ = require("lodash");
const spellsData = require("../../data/spells.json");

function getSpellsByLevel() {
  return _.values(_.groupBy(spellsData, "level"));
}

function getSpells() {
  return _.orderBy(spellsData, "level");
}

module.exports = {
  getSpellsByLevel,
  getSpells,
};
