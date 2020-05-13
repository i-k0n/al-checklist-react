import React from "react";

export default function Card({ ship, index }) {
  return (
    <label
      className="ship show"
      data-id={ship.id}
      data-index={index}
      data-name={ship.name}
      data-class={ship.classAbbr}
      data-rarity={ship.rarityRank}
      data-faction={ship.faction}
      data-filters="vanguard cl elite sakura light">
      <input type="checkbox" id="188" />
      <span
        className={`ship-type ${ship.classAbbr.toLowerCase()}`}
        data-title={ship.class}>
        {ship.classAbbr}
      </span>
      <img
        className="ship-img rarity-4"
        src="./assets/img/ship-blank.png"
        data-echo={`./img/${ship.id}-${ship.name},jpg`}
        alt="Mogami"
      />
      <div className="ship-info">
        <div className="ship-id-and-ship-type-text">
          <span className="ship-id">{ship.id}</span>
          <span
            className="ship-type-text"
            data-title={ship.class}
            data-abbr={ship.classAbbr}>
            {ship.classAbbr}
          </span>
        </div>
        <h4 className="ship-name">{ship.name}</h4>
        <div className="ship-rarity-and-ship-faction">
          <span className="ship-rarity">{ship.rarity}</span>
          <span className="ship-faction">{ship.faction}</span>
        </div>
        <div className="ship-build-pool-and-ship-build-time">
          <span
            className="ship-build-pool"
            title={
              ship.buildPool.length ? ship.buildPool[0].pool + " Build" : null
            }>
            {ship.buildPool.length ? ship.buildPool[0].pool + ": " : null}
          </span>
          <span className="ship-build-time">
            {ship.buildPool.length ? ship.buildPool[0].time : null}
          </span>
        </div>
        <div className="ship-drop-map">
          {ship.acquisition.length
            ? ship.acquisition[0].task + ": " + ship.acquisition[0].req
            : null}
        </div>
      </div>
    </label>
  );
}
