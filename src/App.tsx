import React from "react";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Sample from "./components/Sample";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Todos />
      <hr />
      <Sample />
    </div>
  );
}

export default App;
