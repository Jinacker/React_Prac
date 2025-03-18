// 프로젝트 개발 순서는 사람마다 다름
// 페이지 라우팅 => 글로벌 레이아웃 설정 => 공통 컴포넌트 구현 => 개별 페이지 및 복잡한 기능 구현
// 이 순서대로 가보자. 공통 컴포넌트를 먼저 구현하면 그냥 가져다가 바로 쓸수있어서 좋다함.

import './App.css'
// 함수에서 페이지 이동 훅 => useNavigate 
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // 라우터 import // 페이지 이동용 Link 컴포넌트 import
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Edit from './pages/Edit.jsx';
import Notfound from "./pages/Notfound.jsx";


const mockData = [ // 임시 파일 => 월별로 넘기기 위해 수정 => 날짜추가.
  {
  id: 1,
  createDate: new Date("2025-3-18").getTime(),
  emotionId: 1,
  content: "1번 일기 내용",
  },
  {
    id: 2,    
    createDate: new Date("2025-3-17").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createDate: new Date("2025-2-20").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  }
];

function reducer(state, action){
  switch(action.type){
    case "CREATE": return [action.data, ...state];
    case "UPDATE": return state.map((item) =>
      String(item.id) === String(action.data.id) ? action.data : item); // 타입간 차이로 오류 방지로 둘다 String으로 형변환 / id 같다 => 데이터 덮어 씌우기 아니면 그냥 냅두기
    case "DELETE": return state.filter((item)=>String(item.id) !== String(action.id)); // 아이템 중에 id가 같지 않은 것만 리턴. => id 같은건 자연스럽게 제거됨.
    default: return state;
  };
  
}

// !!!!!! 마지막으로 지금 만든 기능들을 context로 모든 페이지에 바로 줄수있게 해주자 => 계층성 무시 ㄱ

// 이제 월별로 필터링하는 기능을 구현해야함 => HOME 기능
// 데이터 스테이트를 공급하는 다이어리 스테이트 context를 통해서 data state를 공급받아야함 => export 하자!

export const DiaryStateContext = createContext(); // 얘는 데이터 전달 ex) 2번쨰 일기 내용 머머 이런거
export const DiaryDispatchContext = createContext(); // 얘네는 업데이트랑 크리에이트 딜리트 전달

function App() {
  const [data, dispatch] = useReducer(reducer, mockData); // 아까만든 임시 파일 초기값으로 줌.
  const idRef = useRef(3) // mock 데이터에 id 2번까지 있어서 초기값 3으로 셋팅

  // 새로운 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({ //
      type: "CREATE",
      data : {
        id: idRef.current++, // 새 일기 생성할때마다 id 증가 ++ 
        createDate,
        emotionId,
        content,
      }
    })
  }

  // 기존 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => { // 수정 가능한 모든 데이터 받아오기
    dispatch(
      {
        type: "UPDATE",
        data: {id, createDate, emotionId, content} // 하... data date 주의...
      }
    )
  }


  // 기존 일기 삭제
const onDelete = (id) => { //  매개 변수 아이디만 받음 => 삭제할때 이거밖에 필요없기 때문. 
  dispatch({
    type: "DELETE",
    id,
  }
  )
}

  
  
  return ( // 기능을 만들었다면 => Context Provide로 모든 페이지에 공급해주자 !
    <>


    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value = {{onCreate, onUpdate,onDelete}}>
    <Routes>
       <Route path = "/" element = {<Home></Home>}></Route>
       <Route path = "/new" element = {<New></New>}></Route>
       <Route path = "/diary/:id" element = {<Diary></Diary>}></Route> 
       <Route path = "edit/:id" element = {<Edit></Edit>}></Route>
       <Route path = "*" element = {<Notfound></Notfound>}></Route>
    </Routes>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    </>
    // 주소에 /@@@@/:id => URL 파라미터를 쓰겠다고 선언하는거임 
  ) // path = "*" 은 스위치문의 default 같은거임 => 다 아니면 이거 실행됨.
}

// 주의점
// 1. Routes 컴포넌트 안에는 Route만 들어갈수있다 => ex) div 이런거 안됨...
// 2. Routes 외부에 배치된 컴포넌트는 항상 리렌더링 돼서 어떤 페이지든 나옴. => 의도에 맞게 쓰자.

export default App
