import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  inrementByValAction,
} from "../redux/actions/counterActions";

function Counter() {
  //   const [Count, setCount] = useState(0);

  const Count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    // setCount(Count + 1);
    dispatch(incrementAction());
  };

  const handleDecrease = () => {
    // setCount(Count - 1);
    dispatch(decrementAction());
  };
  const handleIncreaseByValue = (val) => {
    // setCount(Count - 1);
    dispatch(inrementByValAction(val));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        redux - Hooks - useSelector - useDispatch - action creators -
        REDUX_DEVTOOLS_EXTENSION
      </h2>
      <p>{Count}</p>
      <button onClick={handleDecrease}>decrease[1]</button>
      <button onClick={handleIncrease}> increase[1]</button>
      <button onClick={() => handleIncreaseByValue(3)}>incBy[3]</button>
    </div>
  );
}
export default Counter;
