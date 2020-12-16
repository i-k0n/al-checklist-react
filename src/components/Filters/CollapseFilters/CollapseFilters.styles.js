import styled from "@emotion/styled";

const CollapseFilterButton = styled.button`

`;

const ArrowIcon = styled.svg`
  color: #aaa;
  height: 16px;
  margin: 3px 8px;
  transition: transform 350ms 150ms ease;
  transform: ${({ collapseFilters }) => collapseFilters ? "rotate(180deg)" : "rotate(0)"};
`;

export { CollapseFilterButton, ArrowIcon };