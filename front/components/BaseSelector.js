import React from "react";

export function SelectorItem({ name, selected, onClick }) {
  return (
    <button
      className={`btn btn-${selected ? "primary" : "light"}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default function Selector(props) {
  return <div className="d-flex mb-1 flex-row flex-wrap">{props.children}</div>;
}
