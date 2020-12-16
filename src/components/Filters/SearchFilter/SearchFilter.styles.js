import styled from "@emotion/styled";

const SearchContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
  width: 940px;
  margin: 0 auto;
`;

const SearchBar = styled.input`
  height: 32px;
  padding: 0 12px;
  border: 1px solid #d3d3d3;
  border-radius: 0.25em;
  margin: 8px;
  margin-left: 1px;
  width: 100%;
  background-color: #f9f9f9;

  &:focus {
    background-color: #fff;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
  }

  &:hover::-webkit-search-cancel-button {
    opacity: 0.3;
    pointer-events: all;
  }

  &:focus::-webkit-search-cancel-button {
    opacity: 0.3;
    pointer-events: all;
  }
`;

const ShowingResults = styled.span`
  margin-right: 3px;
  width: max-content;
  white-space: nowrap;
`;

export { SearchContainer, SearchBar, ShowingResults };