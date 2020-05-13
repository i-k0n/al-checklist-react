import React, { Fragment } from "react";
import { Filters } from "./components/Filters";
import { Ships } from "./components/Ships";
import { Sort } from "./components/Sort";
import { Counter } from "./components/Counter";

function App() {
  return (
    <Fragment>
      <div className="checklist-header">
        <Filters />
        <Sort />
        <Counter />
      </div>
      <Ships />
    </Fragment>
  );
}

export default App;
