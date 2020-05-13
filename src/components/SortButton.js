import React from "react";

export default function SortButton({ children, sort, onClick }) {
  return (
    <button
      id={`sort-${sort}`}
      className="button"
      onClick={onClick}
      data-filter={sort}>
      {children}
    </button>
  );
}
