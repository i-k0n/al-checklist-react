import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";

export const Ships = (props) => {
  const [obtainedShips, setObtainedShips] = useState([]);
  const shipArr = obtainedShips;
  // const wrapperSetObtainedShips = useCallback(
  //   (val) => {
  //     setObtainedShips(val);
  //   },
  //   [setObtainedShips]
  // );

  const loadLocalStorage = () => {
    // get obtainedShips array from localStorage and load as data
    // Set() removes any duplicate entries so our array always has unique values

    let data = Array.from(
      new Set(JSON.parse(localStorage.getItem("obtainedShips")))
    );
    // populate obtainedShips array with localStorage
    // setObtainedShips([...data]);
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
  };
  useEffect(() => {
    loadLocalStorage();
  }, []);

  return (
    <div className="ships-container">
      {props.data.map((ship, index) => {
        return (
          <Card
            ship={ship}
            index={index}
            key={index}
            shipArr={shipArr}
            // obtainedShipsSetter={wrapperSetObtainedShips}
          />
        );
      })}
    </div>
  );
};
