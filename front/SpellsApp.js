import React, { useState, useEffect } from "react";
import Table, { TableRow } from "./components/Table";
import { classStorage, levelStorage } from "./models/spells";
import SingleSelector from "./components/SingleSelector";
import { LEVEL_LIST, CLASS_LIST } from "./constants/spellsFilters";
import SpellCard from "./components/SpellCard";
import { vClass, vLevel, vName } from "./helpers/spellsViewFilters";

const titles = ["Ур.", "Название"];

export default function Spells(props) {
  const { data } = props;
  const [selectedClass, setSelectedClass] = useState(classStorage.get());
  const [selectedLevel, setSelectedLevel] = useState(levelStorage.get());
  const [searchValue, setSearchValue] = useState("");
  const [selectedSpells, setSpells] = useState([]);

  useEffect(() => {
    classStorage.set(selectedClass);
    levelStorage.set(selectedLevel);
  });

  const rows = data.map((item, i) => {
    const { level, name } = item;
    return (
      <TableRow
        cols={[level, name]}
        key={i}
        onClick={() => setSpells([item])}
        visible={
          vClass(selectedClass, item) &&
          vName(searchValue, item) &&
          vLevel(selectedLevel, item)
        }
      />
    );
  });

  const cards = selectedSpells.map((item, i) => (
    <SpellCard item={item} key={i} />
  ));

  return (
    <div className="row">
      <div className="col-12">
        <div className="mb-2">
          <SingleSelector
            items={CLASS_LIST}
            value={selectedClass}
            onSelect={(value) => setSelectedClass(value)}
          />
          <SingleSelector
            items={LEVEL_LIST}
            value={selectedLevel}
            onSelect={(value) => setSelectedLevel(value)}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Поиск"
            aria-label="Поиск"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <div className="input-group-append">
            <span
              className="input-group-text btn"
              onClick={() => setSearchValue("")}
            >
              x
            </span>
          </div>
        </div>
      </div>

      <div className="col-lg-7 col-12 mb-2">{cards}</div>
      <div className="col-lg-5 col-12">
        <Table titles={titles}>{rows}</Table>
      </div>
    </div>
  );
}
