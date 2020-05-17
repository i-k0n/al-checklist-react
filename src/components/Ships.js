import React, { useState, useEffect } from "react";
import Card from "./Card";

export const Ships = (props) => {
  return (
    <div className="ships-container">
      {props.data.map((ship, index) => {
        return <Card ship={ship} index={index} key={index} />;
      })}
    </div>
  );
};
