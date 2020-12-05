import React, { Fragment, useState } from "react";
import Filters from "./components/Filters";
import Ships from "./components/Ships";
import Sort from "./components/Sort/Sort";
import Counter from "./components/Counter";
import * as shipsData from "./data/ships4.json";

function App() {
  const [data, setData] = useState(shipsData.default);
  const [faction, setFaction] = useState("total");
  const [sortType, setSortType] = useState("id");
  const [textFilter, setTextFilter] = useState("");
  const [currentFilter, setCurrentFilter] = useState("");

  return (
    <Fragment>
      <div className="checklist-header">
        <Filters
          data={data}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          setTextFilter={setTextFilter}
          textFilter={textFilter}
        />
        <Sort
          data={data}
          setSortType={setSortType}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
        <Counter />
      </div>
      <Ships
        data={data}
        setData={setData}
        faction={faction}
        setFaction={setFaction}
        sortType={sortType}
        setSortType={setSortType}
        textFilter={textFilter}
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
