import {useState} from "react";

const Counter = () => {
    const [count, setCount]= useState(0);
    
    return(
    <div>
        <h1>{count}</h1>
        <button 
          onClick={() => {
            setCount(count+1); // 이런식으로 state의 상태를 바꿔주며 "리렌더링"
          }}
      >
        +
        </button>
        <button
        onClick={() => {
          setCount(count-1);
        }}
        >
        -
        </button>
      </div>
    );
  }

  export default Counter;
  