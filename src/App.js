import React, { Fragment, useState } from "react";
import { Filters } from "./components/Filters";
import { Ships } from "./components/Ships";
import { Sort } from "./components/Sort";
import { Counter } from "./components/Counter";
import * as shipsData from "./data/ships4.json";

function App() {
  const [faction, setFaction] = useState("");
  const data = shipsData.default;

  const updateCounters = (faction) => {
    console.log("faction: ", faction);
    let factionCounter, factionCompleted;
    if (faction !== "total") {
      factionCounter = document.querySelectorAll(
        '.ship[data-filters*="' + faction + '"]'
      );
      factionCompleted = document.querySelectorAll(
        `.ship[data-filters*="${faction}"].completed`
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
      "li.counter." + faction + " > span"
    ).textContent = ` ${factionCompleted.length} / ${factionCounter.length}`;
  };

  return (
    <Fragment>
      <div className="checklist-header">
        <Filters data={data} />
        <Sort data={data} />
        <Counter
          data={data}
          updateCounters={updateCounters}
          faction={{ faction, setFaction }}
        />
      </div>
      <Ships data={data} />
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
