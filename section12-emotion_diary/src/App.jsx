// 프로젝트 개발 순서는 사람마다 다름
// 페이지 라우팅 => 글로벌 레이아웃 설정 => 공통 컴포넌트 구현 => 개별 페이지 및 복잡한 기능 구현
// 이 순서대로 가보자. 공통 컴포넌트를 먼저 구현하면 그냥 가져다가 바로 쓸수있어서 좋다함.

import './App.css'
// 함수에서 페이지 이동 훅 => useNavigate 
import { useReducer, useRef, createContext, useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // 라우터 import // 페이지 이동용 Link 컴포넌트 import
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Edit from './pages/Edit.jsx';
import Notfound from "./pages/Notfound.jsx";

// 스토리지에서 불러올거기 떄문에 없어도 됨 이제

// const mockData = [ // 임시 파일 => 월별로 넘기기 위해 수정 => 날짜추가.
//   {
//   id: 1,
//   createDate: new Date("2025-3-18").getTime(),
//   emotionId: 1,
//   content: "1번 일기 내용",
//   },
//   {
//     id: 2,    
//     createDate: new Date("2025-3-17").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용",
//   },
//   {
//     id: 3,
//     createDate: new Date("2025-2-20").getTime(),
//     emotionId: 3,
//     content: "3번 일기 내용",
//   }
// ];

function reducer(state, action){ //이게 실제로 값을 관장하는 부분 => 여기에 스토리지를 써야함
  let nextState;

  switch(action.type){
    case "INIT":{ // 저장된 초기값 그냥 바로 리턴 시켜줌
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state] 
      break};
    case "UPDATE": { nextState = state.map((item) =>
      String(item.id) === String(action.data.id) ? action.data : item);
      break}; // 타입간 차이로 오류 방지로 둘다 String으로 형변환 / id 같다 => 데이터 덮어 씌우기 아니면 그냥 냅두기
    case "DELETE": { nextState = state.filter((item)=>String(item.id) !== String(action.id))
      break;
    }; // 아이템 중에 id가 같지 않은 것만 리턴. => id 같은건 자연스럽게 제거됨.
    default: return state;
  };
  localStorage.setItem("diary", JSON.stringify(nextState)); // 값이 바로바로 로컬 스토리지로 저장!
  return nextState;
}

// !!!!!! 마지막으로 지금 만든 기능들을 context로 모든 페이지에 바로 줄수있게 해주자 => 계층성 무시 ㄱ

// 이제 월별로 필터링하는 기능을 구현해야함 => HOME 기능
// 데이터 스테이트를 공급하는 다이어리 스테이트 context를 통해서 data state를 공급받아야함 => export 하자!

export const DiaryStateContext = createContext(); // 얘는 데이터 전달 ex) 2번쨰 일기 내용 머머 이런거
export const DiaryDispatchContext = createContext(); // 얘네는 업데이트랑 크리에이트 딜리트 전달

function App() {
  const [isLoading, SetIsLoading] = useState(true); // 로딩용 state

  const [data, dispatch] = useReducer(reducer, []); // 아까만든 임시 파일 초기값으로 줌.
  const idRef = useRef(0) // mock 데이터에 id 2번까지 있어서 초기값 3으로 셋팅 => 초기값 이제 0번 데이터 불러올거기 때문.

  // 저장된 데이터 웹스토리지에서 불러오기.
  useEffect(()=>{
    const storedData = localStorage.getItem("diary");
    if (!storedData){ // json.parse가 값이 이상하면 에러 나기때문에 이거 방지.
    SetIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData); // 저장된 객체 스트링을 불러와서 parse로 다시 객체로 변환 
    if(!Array.isArray(parsedData)){ // 배열인지 판별하는 부분
    SetIsLoading(false);
      return; // 배열아니면 바로 리턴
    }

    let maxId = 0;
    parsedData.forEach((item)=>{ //가장 높은 id 찾기
      if(Number(item.id) > maxId){
        maxId = Number(item.id)
      }
    });

    idRef.current = maxId+1; // 겹치지않게 가장 높은 아이디 +1 ! => 이제 일기 id 안겹침.
    
    dispatch({ // dispatch로 액션 개체 불러오기
      type: "INIT",
      data: parsedData,
    });
    SetIsLoading(false);
  },[])


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

  if (isLoading) { // 로딩 안됐으면 넘어가지 않게 
    return <div>데이터 로딩중입니다...</div>
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
