import React, { useState, useReducer } from "react";

function reducer(state, action) {
  //action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case 'Increment':
      return { value: state.value + 1 };
    case 'Decrement':
      return { value: state.value - 1 };
      default:
        // 아무것도 해당되지 않을때 기존 상태 반환
        return state;
  }
}

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'Increment'})}>+1</button>
      <button onClick={() => dispatch({ type: 'Decrement'})}>-1</button>
    </div>
  );
};

export default Counter;
