import React from "react";
import { HideButtonLabel } from "./Sort.styles";
import SortButton from "./SortButton";

const sortBy = ["ID", "Name", "Class", "Rarity", "Map"];

const Sort = ({ setSortType, currentFilter, hideCollab, setHideCollab, hideOwned, setHideOwned }) => {

  const onHideCollabChange = () => {
    setHideCollab(prevState => !prevState)
  }

  const onHideOwnedChange = () => {
    setHideOwned(prevState => {
      localStorage.setItem("isHidden", !prevState);
      return !prevState
    })
    
    console.log("setting isHidden to: ", JSON.parse(localStorage.getItem("isHidden")))
  }

  // // toggle hiding of obtained ships
  // const onChange = (e) => {
  //   // get all obtained ships
  //   const filterElems = document.querySelectorAll(".completed");
  //   console.log("current filter is: ", currentFilter);
  //   console.log("filterElems: ", filterElems);

  //   if (e.target.checked) {
  //     // hide obtained ships
  //     filterElems.forEach((el) => {
  //       el.classList.remove("show");
  //     });
  //     localStorage.setItem("isHidden", "true");
  //   } else {
  //     // show obtained ships
  //     filterElems.forEach((el) => {
  //       if (
  //         el
  //           .getAttribute("data-filters")
  //           .indexOf(currentFilter.toLowerCase()) !== -1
  //       ) {
  //         console.log(el.getAttribute("data-name"));
  //         el.classList.add("show");
  //       }
  //     });
  //     localStorage.setItem("isHidden", "false");
  //   }
  // };

  const onClick = (e, sort) => {
    // sort by classAbbr if class is chosen, otherwise sort the chosen method
    let sortProperty = sort === "Class" ? "classAbbr" : sort.toLowerCase();
    // console.log(e.target.getAttribute("data-filter"));
    setSortType(sortProperty);

    document
      .querySelector("#sort > .is-checked")
      .classList.remove("is-checked");
    e.target.classList.add("is-checked");
  };

  return (
    <div id="sort">
      <p className="sort-text">Sort By: </p>
      {sortBy.map((sort) => {
        return (
          <SortButton
            onClick={(e) => onClick(e, sort)}
            key={sort}>
            {sort}
          </SortButton>
        );
      })}
      <div className="button-toggle">
        <input id="hide-collab-toggle" type="checkbox" onChange={onHideCollabChange} />
        <HideButtonLabel id="hide-collab" data-filter="completed" htmlFor="hide-collab-toggle">
          Hide Collab
        </HideButtonLabel>
      </div>
      <div className="button-toggle">
        <input id="hide-owned-toggle" type="checkbox" onChange={onHideOwnedChange} />
        <HideButtonLabel id="hide-owned" data-filter="completed" htmlFor="hide-owned-toggle">
          Hide Owned
        </HideButtonLabel>
      </div>
    </div>
  );
};

export default Sort;