import styled from "@emotion/styled";

const FiltersContainer = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  position: relative;
  overflow: hidden;
  max-height: ${props => props.collapseFilters ? "0px" : "500px"};
  transition: max-height 250ms ease-in-out, opacity 150ms ease-in-out;
  will-change: max-height;

  & p {
    text-align: center;
  }
`;

const FactionFiltersContainer = styled.div`
  display: flex;
  width: 940px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const TypeFiltersContainer = styled.div`
  display: flex;
  width: 940px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const RarityFiltersContainer = styled.div`
  display: flex;
  width: 940px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export { FiltersContainer, FactionFiltersContainer, TypeFiltersContainer, RarityFiltersContainer };