import React from "react";
import ReactDOM from "react-dom";

async function initSpellsApp() {
  const spellsContainer = document.getElementById("container");

  if (spellsContainer) {
    const [{ default: Spells }, { default: data }] = await Promise.all([
      import("./SpellsApp"),
      import("../data/spells.json"),
    ]);

    const sortedData = data.sort((a, b) => a.level - b.level);

    ReactDOM.render(<Spells data={sortedData} />, spellsContainer);
  }
}

initSpellsApp();
