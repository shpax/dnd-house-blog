import React from "react";
import ReactDOM from "react-dom";

async function initSpellsApp() {
  const spellsContainer = document.getElementById("spells-container");

  if (spellsContainer) {
    const [{ default: Spells }, { default: data }] = await Promise.all([
      import("./containers/Spells"),
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
      import("./containers/Items"),
      import("../data/items.json"),
    ]);

    ReactDOM.render(<Items data={data} />, itemsContainer);
  }
}

async function initMonstersApp() {
  const monstersContainer = document.getElementById("monsters-container");

  if (monstersContainer) {
    const [{ default: Monsters }, { default: data }] = await Promise.all([
      import("./containers/Monsters"),
      import("../data/monsters.json"),
    ]);

    ReactDOM.render(<Monsters data={data} />, monstersContainer);
  }
}

initItemsApp();
initSpellsApp();
initMonstersApp();
