import React, { useState } from "react";
import {
  savedItems,
  savedSpells,
  setFavouriteSpellState,
} from "../models/notes";
import SpellCard from "../components/cards/Spell";
import SearchInput from "../components/SearchInput";
import { vName } from "../helpers/viewFilters/spells";

export default function Notes(props) {
  const { spellsData, itemsData } = props;

  const savedItemsIdList = savedItems.get();
  const savedSpellsIdList = savedSpells.get();

  const [searchValue, setSearchValue] = useState("");

  const [selectedSpells, setSpells] = useState(
    spellsData.filter((spell) => savedSpellsIdList.includes(spell.id))
  );

  const [selectedItems, setItems] = useState(
    itemsData.filter((item) => savedItemsIdList.includes(item.id))
  );

  const cards = selectedSpells
    .filter((spell) => vName(searchValue, spell))
    .map((item, i) => (
      <div className="col-lg-12 col-12 mb-2" key={i}>
        <SpellCard
          item={item}
          isFavorite={savedSpellsIdList.includes(item.id)}
          onFavouriteChange={(value) => {
            setFavouriteSpellState(item.id, value);
            setSpells(selectedSpells.filter((spell) => spell !== item));
          }}
        />
      </div>
    ));

  return (
    <div className="row">
      <div className="col-12">
        <SearchInput onChange={setSearchValue} value={searchValue} />
      </div>

      {cards}
    </div>
  );
}
