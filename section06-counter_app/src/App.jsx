import './App.css';
import Viewer from "./components/Viewer.jsx";
import Controller from './components/Controller.jsx';
import {useState} from "react"; // 훅 불러오기

function App() {
  const [count, setCount] = useState(0); // 스테이트 만들기

  const onClickButton = (value) => { // 이벤트 핸들러 만들기 (controller에게 줄 예정)
    setCount(count + value);
  };

  return (// Viewer 에게 count state 전달
    <div className = "App">
    <h1>Simple Counter</h1>

    <section>
       <Viewer count = {count}></Viewer> 
    </section>

    <section>
       <Controller onClickButton = {onClickButton}></Controller>
    </section>
      
    </div>
  ) // Controller 에게는 아까 만든 이벤트 핸들러 props로 전달
} 

// Viewer 컴포넌트와 Controller 컴포넌트는 서로 부모 자식이 아님
// => 서로 어떤 값도 주고 받을수없다. => App 컴포넌트에 state를 만들어야한다.
// Props 전달이 부모 자식 간에만 가능하기 떄문.
// 계층구조임 => 이걸 state lifting (스테이트 끌어올리기)라고 부름 
// 데이터는 위에서 아래로 흐른다...! => 데이터를 직관적으로 관리 가능.

export default App
