import React, { useState, useEffect } from "react";

const Card = function({ ship, index, shipArr, setFaction }) {
  const [checked, setChecked] = useState(ship.checked);

  

  // build filters array for filtering ships
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


  // handle clicking and unclicking of ships
  const onChange = (e) => {
    const { checked } = e.currentTarget;
    setChecked(checked);

    // console.log(ship.checked);
    // console.log("ship.id: ", ship.id, typeof ship.id);
    const i = shipArr.indexOf(ship.id.toString());

    if (checked) {
      // add completed class to .ship label
      document
        .querySelector(`.ship[data-id='${ship.id}']`)
        .classList.add("completed");
      // console.log("shipArr index: ", i);
      // add clicked id to obtainedShips array
      if (i === -1) {
        shipArr.push(ship.id);
        // console.log("ship array: ", shipArr);
        // setObtainedShips(shipArr);
        // store array in localStorage
        localStorage.setItem("obtainedShips", JSON.stringify(shipArr));
      }
    } else {
      // remove completed class from .ship label
      document
        .querySelector(`.ship[data-id='${ship.id}']`)
        .classList.remove("completed");

      // console.log("shipArr index: ", i);
      // console.log("ships array: ", shipArr);
      // console.log("localstorage: ", localStorage.obtainedShips);
      if (i !== -1) {
        shipArr.splice(i, 1);
        localStorage.setItem("obtainedShips", JSON.stringify(shipArr));
        // console.log("removed: ", ship.name, ship.id);
        // console.log("ship array: ", shipArr);
      }
    }

    console.log(`---------------------`);

    const clickedFaction = ship.faction.split(" ").shift().toLowerCase();
    if (
      clickedFaction !== "neptunia" ||
      clickedFaction !== "bilibili" ||
      clickedFaction !== "utawarerumono" ||
      clickedFaction !== "kizunaai" ||
      clickedFaction !== "hololive"
    ) {
      if (clickedFaction === "universal") {
        setFaction("other");
      } else {
        setFaction(clickedFaction);
      }
    } else {
      setFaction("total");
    }
  };

  return (
    <label
      className="ship show"
      htmlFor={ship.id}
      data-id={ship.id}
      data-index={index}
      data-name={ship.name}
      data-class={ship.classAbbr}
      data-rarity={ship.rarityRank}
      data-faction={ship.faction}
      data-collection={ship.id.slice(0, 6) === "Collab" ? false : true}
      data-filters={filters.join(" ").replace(/\s+/g, " ").trim()}>
      <input
        type="checkbox"
        id={ship.id}
        defaultChecked={checked}
        onChange={(e) => onChange(e)}
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
        alt={ship.name}
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

export default Card;