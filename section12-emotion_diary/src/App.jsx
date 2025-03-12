// 라우터란... => 페이지 여러개 쓸수 있게 해줌
// 설치법 터미널에 => " npm i react-router-dom "

// 전통 웹사이트 => MPA 방식으로 페이지 옮길때마다 해당 html(페이지 마다 있음) 클라이언트가 요청해서 새로 불러옴
// 서버 사이드 렌더링 => 전체 새로 불러옴 (비효율적) / 서버로 요청을 해야되니까 다수 사용자 접속 => 서버 터질 위험

// 리엑트 => SPA 방식 최초 접속할때 index html 하나와 js로 적힌 모든 컴포넌트
// => 이걸 합해서 리액트 앱을 전송 => 따로 요청 없이 클라이언트 입장에서 필요한거만 뽑아와서 페이지 이동
// 클라이언트 사이드 렌더링 => 공통 사항은 냅두고 필요한 컴포넌트만 불러옴 (효율적) / 클라이언트마다 리액트앱 받아서 각자 돌리는거라 트래픽 문제 x


///////////////// 페이지의 동적 경로란? //////////////////
// 1. URL Parameter => ~/product/1 => 아이템의 id등의 변경되지 않는 값을 주소로 명시 => 이번 다이어리 프로젝트에서 쓸 것.
// 2. Query String => ~/search?q=검색어 => 검색어 등의 자주 변경되는 값을 주소로 명시하기 위해 사용

import './App.css'
// 함수에서 페이지 이동 훅 => useNavigate 
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // 라우터 import // 페이지 이동용 Link 컴포넌트 import
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";

// 이미지 쓰려면 이렇게 import해서 가져와야함.
// import emotion1 from "./assets/emotion1.png";
// import emotion2 from "./assets/emotion2.png";
// import emotion3 from "./assets/emotion3.png";
// import emotion4 from "./assets/emotion4.png";
// import emotion5 from "./assets/emotion5.png";
// 근데 이렇게... 매번 import 하면 너무 번거롭고 지저분 => util 폴더를 만들고 거기에 이 import 해주는 파일을 분리. 
import {getEmotionImage} from "./util/get-emotion-image.js"; //이거임 통합 !
//getEmotionImage(1) 이런식으로 사용


// 1. "/" => 모든 일기 조회하는 홈페이지
// 2. "/new" => 새로운 일기 작성하는 New 페이지
// 3. "/diary" => 일기를 상세히 조회하는 Diary 페이지

function App() {
  const nav = useNavigate(); // 함수 생성.

  const onClickButton = () => { // 이벤트 핸들러 생성. => 막 특정 조건 ex) 버튼 눌렀을때 페이지 이동하려면 이렇게 써야함.
    nav("/new"); // nav 호출 하고 안에는 "/경로" 넣기
  };
 
  return ( // 마치 스위치문처럼 찾아서 맞는거 페이지로서 화면에 렌더링.
    // 요런식으로 Link로 원하는 페이지 이동하게 구축.
    // 다 리렌더링 되는게 아니라 필요한 컴포넌트만 리렌더링돼서 굉장히 부드러움
    // 기존의 라우팅 방식인 <a href = "/"> => 이거는 화면 전체가 깜빡 거리면서 전체가 리렌더링


    // public 폴더에 이미지 넣은경우 => 주소를 불러오는 방식으로 사용 => 근데 이렇게 하면 vite가 제공하는 이미지 최적화 기능이 안써짐.
    // src asset 폴더에 이미지 넣은경우 => import 해서 사용 => 나중에 보면 data URL로 저장돼서 한번 저장되면 다시 안불려짐(memory에 저장됨) => 최적화 자동으로됨!!!!
    // (중요) => 이미지가 적다 => asset에 저장 // 이미지가 많다 => 다 asset에 저장시 메모리 과부화 위험 => public에 저장.

    // npm run build => 배포용으로 여는거
    
  // 이게 public 폴더에 이미지 넣은 경우.
   // <img src = {"/emotion1.png"}></img>
   // <img src = {"/emotion2.png"}></img>
   // <img src = {"/emotion3.png"}></img>
   // <img src = {"/emotion4.png"}></img>
   // <img src = {"/emotion5.png"}></img>
  //</div>
    
    <>
    <div>
    <img src = {getEmotionImage(1)}></img>
    <img src = {getEmotionImage(2)}></img>
    <img src = {getEmotionImage(3)}></img>
    <img src = {getEmotionImage(4)}></img>
    <img src = {getEmotionImage(5)}></img>
    </div>

    <div>
      <Link to ={"/"}>Home</Link>
      <Link to ={"/new"}>New</Link>
      <Link to ={"/diary"}>Diary</Link>
    </div>
    <button onClick = {onClickButton}>New 페이지로 이동</button>
    <Routes>
       <Route path = "/" element = {<Home></Home>}></Route>
       <Route path = "/new" element = {<New></New>}></Route>
       <Route path = "/diary/:id" element = {<Diary></Diary>}></Route> 
       <Route path = "*" element = {<Notfound></Notfound>}></Route>
    </Routes>
    
    </>
    // 주소에 /@@@@/:id => URL 파라미터를 쓰겠다고 선언하는거임 
  ) // path = "*" 은 스위치문의 default 같은거임 => 다 아니면 이거 실행됨.
}

// 주의점
// 1. Routes 컴포넌트 안에는 Route만 들어갈수있다 => ex) div 이런거 안됨...
// 2. Routes 외부에 배치된 컴포넌트는 항상 리렌더링 돼서 어떤 페이지든 나옴. => 의도에 맞게 쓰자.

export default App
