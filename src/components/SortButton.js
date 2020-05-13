import React from "react";

export default function SortButton({ children, sort, onClick }) {
  return (
    <button
      id={`sort-${sort.toLowerCase()}`}
      className={(sort === "id" ? "is-checked " : "") + "button"}
      onClick={onClick}
      data-filter={sort}>
      {children}
    </button>
  );
}
