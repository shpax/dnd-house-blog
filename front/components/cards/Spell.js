import React from "react";

export default function SpellCard({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <div className="mb-3">
          <div>
            <b>Уровень: </b>
            {item.level}
          </div>
          <div>
            <b>Школа: </b>
            {item.school}
          </div>
          <div>
            <b>Классы: </b>
            {item.classes.join(", ")}
          </div>
          <div>
            <b>Источник: </b>
            {item.source}
          </div>
          <div>
            <b>Компоненты: </b>
            {item.components.join(", ")}
          </div>
          <div>
            <b>Дистанция: </b>
            {item.distance}
          </div>
          <div>
            <b>Длительность: </b>
            {item.duration}
          </div>
          <div>
            <b>Время накладывания: </b>
            {item.castTime}
          </div>
        </div>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: item.descriptionHTML }}
        ></div>
      </div>
    </div>
  );
}
