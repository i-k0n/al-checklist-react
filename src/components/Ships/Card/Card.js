import React from "react";
import { 
  CardContainer, 
  CardInput,
  ShipType,
  ShipImage,
  ShipImageContainer,
  ShipInfo,
  ShipMeta,
  ShipID,
  Dot,
  ShipTypeText,
  ShipName,
  ShipRarityAndFaction,
  ShipRarity,
  ShipFaction,
  ShipAcquisition,
  ShipBuildPool,
  ShipBuildTime,
  ShipDropMap,
  WikiURL,
 } from "./Card.styles";

const Card = function({ ship, index, shipArr, setFaction, checked, setChecked, data, setData }) {
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
    const id = e.currentTarget.id;
    setChecked(checked);
    // console.log(ship.checked);
    // console.log("ship.id: ", ship.id, typeof ship.id);
    

    // change checked state of currently clicked card
    const updateData = data.map(element => element.id === id ? {
      ...element,
      checked: !element.checked
    } : element);

    // update state
    setData(updateData)
    
    // get index of clicked ship
    const i = shipArr.indexOf(ship.id.toString());
    
    // if ship exists in the array already, remove it, otherwise add it
    checked && i === -1 ?
      shipArr.push(ship.id) : 
      shipArr.splice(i, 1);

    // console.log("ship array: ", shipArr)
    localStorage.setItem("obtainedShips", JSON.stringify(shipArr))

    // update faction state with the faction of the clicked ship
    // for updating counters or for the faction counter animation
    // const clickedFaction = ship.faction.split(" ").shift().toLowerCase();
    // if (
    //   clickedFaction !== "neptunia" ||
    //   clickedFaction !== "bilibili" ||
    //   clickedFaction !== "utawarerumono" ||
    //   clickedFaction !== "kizunaai" ||
    //   clickedFaction !== "hololive"
    // ) {
    //   if (clickedFaction === "universal") {
    //     setFaction("other");
    //   } else {
    //     setFaction(clickedFaction);
    //   }
    // } else {
    //   setFaction("total");
    // }
  };

  return (
    <CardContainer
      className={`ship show`}
      htmlFor={ship.id}
      checked={ship.checked}
    >
      <CardInput
        type="checkbox"
        id={ship.id}
        onChange={(e) => onChange(e)}
      />
      <ShipType
        className={`ship-type ${ship.classAbbr.toLowerCase()}`}
        data-title={ship.class}>
        {ship.classAbbr}
      </ShipType>
      <ShipImageContainer className={ship.rarityClass === "rarity-6" ? "shine" : ""}>
        <ShipImage
          className="ship-img rarity-4"
          // src="./assets/img/ship-blank.png"
          src={`./assets/img/${ship.id}-${ship.nameSafe}.jpg`}
          data-echo={`./img/${ship.id}-${ship.name}.jpg`}
          alt={ship.name}
        />
      </ShipImageContainer>
      <ShipInfo className="ship-info">
        <ShipMeta className="ship-id-and-ship-type-text">
          <ShipID className="ship-id">{ship.id}</ShipID>
          <Dot />
          <ShipTypeText
            className="ship-type-text"
            data-title={ship.class}
            data-abbr={ship.classAbbr}>
            {ship.classAbbr}
          </ShipTypeText>
          <Dot />
          <WikiURL className="dot" href={`${ship.wikiURL}`} target="_blank" title={`${ship.name}'s Wiki entry`}>Wiki</WikiURL>
        </ShipMeta>
        <ShipName className="ship-name">{ship.name}</ShipName>
        <ShipRarityAndFaction className="ship-rarity-and-ship-faction">
          <ShipRarity className="ship-rarity">{ship.rarity}</ShipRarity>
          <ShipFaction className="ship-faction">{ship.faction}</ShipFaction>
        </ShipRarityAndFaction>
        <ShipAcquisition className="ship-build-pool-and-ship-build-time">
          <ShipBuildPool
            className="ship-build-pool"
            title={
              ship.buildPool.length ? ship.buildPool[0].pool + " Build" : null
            }>
            {ship.buildPool.length ? ship.buildPool[0].pool + ": " : null}
          </ShipBuildPool>
          <ShipBuildTime className="ship-build-time">
            {ship.buildPool.length ? ship.buildPool[0].time : null}
          </ShipBuildTime>
        </ShipAcquisition>
        <ShipDropMap className="ship-drop-map">
          {ship.acquisition.length
            ? ship.acquisition[0].task + ": " + ship.acquisition[0].req
            : null}
        </ShipDropMap>
      </ShipInfo>
    </CardContainer>
  );
}

export default Card;