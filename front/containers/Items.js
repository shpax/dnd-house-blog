import React, { useState, useEffect } from "react";
import Table, { TableRow } from "../components/Table";
import { qualityStorage } from "../models/items";
import SingleSelector from "../components/SingleSelector";
import { QUALITY_LIST } from "../constants/itemsFilters";
import ItemCard from "../components/cards/Item";
import { vQuality, vName } from "../helpers/itemsViewFilters";
import SearchInput from "../components/SearchInput";

const titles = ["Название"];

export default function Spells(props) {
  const { data } = props;
  const [selectedQuality, setSelectedQuality] = useState(qualityStorage.get());
  const [searchValue, setSearchValue] = useState("");
  const [selectedItems, setItems] = useState([data[0]]);

  useEffect(() => {
    qualityStorage.set(selectedQuality);
  });

  const rows = data.map((item, i) => {
    const { name } = item;
    return (
      <TableRow
        cols={[name]}
        key={i}
        visible={vQuality(selectedQuality, item) && vName(searchValue, item)}
        onClick={() => setItems([item])}
      />
    );
  });

  const cards = selectedItems.map((item, i) => (
    <ItemCard item={item} key={i} />
  ));

  return (
    <div className="row">
      <div className="col-12">
        <div className="mb-2">
          <SingleSelector
            items={QUALITY_LIST}
            value={selectedQuality}
            onSelect={(value) => setSelectedQuality(value)}
          />
        </div>
      </div>
      <div className="col-12">
        <div className="input-group mb-2">
          <SearchInput onChange={setSearchValue} value={searchValue} />
        </div>
      </div>

      <div className="col-lg-6 col-12 mb-2">{cards}</div>
      <div className="col-lg-6 col-12">
        <Table titles={titles}>{rows}</Table>
      </div>
    </div>
  );
}
