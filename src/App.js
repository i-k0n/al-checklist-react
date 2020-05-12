import React from "react";
import { Filters } from "./components/Filters";
import { Ships } from "./components/Ships";

function App() {
  return (
    <div className="wrapper">
      <Filters />
      <Ships />
    </div>
  );
}

export default App;
