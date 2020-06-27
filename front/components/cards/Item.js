import React from "react";

export default function ItemCard({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="mb-3">
          <div>
            <b>Качество: </b>
            {item.quality}
          </div>
          <div>
            <b>Источник: </b>
            {item.source}
          </div>
          <div>
            <b>Тип: </b>
            {item.type}
          </div>
        </div>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></div>
      </div>
    </div>
  );
}
