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

export default Bulb;