import "./styles.css";

import React from "react";
import Search from "./Search";

const items = ["Apple", "Banana", "Cherry", "Durian", "Elderberry"];

const App = () => {
  return (
    <div>
      <h1>Search Demo</h1>
      <Search items={items} />
    </div>
  );
};

export default App;
