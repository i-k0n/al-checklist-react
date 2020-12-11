import React from "react";
import counterData from "./counterData";
import { CounterContainer, CounterItem } from "./Counter.styles";


const Counter = ({ data }) => {

  const counters = []; 
  counterData.forEach((counter) => {
    const currentFaction = counter.full;
    let completed, total;

    if (currentFaction === "Total") {
      completed = data.filter(ship => ship.collection && ship.checked).length;
      total = data.filter(ship => ship.collection).length;
    } else if (currentFaction === "Collab") {
      completed = data.filter(ship => !ship.collection && ship.checked).length;
      total = data.filter(ship => !ship.collection).length;
    } else {
      completed = data.filter(ship => ship.faction === currentFaction && ship.collection && ship.checked).length;
      total = data.filter(ship => ship.faction === currentFaction).length;
    }

    // console.log(currentFaction + ": " + completed + " / " + total)

    counters.push(
      <CounterItem 
        className={`counter ${counter.short}`}
        faction={counter.short}
        key={counter.full}
        title={counter.full}
      >
        {counter.full}
        <span>
          {` ${completed} / ${total}`}
        </span>
      </CounterItem>
    )
  })

  return (
    <CounterContainer className="counters">
      {counters}
    </CounterContainer>
  );
};

export default Counter;