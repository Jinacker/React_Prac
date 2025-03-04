// 라우터란... => 페이지 여러개 쓸수 있게 해줌
// 설치법 터미널에 => " npm i react-router-dom "

// 전통 웹사이트 => MPA 방식으로 페이지 옮길때마다 해당 html(페이지 마다 있음) 클라이언트가 요청해서 새로 불러옴
// 서버 사이드 렌더링 => 전체 새로 불러옴 (비효율적) / 서버로 요청을 해야되니까 다수 사용자 접속 => 서버 터질 위험

// 리엑트 => SPA 방식 최초 접속할때 index html 하나와 js로 적힌 모든 컴포넌트
// => 이걸 합해서 리액트 앱을 전송 => 따로 요청 없이 클라이언트 입장에서 필요한거만 뽑아와서 페이지 이동
// 클라이언트 사이드 렌더링 => 공통 사항은 냅두고 필요한 컴포넌트만 불러옴 (효율적) / 클라이언트마다 리액트앱 받아서 각자 돌리는거라 트래픽 문제 x

import './App.css'
import { Routes, Route } from 'react-router-dom'; // 라우터 import
import Home from "./pages/Home.jsx";
import Diary from "./pages/Diary.jsx";
import New from "./pages/New.jsx";
import Notfound from "./pages/Notfound.jsx";


// 1. "/" => 모든 일기 조회하는 홈페이지
// 2. "/new" => 새로운 일기 작성하는 New 페이지
// 3. "/diary" => 일기를 상세히 조회하는 Diary 페이지

function App() {
 
  return ( // 마치 스위치문처럼 찾아서 맞는거 페이지로서 화면에 렌더링.
    <Routes>
       <Route path = "/" element = {<Home></Home>}></Route>
       <Route path = "/new" element = {<New></New>}></Route>
       <Route path = "/diary" element = {<Diary></Diary>}></Route>
       <Route path = "*" element = {<Notfound></Notfound>}></Route>
    </Routes>
  ) // path = "*" 은 스위치문의 default 같은거임 => 다 아니면 이거 실행됨.
}

// 주의점
// 1. Routes 컴포넌트 안에는 Route만 들어갈수있다 => ex) div 이런거 안됨...
// 2. Routes 외부에 배치된 컴포넌트는 항상 리렌더링 돼서 어떤 페이지든 나옴. => 의도에 맞게 쓰자.

export default App
