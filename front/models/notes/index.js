import createStorage from "../LocalStorage";

export const savedSpells = createStorage("saved-spells", []);
export const savedItems = createStorage("spell-items", []);

export const setFavouriteSpellState = (id, isFavourite) => {
  const favIds = savedSpells.get();

  if (isFavourite) {
    savedSpells.set([...favIds, id]);
  } else {
    savedSpells.set(favIds.filter((itemId) => itemId !== id));
  }
};

export const setFavouriteItemState = (id, isFavourite) => {
  const favIds = savedItems.get();

  if (isFavourite) {
    savedItems.set([...favIds, id]);
  } else {
    savedItems.set(favIds.filter((itemId) => itemId !== id));
  }
};
