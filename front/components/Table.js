import React from "react";

export function TableRow({ cols, visible, onClick }) {
  return (
    <tr className={`${visible ? "" : "d-none"}`} onClick={onClick}>
      {cols.map((col, i) => {
        if (i === 0 && cols.length > 1)
          return (
            <th key={i} scope="row">
              {col}
            </th>
          );
        else return <td key={i}>{col}</td>;
      })}
    </tr>
  );
}

export default function Table(props) {
  const { titles = [] } = props;

  const ths = titles.map((t, i) => {
    return (
      <th key={i} scope="col">
        {t}
      </th>
    );
  });

  return (
    <table className="table table-hover table-borderless shadow-sm bg-white rounded">
      <thead>
        <tr>{ths}</tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}
