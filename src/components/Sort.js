import React from "react";
import SortButton from "./SortButton";

const onClick = () => {
  console.log("You clicked a button");
};

const sortBy = ["ID", "Name", "Class", "Rarity"];

export const Sort = ({ setSortType }) => {
  // toggle hiding of obtained ships
  const onChange = (e) => {
    const filterElems = document.querySelectorAll(".completed");

    if (e.target.checked) {
      // hide obtained ships
      filterElems.forEach((el) => {
        el.classList.remove("show");
      });
      localStorage.setItem("isHidden", "true");
    } else {
      // show obtained ships
      filterElems.forEach((el) => {
        el.classList.add("show");
      });
      localStorage.setItem("isHidden", "false");
    }
  };

  const onClick = (e) => {
    const sortProperty = e.target.getAttribute("data-filter");
    console.log(e.target.getAttribute("data-filter"));
    setSortType(sortProperty);
  };

  return (
    <div id="sort">
      <p className="sort-text">Sort By: </p>
      {sortBy.map((sort) => {
        return (
          <SortButton
            onClick={(e) => onClick(e)}
            sort={sort.toLowerCase()}
            key={sort}>
            {sort}
          </SortButton>
        );
      })}
      <button id="collapse-filters">
        <span>Collapse&nbsp;Filters</span>
        <img src="./assets/img/collapse-arrow.svg" alt="collaps arrow" />
      </button>
      <input id="hide-toggle" type="checkbox" onChange={onChange} />
      <label id="hide-owned" data-filter="completed" htmlFor="hide-toggle">
        Hide Owned
      </label>
    </div>
  );
};
