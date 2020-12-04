import React from 'react'

function SearchFilter(props) {

  const handleChange = (e) => {
    e.preventDefault();
    const keyword = e.target.value
    props.setTextFilter(keyword.toLowerCase());
    // const countTotal = document.querySelectorAll(".ship").length;
    // setTotalShips(countTotal);
    if (props.textFilter !== "") {
      // onClick(keyword, props.textFilter);
    }
  };

  return (
    <div>
      <input
          type="text"
          name="textFilter"
          id="textFilter"
          value={props.textFilter}
          placeholder="Search"
          onChange={(e) => handleChange(e)}
        />
        <span className="showing-results">
          {props.textFilter
            ? `Showing results ${props.filteredShips.length || 0} / ${props.totalShips}`
            : null}
        </span>
    </div>
  )
}

export default SearchFilter
