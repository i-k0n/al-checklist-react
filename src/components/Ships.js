import React, { useState, useEffect } from "react";
import Card from "./Card";

export const Ships = (props) => {
  // const { ships, setShips } = useState({ data });
  // console.log("data: ", props.data);
  // const renderShips = useEffect(() => {
  //   console.log("ships: ", ships);
  // }, [ships]);

  const onClick = (ship, index) => {
    console.log(`${ship.name}: ${index}`);
  };

  return (
    <div className="ships-container">
      {props.data.map((ship, index) => {
        return <Card ship={ship} index={index} key={index} onClick={onClick} />;
      })}
    </div>
  );
};
