import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { decreaseAsync, increaseAsync } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.counter.number);

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(increaseAsync())}>+1</button>
        <button onClick={() => dispatch(decreaseAsync())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
