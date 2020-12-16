import React from "react";
import { StyledButton } from "./FilterButton.styles";

const FilterButton = ({ children, dataFilter, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} data-filter={dataFilter} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default FilterButton;