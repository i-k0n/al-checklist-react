import React from "react";
import Card from "./Card";
import * as shipsData from "../data/ships4.json";

const ships = shipsData.default;
console.log("ships: ", ships);

export const Ships = () => {
  return (
    <div className="ships-container">
      {ships.map((ship, index) => {
        return <Card ship={ship} index={index} key={index} />;
      })}
    </div>
  );
};
