import React, { useState, useEffect } from "react";
import Card from "./Card";

const Ships = (props) => {
  const [obtainedShips, setObtainedShips] = useState([]);
  const shipArr = obtainedShips;

  const loadLocalStorage = () => {
    // get obtainedShips array from localStorage and load as data
    // Set() removes any duplicate entries so our array always has unique values

    let data = Array.from(
      new Set(JSON.parse(localStorage.getItem("obtainedShips")))
    );
    // populate obtainedShips array with localStorage
    console.log("localStorage data: ", data);
    // loop through localStorage data
    for (let i = 0; i < data.length; i++) {
      // add completed class to ships in array
      document
        .querySelector(`.ship[data-id='${data[i]}']`)
        .classList.add("completed");
      // get matching inputs and mark as checked
      document.querySelector(
        `label[data-id='${data[i]}'] > input`
      ).checked = true;
    }
    console.log("localStorage loaded!");
    setObtainedShips([...data]);
    hideIfHidden();
  };

  const hideIfHidden = () => {
    // console.log("hideIfHidden ran");
    let hideShips = localStorage.getItem("isHidden");
    if (hideShips === "true") {
      document.querySelector("#hide-toggle").checked = true;
      document
        .querySelectorAll(".completed")
        .forEach((ship) => ship.classList.remove("show"));
    }
  };

  useEffect(() => {
    loadLocalStorage();
  }, []);

  return (
    <div className="ships-container">
      {props.data
        .filter((ship) => {
          // show only the ships that match the search filter
          if (ship.name.toLowerCase().includes(props.textFilter)) {
            return ship;
          }
        })
        .sort((a, b) => {
          if (props.sortType === "map" || props.sortType === "id") {
            return parseFloat(a[props.sortType]) - parseFloat(b[props.sortType])
          }
          else {
            return a[props.sortType] > b[props.sortType] ? 1 : -1
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
            />
          );
        })}
    </div>
  );
};

export default Ships;