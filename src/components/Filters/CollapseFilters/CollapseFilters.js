import React from 'react'
import { CollapseFilterButton, ArrowIcon } from './CollapseFilters.styles';

const CollapseFilters = ({ handleCollapse, collapseFilters }) => {
  return (
    <div className="collapse-filters-container">
      <CollapseFilterButton id="collapse-filters" onClick={handleCollapse}>
        <span>{collapseFilters ? `Expand Filters` : `Collapse Filters`}</span>
        <ArrowIcon
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="svg-inline--fa fa-angle-double-up fa-w-10 fa-2x"
          collapseFilters={collapseFilters}
        >
          <path
            fill="currentColor"
            d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"
            className=""
          ></path>
        </ArrowIcon>
      </CollapseFilterButton>
    </div>
  );
}

export default CollapseFilters;