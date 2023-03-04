import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  return (
    <>
      <h1>Count is : {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
