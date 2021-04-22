import React, { useState, useEffect } from "react";
import Table, { TableRow } from "../components/Table";
import { classStorage, levelStorage } from "../models/spells";
import SingleSelector from "../components/SingleSelector";
import { LEVEL_LIST, CLASS_LIST } from "../constants/spellsFilters";
import MonsterCard from "../components/cards/Monster";
import { vClass, vLevel, vName } from "../helpers/viewFilters/spells";
import SearchInput from "../components/SearchInput";

const titles = ["Ур.", "Название"];

export default function Monsters(props) {
  const { data } = props;
  const [selectedClass, setSelectedClass] = useState(classStorage.get());
  const [selectedLevel, setSelectedLevel] = useState(levelStorage.get());
  const [searchValue, setSearchValue] = useState("");
  const [selectedSpells, setSpells] = useState([data[0]]);

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
        visible={vName(searchValue, item)}
      />
    );
  });

  const cards = selectedSpells.map((item, i) => (
    <MonsterCard item={item} key={i} />
  ));

  return (
    <div className="row">
      <div className="col-12">
        <div className="mb-2">
          {/* <SingleSelector
            items={CLASS_LIST}
            value={selectedClass}
            onSelect={(value) => setSelectedClass(value)}
          />
          <SingleSelector
            items={LEVEL_LIST}
            value={selectedLevel}
            onSelect={(value) => setSelectedLevel(value)}
          /> */}
        </div>
      </div>
      <div className="col-12">
        <SearchInput onChange={setSearchValue} value={searchValue} />
      </div>

      <div className="col-lg-7 col-12 mb-2">{cards}</div>
      <div className="col-lg-5 col-12">
        <Table titles={titles}>{rows}</Table>
      </div>
    </div>
  );
}
