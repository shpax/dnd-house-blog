import React from "react";

export default function SearchInput({ value, onChange }) {
  return (
    <div className="input-group mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Поиск"
        aria-label="Поиск"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <div className="input-group-append">
        <span className="input-group-text btn" onClick={() => onChange("")}>
          x
        </span>
      </div>
    </div>
  );
}
