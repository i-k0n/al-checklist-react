import React from "react";

export default function SortButton({ children, onClick }) {
  return (
    <button
      className={(children === "ID" ? "is-checked " : "") + "button"}
      onClick={onClick}>
      {children}
    </button>
  );
}
