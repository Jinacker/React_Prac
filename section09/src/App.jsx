import { useState, useRef } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import Exam from './components/Exam.jsx';

// 임시 데이터 => 객체 배열로 미리 만들어둠.
const mockDate =[
  {
    id: 0,
    isDone:false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone:false, // 투두 체크박스를 만들라면 이걸 수정하는 함수를 만들어야함
    content: "빨래 하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone:false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockDate); // todo 리스트 저장할 객체 배열.
  const idRef = useRef(3); // 아이디용 Ref 생성 => 안겹치게 초기값 3

  const onCreate = (content) => { // 새로운 투두 리스트 업뎃
    const newTodo = {
      id: idRef.current++, // 아이디값 1씩 올라감 추가할때마다
      isDone: false,
      content: content,
      date: new Date().getTime()
    };
    //todos.push(newTodo); // 일케 못함 => state 변수는 setTodo를 거쳐야함
    setTodos([newTodo, ...todos]); // 이런식으로 스프레드로 넣어서 todos에 newTodo(우리가 입력한 값) 전달
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경

    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열

    setTodos(todos.map((todo)=> {
      if(todo.id === targetId)
      {
        return {
          ...todo, // 일단 todo 객체 요소 다 가져와서
          isDone: !todo.isDone // 기존 요소 반대로 넣기 => 토글
        }
      }
      return todo; // 삼항 연산자로 줄일수도 있다. 
    }))
  };

  const onDelete = (targetId) => {
    //인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };
  
  return (
    <div className = "App">
      {/* <Header></Header>
      <Editor onCreate = {onCreate} ></Editor>
      <List todos = {todos} onUpdate={onUpdate} onDelete = {onDelete}></List> */}
      /<Exam></Exam>
    </div>
  )
}

export default App


// 이번 프젝 배운점 정리
// display:flex => 가로로 배치가능 
// 배열 형태로 데이터 만들고 => 리스트 형식으로 렌더링 하는법


// 음... 리엑트 => 데이터가 위에서 아래로 흐름. => 계층성 성질을 갖는다.

// 기능을 만든 다음 다음 컴포넌트로 prop로 전달 => 이 컴포넌트에서 또 props로 세부 컴포넌트에 전달... 