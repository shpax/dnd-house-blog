import React from "react";
import ReactDOM from "react-dom";

async function initSpellsApp() {
  const spellsContainer = document.getElementById("spells-container");

  if (spellsContainer) {
    const [{ default: Spells }, { default: data }] = await Promise.all([
      import("./SpellsApp"),
      import("../data/spells.json"),
    ]);

    const sortedData = data.sort((a, b) => a.level - b.level);

    ReactDOM.render(<Spells data={sortedData} />, spellsContainer);
  }
}

async function initItemsApp() {
  const itemsContainer = document.getElementById("items-container");

  if (itemsContainer) {
    const [{ default: Items }, { default: data }] = await Promise.all([
      import("./ItemsApp"),
      import("../data/items.json"),
    ]);

    ReactDOM.render(<Items data={data} />, itemsContainer);
  }
}

initItemsApp();
initSpellsApp();
