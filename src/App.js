import React, { Fragment } from "react";
import { Filters } from "./components/Filters";
import { Ships } from "./components/Ships";
import { Sort } from "./components/Sort";
import { Counter } from "./components/Counter";
import * as shipsData from "./data/ships4.json";

function App() {
  const data = shipsData.default;
  return (
    <Fragment>
      <div className="checklist-header">
        <Filters data={data} />
        <Sort data={data} />
        <Counter data={data} />
      </div>
      {!data ? "Loading ships..." : <Ships data={data} />}
    </Fragment>
  );
}

export default App;
