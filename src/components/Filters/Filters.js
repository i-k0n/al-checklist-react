import React from "react";
import FilterButton from "./FilterButton";
import { FiltersContainer, FactionFiltersContainer, TypeFiltersContainer, RarityFiltersContainer } from "./Filters.styles";
import SearchFilter from "./SearchFilter";
import { factionFilters, typeFilters, rarityFilters } from "./filterData";

const Filters = (props) => {
  const factionClick = (faction) => {
    const filterList = [...props.factionFilter]
    const filterIndex = filterList.indexOf(faction)
    if (filterIndex === -1) {
      filterList.push(faction);
    } else {
      filterList.splice(filterIndex, 1)
    }
    console.log("filter list: ", filterList)
    props.setFactionFilter(filterList)
  }

  const typeClick = (type) => {
    const filterList = [...props.typeFilter]
    const filterIndex = filterList.indexOf(type)
    if (filterIndex === -1) {
      filterList.push(type);
    } else {
      filterList.splice(filterIndex, 1)
    }
    console.log("filter list: ", filterList)
    props.setTypeFilter(filterList)
  }

  const rarityClick = (rarity) => {
    const filterList = [...props.rarityFilter]
    const filterIndex = filterList.indexOf(rarity)
    if (filterIndex === -1) {
      filterList.push(rarity);
    } else {
      filterList.splice(filterIndex, 1)
    }
    console.log("filter list: ", filterList)
    props.setRarityFilter(filterList)
  }


  const clearFilters = () => {
    props.setFactionFilter([])
    props.setTypeFilter([])
    props.setRarityFilter([])
    props.setTextFilter("")
  }

  return (
    <FiltersContainer 
      className="filters"
      collapseFilters={props.collapseFilters}
      ref={props.forwardedRef}
      containerHeight={props.filtersContainerHeight}
    >
      <FactionFiltersContainer>
        {factionFilters.map((filter, i) => {
          return (
            <FilterButton
              onClick={e => factionClick(filter.full)}
              dataFilter={filter.short}
              key={filter.short}>
              <img
                src={require("../../assets/icons/icon-faction-" + filter.short + ".png")}
                alt={filter.full}
              />
              {filter.full}
            </FilterButton>
          );
        })}
      </FactionFiltersContainer>
      <TypeFiltersContainer id="type-filters" className="button-container">
        {typeFilters.map((filter, i) => {
          return (
            <FilterButton
              onClick={e => typeClick(filter)}
              dataFilter={filter.toLowerCase()}
              key={filter}>
              {filter === "AR" ? "Repair" : filter}
            </FilterButton>
          );
        })}
      </TypeFiltersContainer>
      <RarityFiltersContainer id="rarity-filters" className="button-container">
        {rarityFilters.map((filter, i) => {
          return (
            <FilterButton
              onClick={e => rarityClick(filter)}
              dataFilter={filter.replace(/\s+/g, "-").toLowerCase()}
              key={filter}>
              {filter}
            </FilterButton>
          );
        })}
        <FilterButton
          key={"clear-filters"}
          disabled={props.textFilter}
          onClick={() => {
            clearFilters();
          }}
        >
          Clear Filters
        </FilterButton>
        
      </RarityFiltersContainer>
      <SearchFilter 
          setTextFilter={props.setTextFilter}
          textFilter={props.textFilter}
          returnedShips={props.returnedShips}
          setReturnedShips={props.setReturnedShips}
          filteredShips={props.data}
        />
    </FiltersContainer>
  );
};

export default Filters;