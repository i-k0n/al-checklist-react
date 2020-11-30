import React from "react";
import counterData from "./counterData"


const Counter = () => {

  const counters = []; 
  counterData.forEach((counter) => {
    const currentFaction = counter.short;
    let completed, total;

    if (currentFaction === "total") {
      completed = document.querySelectorAll(`.ship.completed[data-collection='true']`).length;
      total = document.querySelectorAll(`.ship[data-collection='true']`).length;
    } else {
      completed = document.querySelectorAll(`.ship.completed[data-filters*='${currentFaction}']`).length;
      total = document.querySelectorAll(`.ship[data-filters*='${currentFaction}']`).length;
    }

    // console.log(currentFaction + ": " + completed + " / " + total)

    counters.push(
      <li className={`counter ${counter.short}`} key={counter.full}>
        {counter.full}
        <span>
          {`${completed} / ${total}`}
        </span>
      </li>
    )
  })

  return (
    <ul className="counters">
      {counters}
    </ul>
  );
};

export default Counter;