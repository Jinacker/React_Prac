// props drilling을 해결하기 위한 Context 사용법 !!
// 리액트의 props로 데이터를 주고 받으면 => 계층을 하나하나 따라 내려가야됨 => 컴포넌트가 많아지면... 유지 보수 힘듬 => 이게 props drilling
// context를 이용하면 이제 하나씩 내려가면서 주는게 아니라, 바로 가져다 쓸수있게 줄수있음.

import { useState, useRef, useReducer, useCallback, createContext } from 'react'
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

export const TodoContext = createContext(); // Context 객체 생성 => 컴포넌트 외부에 생성 => 왜 외부? => App이 리렌더링 될때마다 재생성될 필요가 없기 때문.
console.log(TodoContext); // 얘도 사실 컴포넌트임

function App() {
  const [todos, dispatch] = useReducer(reducer, mockDate); // useReducer 사용 => mockdata 초기값으로 넣어줌.

  const idRef = useRef(3); // 아이디용 Ref 생성 => 안겹치게 초기값 3

  const onCreate = useCallback((content) => { // 새로운 투두 리스트 업뎃
      dispatch({
        type: "CREATE",
        data: {
          id: idRef.current++,
          isDone: false,
          content: content,
          date: new Date().getTime(),
        }
      })
     },[]);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    })
  },[]);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
  }, []); // 1 인수: 최적화하고 싶은 함수(불필요하게 렌더링 안하고 싶은 함수) 2: deps
  
  return (
    <div className = "App">
      <Header></Header>
      <TodoContext.Provider value = {{todos, onCreate, onUpdate, onDelete}}>

      <Editor></Editor>
      <List></List>
      
      </TodoContext.Provider>
    </div>
  )
} // </TodoContext.Provider 여기에 공급할 데이터들 넣음> => 이거로 감싸야 적용됨. => 이거에 감싸진건 이제 계층 상관없이 아무데서나 꺼내쓸수있게됨.

export default App


// 이번 프젝 배운점 정리
// display:flex => 가로로 배치가능 
// 배열 형태로 데이터 만들고 => 리스트 형식으로 렌더링 하는법


// 음... 리엑트 => 데이터가 위에서 아래로 흐름. => 계층성 성질을 갖는다.

// app 컴포넌트에서 기능을 만든 다음 다음 컴포넌트로 prop로 전달 => 이 컴포넌트에서 또 props로 세부 컴포넌트에 전달... 