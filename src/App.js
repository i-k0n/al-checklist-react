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
  const [hideCollab, setHideCollab] = useState(false);
  const [hideOwned, setHideOwned] = useState(JSON.parse(localStorage.getItem("isHidden")) || false);
  const [collapseFilters, setCollapseFilters] = useState(false);

  return (
    <Fragment>
      <div className="checklist-header">
        <Filters
          data={data}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          setTextFilter={setTextFilter}
          textFilter={textFilter}
          collapseFilters={collapseFilters}
        />
        <div className="collapse-filters-container">
            <button id="collapse-filters" onClick={() => setCollapseFilters(prevState => !prevState)}>
                <span>{!collapseFilters ? `Expand Filters` : `Collapse Filters`}</span>
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-double-up fa-w-10 fa-2x">
                    <path 
                      fill="currentColor" 
                      d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z" 
                      className="">
                    </path>
                </svg>
            </button>
        </div>
        <Sort
          data={data}
          setSortType={setSortType}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          hideCollab={hideCollab}
          setHideCollab={setHideCollab}
          hideOwned={hideOwned}
          setHideOwned={setHideOwned}
        />
        <Counter 
          data={data}
          faction={faction}
          hideCollab={hideCollab}
        />
      </div>
      <Ships
        data={data}
        setData={setData}
        faction={faction}
        setFaction={setFaction}
        sortType={sortType}
        setSortType={setSortType}
        textFilter={textFilter}
        hideCollab={hideCollab}
        hideOwned={hideOwned}
        setHideOwned={setHideOwned}
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
