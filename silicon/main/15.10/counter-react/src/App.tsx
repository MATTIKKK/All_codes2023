import React, { useState } from "react";
import ShowCounter from "./components/ShowCounter";
import IncreaseCounter from "./components/ChangeCounter";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(counter + 1);
  }

  const resetCount = () => {
    setCounter(0);
  }

  return (
    <div>
      <ShowCounter counter={counter} />
      <IncreaseCounter increaseCount={increaseCount} isMax={counter > 9} resetCount={resetCount} isZero={counter === 0}/>
    </div>
  );
};

export default App;
