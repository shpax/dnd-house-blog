import React from "react";
import Selector, { SelectorItem } from "./BaseSelector";

export default function SingleSelector({ items, value, onSelect }) {
  return (
    <Selector>
      {items.map((item, i) => {
        const name = typeof item === "object" ? item[0] : item;
        const val = typeof item === "object" ? item[1] : item;
        return (
          <SelectorItem
            key={i}
            name={name}
            selected={value === val}
            onClick={() => onSelect(val)}
          />
        );
      })}
    </Selector>
  );
}
