import React from 'react'
import { SearchBar, SearchContainer, ShowingResults } from './SearchFilter.styles';

function SearchFilter(props) {

  const handleChange = (e) => {e.preventDefault();
    const keyword = e.target.value
    props.setTextFilter(keyword.toLowerCase());
  };

  return (
    <SearchContainer id="search-filter">
      <SearchBar
          type="search"
          name="textFilter"
          id="textFilter"
          value={props.textFilter}
          placeholder="Search"
          onChange={(e) => handleChange(e)}
        />
        <ShowingResults className="showing-results">
          {`Showing results ${props.returnedShips || 0} / ${props.filteredShips.length}`}
        </ShowingResults>
    </SearchContainer>
  )
}

export default SearchFilter
