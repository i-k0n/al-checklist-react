import React from "react";

export const FilterButton = ({ children, dataFilter, onClick }) => {
  return (
    <button className="button" onClick={onClick} data-filter={dataFilter}>
      {children}
    </button>
  );
};
