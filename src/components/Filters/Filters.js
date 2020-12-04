import React, { useState, useEffect } from "react";
import { FilterButton } from "./FilterButton";
import SearchFilter from "./SearchFilter";

const factionFilters = [
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
    full: "Universal Exchange",
    short: "universal",
  },
];

const typeFilters = [
  "Vanguard",
  "Main",
  "DD",
  "CL",
  "CA",
  "BB",
  "CV",
  "AR",
  "SS",
  "BM",
];

const rarityFilters = [
  "Common",
  "Rare",
  "Elite",
  "Super Rare",
  "Ultra Rare",
  "Collab",
  "Retrofit",
];

export { factionFilters, typeFilters, rarityFilters };

const Filters = (props) => {
  /* eslint-disable no-unused-vars */
  const [filteredShips, setFilteredShips] = useState(0);
  const [totalShips, setTotalShips] = useState(0);
  /* eslint-enable no-unused-vars */

  // const onClick = (e, filter, type) => {
  //   // console.log(`You clicked the ${filter} button`);
  //   // console.log("type: ", type);
  //   // console.log(".ship[data-" + type + "*='" + filter + "']");

  //   props.setCurrentFilter(filter);

  //   if (!type) {
  //     type = "filters";
  //   }

  //   // remove disabled state on Clear Filters button
  //   const clearFiltersButton = document.getElementById("clear-filters");
  //   const hideToggle = document.getElementById("hide-toggle").checked;
  //   let filterElems;

  //   if (filter && filter !== " ") {
  //     // remove disbale class from clear filters button
  //     clearFiltersButton.classList.remove("disabled");

  //     if (hideToggle) {
  //       filterElems = document.querySelectorAll(
  //         ".ship[data-" + type + "*='" + filter + "']:not(.completed)"
  //       );
  //       // set filter state to chosen filter
  //       setFilteredShips(filterElems);
  //     } else {
  //       filterElems = document.querySelectorAll(
  //         ".ship[data-" + type + "*='" + filter + "']"
  //       );
  //       // set filter state to chosen filter
  //       setFilteredShips(filterElems);
  //     }

  //     // get all elements, then remove show class from them
  //     const allElems = document.querySelectorAll(".ship");
  //     allElems.forEach((el) => {
  //       el.classList.remove("show");
  //     });
  //     // put show class back onto elements that we want filtered
  //     filterElems.forEach((el) => {
  //       el.classList.add("show");
  //     });

  //   }

  //   document.querySelectorAll(`.filters .button`).forEach((button) => {
  //     button.classList.remove("is-checked");
  //   });
  //   if (e.target) {
  //     e.target.classList.add("is-checked");
  //   }
  // };

  // const clearFilters = () => {
  //   const clearFiltersButton = document.getElementById("clear-filters");
  //   const hideToggle = document.getElementById("hide-toggle").checked;
  //   const searchText = document.getElementById("textFilter");
  //   const allElems = document.querySelectorAll(".ship");
  //   const unobtainedElems = document.querySelectorAll(".ship:not(.completed)");

  //   // clear currentFilter state
  //   props.setCurrentFilter("");

  //   searchText.value = " ";

  //   if (hideToggle) {
  //     // show only unobtained ships
  //     unobtainedElems.forEach((el) => {
  //       el.classList.remove("show");
  //       el.classList.add("show");
  //     });

  //     clearFiltersButton.classList.add("disabled");
  //   } else {
  //     // show all ships
  //     allElems.forEach((el) => {
  //       el.classList.remove("show");
  //       el.classList.add("show");
  //     });

  //     clearFiltersButton.classList.add("disabled");
  //   }
  // };

  // useEffect(() => {
  //   // onClick(props.textFilter);
  //   console.log(props.textFilter);
  // }, [props.textFilter]);

  return (
    <div className="filters">
      {/* <div id="faction-filters" className="button-container">
        {factionFilters.map((filter, i) => {
          return (
            <FilterButton
              // onClick={(e) => {
              //   onClick(e, filter.short, "filters");
              // }}
              dataFilter={filter.short}
              key={filter.short}>
              <img
                src={`./assets/img/icon-faction-${filter.short}.png`}
                alt={filter.full}
              />
              {filter.full}
            </FilterButton>
          );
        })}
      </div> */}
      {/* <div id="type-filters" className="button-container">
        {typeFilters.map((filter, i) => {
          return (
            <FilterButton
              // onClick={(e) => {
              //   onClick(e, filter.toUpperCase(), "class");
              // }}
              dataFilter={filter.toLowerCase()}
              key={filter}>
              {filter === "AR" ? "Repair" : filter}
            </FilterButton>
          );
        })}
      </div> */}
      <div id="rarity-filters" className="button-container">
        {rarityFilters.map((filter, i) => {
          return (
            <FilterButton
              // onClick={(e) => {
              //   onClick(
              //     e,
              //     filter.replace(/\s+/g, "-").toLowerCase(),
              //     "filters"
              //   );
              // }}
              dataFilter={filter.replace(/\s+/g, "-").toLowerCase()}
              key={filter}>
              {filter}
            </FilterButton>
          );
        })}
        <button
          id="clear-filters"
          className="button disabled"
          data-filter=""
          // onClick={() => {
          //   clearFilters();
          // }}
        >
          Clear Filters
        </button>
        <SearchFilter 
          setTextFilter={props.setTextFilter}
          textFilter={props.textFilter}
          totalShips={totalShips}
          filteredShips={filteredShips}
        />
      </div>
    </div>
  );
};

export default Filters;