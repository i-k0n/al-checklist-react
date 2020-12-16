import React, { Fragment, useState, useEffect, useRef } from "react";
import Filters from "./components/Filters";
import Ships from "./components/Ships";
import Sort from "./components/Sort/Sort";
import Counter from "./components/Counter";
import * as shipsData from "./data/ships4.json";
import { ChecklistHeader } from "./App.styles";
import CollapseFilters from "./components/Filters/CollapseFilters"

let collapseDelay = false;

function App() {
  const [data, setData] = useState(shipsData.default);
  const [faction, setFaction] = useState("total");
  const [sortType, setSortType] = useState("id");
  const [factionFilter, setFactionFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [rarityFilter, setRarityFilter] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [currentFilter, setCurrentFilter] = useState("");
  const [hideCollab, setHideCollab] = useState(false);
  const [hideOwned, setHideOwned] = useState(JSON.parse(localStorage.getItem("isHidden")) || false);
  const [collapseFilters, setCollapseFilters] = useState(false);
  const [returnedShips, setReturnedShips] = useState(0);
  // store filters container height in state since we have to let it render before we can grab the element height
  const [filtersContainerHeight, setFiltersContainerHeight] = useState(0);

  // use a ref to get the height of the DOM element
  const filtersContainerRef = useRef(null);

  const headerRef = useRef(null);
  const counterRef = useRef(null);
  
  const handleCollapse = () => {
    collapseDelay = true;
    setCollapseFilters(prevState => !prevState);
    setTimeout(() => collapseDelay = false, 1000);
  }

  // handle hiding of controls while scrolling
  var prevScrollpos = window.pageYOffset;

  const handleScroll =  () => {
    var currentScrollPos = window.pageYOffset;

    const controls = headerRef.current;
    const counters = counterRef.current.offsetHeight;
    var headerSize = controls.offsetHeight;
    if (prevScrollpos > currentScrollPos) {
      // if (scrolling up)
      controls.style.top = "0";
    } else {
      // else (scrolling down)
      // && if scrolling isn't caused by expanding/collapsing filters
      if (prevScrollpos > headerSize && !collapseDelay) {
        controls.style.top = "-" + (headerSize - counters - 5) + "px";
      }
    }
    prevScrollpos = currentScrollPos;
  };

  // update state with element height once it has rendered to the DOM
  useEffect(() => {
    setFiltersContainerHeight(filtersContainerRef.current.clientHeight);
  }, [filtersContainerHeight])

  // create event listener to hide sort controls when scrolling the page
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setReturnedShips(document.querySelectorAll('.ship').length);
 })

  return (
    <Fragment>
      <ChecklistHeader className="checklist-header" ref={headerRef}>
        <Filters
          data={data}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          setFactionFilter={setFactionFilter}
          factionFilter={factionFilter}
          setTypeFilter={setTypeFilter}
          typeFilter={typeFilter}
          setRarityFilter={setRarityFilter}
          rarityFilter={rarityFilter}
          setTextFilter={setTextFilter}
          textFilter={textFilter}
          collapseFilters={collapseFilters}
          filtersContainerHeight={filtersContainerHeight}
          forwardedRef={filtersContainerRef}
          returnedShips={returnedShips}
          setReturnedShips={setReturnedShips}
        />
        <CollapseFilters 
          handleCollapse={handleCollapse}
          collapseFilters={collapseFilters}
        />
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
          forwardedRef={counterRef}
        />
      </ChecklistHeader>
      <Ships
        data={data}
        setData={setData}
        faction={faction}
        setFaction={setFaction}
        factionFilter={factionFilter}
        typeFilter={typeFilter}
        rarityFilter={rarityFilter}
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
