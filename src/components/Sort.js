import React from "react";
import SortButton from "./SortButton";

const onClick = () => {
  console.log("You clicked a button");
};

const sortBy = ["ID", "Name", "Class", "Rarity"];

export const Sort = () => {
  return (
    <div id="sort">
      <p className="sort-text">Sort By: </p>
      {sortBy.map((sort) => {
        return (
          <SortButton onClick={onClick} sort={sort.toLowerCase()} key={sort}>
            {sort}
          </SortButton>
        );
      })}
      <button id="collapse-filters">
        <span>Collapse&nbsp;Filters</span>
        <img src="./assets/img/collapse-arrow.svg" alt="collaps arrow" />
      </button>
      <input id="hide-toggle" type="checkbox" />
      <label id="hide-owned" data-filter="completed" htmlFor="hide-toggle">
        Hide Owned
      </label>
    </div>
  );
};
