import React, { useEffect } from "react";

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
  const UpdateCounters = (faction) => {
    useEffect(() => {
      console.log("faction: ", faction);
      console.log(
        document.querySelectorAll('.ship[data-filters*="' + faction + '"]')
      );
      let factionCounter = document.querySelectorAll(
        '.ship[data-filters*="' + faction + '"]'
      );
      console.log("factionCounter: ", factionCounter);
      let factionCompleted = document.querySelectorAll(
        `.ship[data-filters*="${faction}"].completed`
      );
      console.log("factionCompleted: ", factionCompleted);
      document.querySelector(
        "li.counter." + faction + " > span"
      ).textContent = ` ${factionCompleted.length} / ${factionCounter.length}`;
    }, []);
  };

  return (
    <ul className="counters">
      {counters.map((counter) => {
        return (
          <li className={`counter ${counter.short}`} key={counter.full}>
            {counter.full}
            <span>{UpdateCounters(counter.short)}</span>
          </li>
        );
      })}
    </ul>
  );
};
