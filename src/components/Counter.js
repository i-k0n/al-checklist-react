import React from "react";

export const Counter = ({ counters }) => {
  return (
    <ul className="counters">
      {counters.map((counter) => {
        return (
          <li className={`counter ${counter.short}`} key={counter.full}>
            {counter.full}
            <span></span>
          </li>
        );
      })}
    </ul>
  );
};
