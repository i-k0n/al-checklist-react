import React, { Fragment, useState, useEffect } from "react";
import { Filters } from "./components/Filters";
import { Ships } from "./components/Ships";
import { Sort } from "./components/Sort";
import { Counter } from "./components/Counter";
import * as shipsData from "./data/ships4.json";

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

function App() {
  const [data, setData] = useState(shipsData.default);
  const [faction, setFaction] = useState(["total", Math.random()]);
  const [sortType, setSortType] = useState("name");

  const updateCounters = (shipFaction) => {
    // console.log("faction: ", shipFaction);
    // map through counters to see if the faction has a corresponding counter
    var counterArray = counters.map((counter) =>
      counter.short.indexOf(shipFaction)
    );

    // check the indices of the new array for the corresponding counter
    // set it to update the total counter if it doesn't exist
    counterArray.indexOf(0) === -1 && (shipFaction = "total");

    let factionCounter, factionCompleted;
    if (shipFaction !== "total") {
      factionCounter = document.querySelectorAll(
        '.ship[data-filters*="' + shipFaction + '"]'
      );
      factionCompleted = document.querySelectorAll(
        `.ship[data-filters*="${shipFaction}"].completed`
      );
    } else {
      factionCounter = document.querySelectorAll(
        '.ship[data-filters]:not([data-filters*="collab"])'
      );
      factionCompleted = document.querySelectorAll(
        '.ship.completed:not([data-filters*="collab"])'
      );
    }
    document.querySelector(
      "li.counter." + shipFaction + " > span"
    ).textContent = ` ${factionCompleted.length} / ${factionCounter.length}`;
  };

  useEffect(() => {
    // console.log("use effect at start");
    counters.forEach((faction) => {
      updateCounters(faction.short);
    });
  }, []);

  useEffect(() => {
    // console.log("use layout effect");
    updateCounters(faction);
  });

  return (
    <Fragment>
      <div className="checklist-header">
        <Filters data={data} />
        <Sort data={data} setSortType={setSortType} />
        <Counter counters={counters} />
      </div>
      <Ships
        data={data}
        setData={setData}
        faction={faction}
        setFaction={setFaction}
        sortType={sortType}
        setSortType={setSortType}
      />
    </Fragment>
  );
}

export default App;

// to do
// fix filter logic so the don't cancel out each other
////   clear filters clears hide owned toggle
////   search filter cancels hide owned toggle
//   toggling off hideOwned cancels out filters and shows all obtained ships
// allow for selecting of multiple filters to be additive
// fix counters
// enable sorting
