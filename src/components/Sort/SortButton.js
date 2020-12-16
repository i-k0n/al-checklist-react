import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  font-size: 13px;
  font-family: "Open Sans", sans-serif;
  padding: 5px 16px;
  align-items: center;
  display: inline-flex;
  white-space: nowrap;
  margin: 2.5px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 1px 0px 0px #e7e7e7;
  justify-content: center;
  color: #777;

  &.is-checked {
    background-color: #e2e2e2;
    font-weight: 500;
    color: #444;
  }

  &.is-checked:hover {
    cursor: default;
    background-color: #e2e2e2;
  }

  &:hover {
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

export default function SortButton({ children, onClick }) {
  return (
    <StyledButton
      className={(children === "ID" ? "is-checked" : "")}
      onClick={onClick}>
      {children}
    </StyledButton>
  );
}
