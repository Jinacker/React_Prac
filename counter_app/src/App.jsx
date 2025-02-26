import { useState, useEffect, useRef } from 'react' // useEffect 훅 사용 예제
import Viewer from "./components/Viewer.jsx"
import Controller from './components/Controller.jsx'
import Even from './components/Even.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  const isMount = useRef(false);

  // 1. 마운트: 탄생
  useEffect(() => {
    console.log("mount");
  }, []); // 컴포넌트 마운트 => 딱 한번만 실행됨

  // 2. 업데이트: 리렌더링
  useEffect(() => {
    if (!isMount.current) // 요런식으로 값 정상적인지 판단하는 용도로 쓸수있음.
    {
      isMount.current = true;
      return;
    }
    console.log("update"); //두번째 인수로 배열은 안줌.
  }); // 업데이트 될떄마다 => 올라감

  // 3. 언마운트: 죽음
  // Even 컴포넌트에 만든 클린업 함수 확인.

  // // useEffect 사용법
  // useEffect(()=>{
  //   console.log("count: " + count + "/ input: " + input);
  // }, [count, input]) // 첫번째 인수: 콜백 함수 / 두번째 인수: 배열 (의존성 배열: deps 라고 불림)
  // // 이러면 이제 count 값이 바뀔때마다 콜백함수 실행. 

  const onClickButton = (value) => {
    setCount(count+value); // useEffect 안쓰고 그냥 여기에 넣어서 할수있냐 싶겠지만
    // setCount는 비동기로 작동됨 => 실행은 됐는데 끝난게 아님 => 그래서 결과 밀림. => useEffect 써야한다.
  };

  return (
    <>
     <div className = "App">
    <h1>심플 카운터</h1>
    <section>
      <input value ={input}
      onChange = {(e) => {
        setInput(e.target.value);
      }}
      ></input>
    </section>
     
     <section>
      <Viewer count = {count}/>
      {count % 2 === 0 ? <Even></Even> : null}
     </section>

     <section>
      <Controller onClickButton={onClickButton}></Controller>
     </section>
     </div>  
    </>
  )
}

export default App
