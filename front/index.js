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

async function initNotesApp() {
  const notesContainer = document.getElementById("notes-container");

  if (notesContainer) {
    const [
      { default: Notes },
      { default: itemsData },
      { default: spellsData },
    ] = await Promise.all([
      import("./containers/Notes"),
      import("../data/items.json"),
      import("../data/spells.json"),
    ]);

    ReactDOM.render(
      <Notes itemsData={itemsData} spellsData={spellsData} />,
      notesContainer
    );
  }
}

initItemsApp();
initSpellsApp();
initMonstersApp();
initNotesApp();
