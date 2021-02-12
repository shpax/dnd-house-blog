import React from "react";

export default function MonsterCard({ item }) {
  console.log(item);

  const { name, type, speed, ac, health, stats, params, sections } = item;
  return (
    <div className="card">
      <div className="card-body">
        <div className="mb-3 container">
          <div className="row">
            <h5 className="card-title col-12">{name}</h5>
          </div>
          <div className="row mb-3">
            <div className="col-12">{type}</div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5 col-sm-12">
              <b>Здоровье: </b>
              {health}
            </div>
            <div className="col-md-3 col-sm-12">
              <b>Защита: </b>
              {ac}
            </div>
            <div className="col-md-3 col-sm-12">
              <b>Скорость: </b>
              {speed}
            </div>
          </div>
          <div className="row mb-3">
            {stats.map((stat, i) => (
              <div className="col-md-5 col-sm-12" key={i}>
                <b>{stat.title}: </b>
                {stat.value}
              </div>
            ))}
          </div>
          <div className="row mb-3">
            {params.map((param, i) => (
              <div className="col-12" key={i}>
                <b>{param.title}: </b>
                {param.value.join(", ")}
              </div>
            ))}
          </div>

          {sections.map((section, i) => (
            <div className="row mb-2" key={i}>
              <div className="col-12 card-text">
                <p className="h6 text-center">{section.title}</p>
                <p dangerouslySetInnerHTML={{ __html: section.html }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
