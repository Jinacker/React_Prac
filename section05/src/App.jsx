import './App.css';
import {useState} from "react";

function App() { 
  const [count, setCount]= useState(0); // 리턴값이 state(현재값)과 setState(변화시키는값)이다.
  const [light, setLight] = useState("OFF");// 전구 껐다키기 state
  // 여기서 의문을 가질수있음 => 그냥 변수로 쓰면 안되나? 꼭 State 써야되나?
  // 리렌더링 될라면 State 써야됨 다른애 쓰면 가변적이지 않아서 바로바로 안바뀜.

  return (
  <>
    <div>
      <h1>{light}</h1>
      <button
        onClick = {() => {
          setLight(light === "OFF" ? "ON" : "OFF"); // 이걸로 껐따 킬수있게 상태 전달.
        }}
      > 
      {(light === "ON" ? "OFF" : "ON")}
      </button>



    </div>

    <div>
    
      <h1>{count}</h1>
      <button 
        onClick={() => {
          setCount(count+1); // 이런식으로 state의 상태를 바꿔주며 "리렌더링"
        }}
    >
      +
      </button>
    </div>
  </>
  );
}

export default App;
