import React from "react";

const counters = [
  {
    full: "Eagle Union",
    short: "eagle",
  },
  {
    full: "Royal Navy",
    short: "royal",
  },
  {
    full: "Sakura Empire",
    short: "sakura",
  },
  {
    full: "Ironblood",
    short: "ironblood",
  },
  {
    full: "Dragon Empery",
    short: "dragon",
  },
  {
    full: "Sardegna Empire",
    short: "sardegna",
  },
  {
    full: "Northern Parliament",
    short: "northern",
  },
  {
    full: "Vichya Dominion",
    short: "vichya",
  },
  {
    full: "Iris Libre",
    short: "iris",
  },
  {
    full: "Other",
    short: "other",
  },
  {
    full: "Total",
    short: "total",
  },
];

export const Counter = () => {
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
