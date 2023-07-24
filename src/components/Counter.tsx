import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { DECREASE, INCREASE } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.counter.number);

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={() => dispatch(INCREASE())}>+1</button>
        <button onClick={() => dispatch(DECREASE())}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
