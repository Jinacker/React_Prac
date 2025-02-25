import './App.css';
import Bulb from "./components/Bulb.jsx";
import Counter from "./components/Counter.jsx";


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
