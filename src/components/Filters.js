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

const onClick = (filter) => {
  // console.log(`You clicked the ${filter} button`);
  const clearFiltersButton = document.getElementById("clear-filters");
  if (filter && filter !== " ") {
    clearFiltersButton.classList.remove("disabled");
  }
  const filterElems = document.querySelectorAll(
    ".ship[data-filters*='" + filter + "']"
  );
  const allElems = document.querySelectorAll(".ship");
  allElems.forEach((el) => {
    el.classList.remove("show");
  });
  filterElems.forEach((el) => {
    el.classList.add("show");
  });
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

export const Filters = () => {
  const [textFilter, setTextFilter] = useState(" ");

  const handleChange = (value) => {
    !value ? (value = " ") : setTextFilter(value);
    console.log(textFilter);
    onClick(textFilter);
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
                onClick(filter.short);
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
                onClick(filter.toLowerCase());
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
                onClick(filter.replace(/\s+/g, "-").toLowerCase());
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
          onChange={(e) => {
            e.preventDefault();
            handleChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
