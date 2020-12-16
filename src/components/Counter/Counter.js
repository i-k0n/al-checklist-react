import React from "react";
import counterData from "./counterData";
import { CounterContainer, CounterItem, FactionName } from "./Counter.styles";


const Counter = ({ data, forwardedRef }) => {

  const counters = []; 
  counterData.forEach((counter) => {
    const currentFaction = counter.full;
    let completed, total;

    if (currentFaction === "Total") {
      completed = data.filter(ship => ship.collection && ship.checked).length;
      total = data.filter(ship => ship.collection).length;
      total +=  ` (${((completed / total) * 100).toFixed(1)}%)`;
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
        <FactionName>
          {counter.full}
        </FactionName>
        {` ${completed} / ${total}`}
      </CounterItem>
    )
  })

  return (
    <CounterContainer className="counters" ref={forwardedRef}>
      {counters}
    </CounterContainer>
  );
};

export default Counter;