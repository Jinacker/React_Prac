import './App.css';
import {useState} from "react";

const Bulb = () => // 전구 컴포넌트 따로 만들기
{
  const [light, setLight] = useState("OFF");

  console.log(light);
  return ( // 시발 return 옆에 꼭 ( 붙이기) => 엔터해서 줄바꾸면 작동안함.
    <div>
      {light === "ON" ? 
      (<h1 style = {{backgroundColor: "orange"}}>ON</h1>) 
      : (<h1 style = {{backgroundColor: "gray"}}>OFF</h1>)}

      <button
        onClick = {() => {
          setLight(light === "OFF" ? "ON" : "OFF"); // 이걸로 껐따 킬수있게 상태 전달.
        }}
      > 
      {(light === "ON" ? "OFF" : "ON")}
      </button>
    </div>
  );
}

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



// 리랜더링이 일어나는 3가지 기준
// 1. state 변경시
// 2. props 변경시
// 3. 부모 컴포넌트 변경시 => 자식도 변경
// 이래서... => 컴포넌트는 최대한 분리해놓는게 좋다.
// 안그러면 + 버튼 눌렀는데 전구에까지 영향가서 리렌더됨.
// 더 나아가서 그냥 아예 다른 파일로 분리를 해놓는게 좋다. 
// 메인인 App은 최대한 간결할 수 있게 ㅇㅇ


function App() { 
  return (
  <>
    <Bulb/>
    <Counter/>
  </>
  );
}

export default App;
