import styled from "@emotion/styled";

const FiltersContainer = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  position: relative;
  max-height: ${props => props.heightProp};
  overflow: hidden;
  opacity: ${props => props.collapseFilters ? "1" : "0"};
  transform: ${props => !props.collapseFilters ? `translateY(-${props.heightProp})` : "translateY(0)"};
  transition: transform 500ms ease-out;

  & p {
    text-align: center;
  }
`;

export { FiltersContainer };