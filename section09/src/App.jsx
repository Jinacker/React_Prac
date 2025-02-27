import { useState, useRef, useReducer } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";


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

function reducer(state, action) {
  switch(action.type){
    case "CREATE": return [action.data, ...state];
    case "UPDATE": return state.map((item) => item.id === action.targetId ? {...item, isDone: !item.isDone} : item);
    case "DELETE": return state.filter((item)=>item.id !== action.targetId);
    default: state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockDate); // useReducer 사용 => mockdata 초기값으로 넣어줌.

  const idRef = useRef(3); // 아이디용 Ref 생성 => 안겹치게 초기값 3

  const onCreate = (content) => { // 새로운 투두 리스트 업뎃
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          isDone: false,
          content: content,
          date: new Date().getTime(),
        }
      })
     };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  };

  const onDelete = (targetId) => {
      dispatch({
        type: "DELETE",
        targetId: targetId,
      })
    };
  
  return (
    <div className = "App">
      <Header></Header>
      <Editor onCreate = {onCreate} ></Editor>
      <List todos = {todos} onUpdate={onUpdate} onDelete = {onDelete}></List>
    </div>
  )
}

export default App


// 이번 프젝 배운점 정리
// display:flex => 가로로 배치가능 
// 배열 형태로 데이터 만들고 => 리스트 형식으로 렌더링 하는법


// 음... 리엑트 => 데이터가 위에서 아래로 흐름. => 계층성 성질을 갖는다.

// app 컴포넌트에서 기능을 만든 다음 다음 컴포넌트로 prop로 전달 => 이 컴포넌트에서 또 props로 세부 컴포넌트에 전달... 