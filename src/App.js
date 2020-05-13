import React from "react";
import { Filters } from "./components/Filters";
import { Ships } from "./components/Ships";
import { Sort } from "./components/Sort";

function App() {
  return (
    <div className="wrapper">
      <Filters />
      <Sort />
      <Ships />
    </div>
  );
}

export default App;
