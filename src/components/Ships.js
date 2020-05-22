import React, { useState, useEffect } from "react";
import Card from "./Card";

export const Ships = (props) => {
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
    // console.log('saved ships: ', obtainedShips);
    console.log("localStorage loaded!");
    setObtainedShips([...data]);
    hideIfHidden();
  };

  const hideIfHidden = () => {
    console.log("hideIfHidden ran");
    let hideShips = localStorage.getItem("isHidden");
    if (hideShips === "true") {
      document.querySelector("#hide-toggle").checked = true;
      console.log(
        "hideToggle checked? ",
        document.querySelector("#hide-toggle").checked
      );
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
      {props.data.map((ship, index) => {
        return <Card ship={ship} index={index} key={index} shipArr={shipArr} />;
      })}
    </div>
  );
};
