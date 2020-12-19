import React, { useState, useEffect } from "react";
import Card from "./Card";
import { ShipsContainer } from "./Ships.styles";

const Ships = (props) => {
  const [obtainedShips, setObtainedShips] = useState([]);
  const [checked, setChecked] = useState(null);
  const shipArr = obtainedShips;
  

  const loadLocalStorage = () => {
    // get obtainedShips array from localStorage and load as data
    // Set() removes any duplicate entries so our array always has unique values
    // console.log("beginning data: ", props.data)
    let localData = Array.from(
      new Set(JSON.parse(localStorage.getItem("obtainedShips")))
    );
    // populate obtainedShips array with localStorage
    console.log("localStorage data: ", localData);

    // put state into new array to manipulate
    let newArray = [...props.data]
    
    // loop through localStorage data and set corresponding ships as checked in new array
    for (let i = 0; i < localData.length; i++) {
      const elementsIndex = props.data.findIndex(element => element.id === localData[i])      
      newArray[elementsIndex] = {...newArray[elementsIndex], checked: true}
    }
    // update state with localStorage data
    props.setData(newArray)

    // console.log("newArray: ", newArray)
    console.log("localStorage loaded!");
    setObtainedShips([...localData]);

    // load state of hideOwned from localStorage
    const isHidden = JSON.parse(localStorage.getItem("isHidden"));
    // console.log("isHidden: ", localStorage.getItem("isHidden"))
    props.setHideOwned(isHidden);
  };

  useEffect(() => {
    loadLocalStorage();
    // eslint-disable-next-line
  }, []);

  return (
    <ShipsContainer className="ships-container">
      {props.data
        .filter((ship) => {
          // show only the ships that match the search filter
          if (ship.name.toLowerCase().includes(props.textFilter)) {
            return ship;
          } else {
            return null;
          }
        })
        .filter((ship) => {
          //* faction filters
          if (props.factionFilter.length) {
            return props.factionFilter.some(faction => {
              return ship.faction === faction;
            })
          } else {
            return ship
          }
        })
        .filter((ship) => {
          //* type filters
          if (props.typeFilter.length) {
            return props.typeFilter.some(type => {
              return ship.classAbbr === type;
            })
          } else {
            return ship
          }
        })
        .filter((ship) => {
          //* rarity filters
          if (props.rarityFilter.length) {
            return props.rarityFilter.some(rarity => {
              if (rarity === "Collab") {
                return !ship.collection
              }
              if (rarity === "Retrofit") {
                return ship.id > 3000
              }
              if (rarity === "Drop Only") {
                return ship.buildPool[0].eventName === "Drop Only"
              }
              if (rarity === "Drops") {
                return ship.acquisition[0]?.task === "Drops from "
              }
              return ship.rarity === rarity;
            })
          } else {
            return ship
          }
        })
        .filter((ship) => {
          if (!props.hideCollab) {
            return ship;
          } else {
            return ship.collection;
          }
        })
        .filter((ship) => {
          if (!props.hideOwned) {
            return ship;
          } else {
            return !ship.checked;
          }
        })
        .sort((a, b) => {
          if (props.sortType === "id") {
            return (
              parseFloat(a[props.sortType]) - parseFloat(b[props.sortType])
            );
          } else if (props.sortType === "map") {
            return (
              parseFloat(a.acquisition[0]?.req) - parseFloat(b.acquisition[0]?.req)
            );
          } else {
            return a[props.sortType] > b[props.sortType] ? 1 : -1;
          }
        })
        .map((ship, index) => {
          return (
            <Card
              setData={props.setData}
              data={props.data}
              ship={ship}
              index={index}
              key={ship.id}
              shipArr={shipArr}
              setFaction={props.setFaction}
              setChecked={setChecked}
              checked={checked}
            />
          );
        })}
    </ShipsContainer>
  );
};

export default Ships;