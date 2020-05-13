import React from "react";
import { FilterButton } from "./FilterButton";

const onClick = () => {
  console.log("You clicked a button");
};

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
  return (
    <div className="filters">
      <div id="faction-filters" className="button-container">
        {factionFilters.map((filter) => {
          return (
            <FilterButton
              onClick={onClick}
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
        {typeFilters.map((filter) => {
          return (
            <FilterButton
              onClick={onClick}
              dataFilter={filter.toLowerCase()}
              key={filter}>
              {filter === "AR" ? "Repair" : filter}
            </FilterButton>
          );
        })}
      </div>
      <div id="rarity-filters" className="button-container">
        {rarityFilters.map((filter) => {
          return (
            <FilterButton
              onClick={onClick}
              dataFilter={filter.replace(/\s+/g, "-").toLowerCase()}
              key={filter}>
              {filter}
            </FilterButton>
          );
        })}
        <button id="clear-filters" className="button disabled" data-filter="">
          Clear Filters
        </button>
      </div>
    </div>
  );
};
