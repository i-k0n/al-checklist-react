import React, { useState, useEffect } from "react";
import { FilterButton } from "./FilterButton";

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

export const Filters = () => {
  const [textFilter, setTextFilter] = useState("");
  const [filteredShips, setFilteredShips] = useState(null);

  const onClick = (filter, type) => {
    // console.log(`You clicked the ${filter} button`);
    // console.log("type: ", type);
    // console.log(".ship[data-" + type + "*='" + filter + "']");
    if (!type) {
      type = "filters";
    }

    // remove disabled state on Clear Filters button
    const clearFiltersButton = document.getElementById("clear-filters");

    if (filter && filter !== " ") {
      clearFiltersButton.classList.remove("disabled");

      const filterElems = document.querySelectorAll(
        ".ship[data-" + type + "*='" + filter + "']"
      );

      setFilteredShips(filterElems);

      const allElems = document.querySelectorAll(".ship");
      allElems.forEach((el) => {
        el.classList.remove("show");
      });
      filterElems.forEach((el) => {
        el.classList.add("show");
      });
    }
  };

  const clearFilters = () => {
    const clearFiltersButton = document.getElementById("clear-filters");
    const searchText = document.getElementById("textFilter");
    const allElems = document.querySelectorAll(".ship");

    searchText.value = " ";

    allElems.forEach((el) => {
      el.classList.remove("show");
      el.classList.add("show");
    });

    clearFiltersButton.classList.add("disabled");
  };

  const handleChange = (value) => {
    setTextFilter(value);
    console.log(textFilter);
    // if (textFilter !== "") {
    onClick(textFilter);
    // }
  };

  useEffect(() => {
    onClick(textFilter);
  }, [textFilter]);

  return (
    <div className="filters">
      <div id="faction-filters" className="button-container">
        {factionFilters.map((filter) => {
          return (
            <FilterButton
              onClick={() => {
                onClick(filter.short, "filters");
              }}
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
      </div>
      <div id="type-filters" className="button-container">
        {typeFilters.map((filter, i) => {
          return (
            <FilterButton
              onClick={() => {
                onClick(filter.toUpperCase(), "class");
              }}
              dataFilter={filter.toLowerCase()}
              key={filter}>
              {filter === "AR" ? "Repair" : filter}
            </FilterButton>
          );
        })}
      </div>
      <div id="rarity-filters" className="button-container">
        {rarityFilters.map((filter, i) => {
          return (
            <FilterButton
              onClick={() => {
                onClick(filter.replace(/\s+/g, "-").toLowerCase(), "filters");
              }}
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
          onClick={() => {
            clearFilters();
          }}>
          Clear Filters
        </button>
        <input
          type="text"
          name="textFilter"
          id="textFilter"
          value={textFilter}
          placeholder="Search"
          onChange={(e) => {
            e.preventDefault();
            handleChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
