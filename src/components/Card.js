import React, { useState, useEffect } from "react";

export default function Card({ ship, index }) {
  const [checked, setChecked] = useState(ship.checked);

  let filters = [];
  if (
    ship.classAbbr === "DD" ||
    ship.classAbbr === "CA" ||
    ship.classAbbr === "CL"
  ) {
    filters.push("vanguard");
  } else if (
    ship.classAbbr === "BB" ||
    ship.classAbbr === "BC" ||
    ship.classAbbr === "CV" ||
    ship.classAbbr === "CVL" ||
    ship.classAbbr === "AR"
  ) {
    filters.push("main");
  } else {
    filters.push("other");
  }
  filters.push(ship.name.toLowerCase());
  filters.push(ship.class.toLowerCase());
  filters.push(ship.classAbbr.toLowerCase());
  filters.push(ship.rarity.split(" ").join("-").toLowerCase());
  filters.push(ship.faction.toLowerCase());
  filters.push(
    ship.buildPool[0].pool ? ship.buildPool[0].pool.toLowerCase() : ""
  );
  filters.push(ship.id.slice(0, 6) === "Collab" ? "collab" : "");
  filters.push(ship.collection);
  filters.push(parseInt(ship.id) >= 3005 ? "retrofit" : "");

  const onChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    console.log(`${ship.name}: ${index} isChecked: ${checked}`);

    if (checked) {
      document
        .querySelector(`.ship[data-id='${ship.id}']`)
        .classList.add("completed");
      // $(`.counter.${faction}`).addClass("flash-green");
      // setTimeout(function() {
      //     $(`.counter.${faction}`).removeClass("flash-green");
      // }, 1000);
      console.log(ship.faction);
      // add clicked id to obtainedShips array
      // obtainedShips.push(id);
      // store array in localStorage
      // localStorage.setItem("obtainedShips", JSON.stringify(obtainedShips));
      // console.log("ships array: ", obtainedShips);
    } else {
      document
        .querySelector(`.ship[data-id='${ship.id}']`)
        .classList.remove("completed");
      // $(`.counter.${faction}`).addClass("flash-red");
      // setTimeout(function() {
      //     $(`.counter.${faction}`).removeClass("flash-red");
      // }, 1000);
      //   console.log(name + " lost!")
      // search obtainedShips array for the clicked id
      // let i = obtainedShips.indexOf(id);
      // console.log("ships array: ", obtainedShips);
      // console.log("localstorage: ", localStorage.obtainedShips);
      // if (i !== -1) {
      //     obtainedShips.splice(i, 1);
      //     localStorage.setItem("obtainedShips", JSON.stringify(obtainedShips));
      //     console.log("removed");
      // }
    }
  }, [checked]);

  return (
    <label
      className="ship show"
      data-id={ship.id}
      data-index={index}
      data-name={ship.name}
      data-class={ship.classAbbr}
      data-rarity={ship.rarityRank}
      data-faction={ship.faction}
      data-filters={filters.join(" ").replace(/\s+/g, " ").trim()}>
      <input
        type="checkbox"
        id={ship.id}
        checked={checked}
        onChange={(e) => {
          // prevent default event from running render twice
          // e.preventDefault();
          onChange();
        }}
      />
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
