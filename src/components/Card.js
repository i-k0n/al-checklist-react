import React, { useState, useEffect } from "react";

export default function Card({ ship, index }) {
  const [checked, setChecked] = useState(ship.checked);
  const [obtainedShips, setObtainedShips] = useState([]);

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

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const loadLocalStorage = () => {
    // get obtainedShips array from localStorage and load as data
    // Set() removes any duplicate entries so our array always has unique values
    let data = Array.from(
      new Set(JSON.parse(localStorage.getItem("obtainedShips")))
    );
    // populate obtainedShips array with localStorage
    setObtainedShips([...data]);
    console.log("localStorage data: ", data);
    // loop through localStorage data
    for (let i = 0; i < data.length; i++) {
      // add completed class to ships in array
      document
        .querySelector(`.ship[data-id='${data[i]}']`)
        .classList.add("completed");
      // get matching inputs and mark as checked
      document
        .querySelector('label[data-id="009"] > input')
        .setAttribute("checked", true);
    }
    // console.log('saved ships: ', obtainedShips);
    console.log("localStorage loaded!");
  };

  useEffect(() => {
    loadLocalStorage();
  }, []);

  useEffect(() => {
    console.log(`${ship.name} checked: ${checked}`);
  }, [checked]);

  useEffect(() => {
    // click ship
    // set clicked ship's class as "completed"
    // get clicked ship's id
    // pass that id to an array of ship ids
    // update state with array of ids
    // push that state to local storage

    const shipArr = [...obtainedShips];
    let i = shipArr.indexOf(ship.id);
    if (checked) {
      // add completed class to .ship label
      document
        .querySelector(`.ship[data-id='${ship.id}']`)
        .classList.add("completed");

      // console.log(ship.faction);
      // add clicked id to obtainedShips array
      if (i === -1) {
        shipArr.push(ship.id);
        setObtainedShips(shipArr);
        console.log("add: ", ship.name, ship.id);
        console.log("ship array: ", shipArr);

        // store array in localStorage
        localStorage.setItem("obtainedShips", JSON.stringify(shipArr));
      }
    } else {
      // remove completed class from .ship label
      document
        .querySelector(`.ship[data-id='${ship.id}']`)
        .classList.remove("completed");

      console.log(ship.name + " lost!");
      // search obtainedShips array for the clicked id

      console.log("ships array: ", shipArr);
      // console.log("localstorage: ", localStorage.obtainedShips);
      if (i !== -1) {
        shipArr.splice(i, 1);
        setObtainedShips(shipArr);
        localStorage.setItem("obtainedShips", JSON.stringify(shipArr));
        console.log("removed: ", ship.name, ship.id);
        console.log("ship array: ", shipArr);
      }
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
          onChange(e);
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
