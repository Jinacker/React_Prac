// Header 컴포넌트 / Editor 컴포넌트 / EmotionItem 컴포넌트(감정 고를수있는창) 으로 구성.

import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom"; // 실제로 뒤로 갈수있게 라우터 불러오기

import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";

import usePageTitle from "../hooks/usePageTitle"; // 페이지 이름 바꾸기 용 커스텀훅 불러오기

const New = () => { // 뒤로 가기 밖에 없어서 leftChild 
    const {onCreate} = useContext(DiaryDispatchContext);
    const nav = useNavigate();
    // nav 인수를 -1로 주면 페이지 뒤로감
    usePageTitle("새 일기 쓰기"); // 그냥 이렇게 호출해서 title 넣어주기

    // 여기서 새로운 일기를 추가하는 함수를 만든 다음 넘겨준다. => Editor의 submit 함수에서 전달받은 인풋을 => context를 통해 앱 컴포넌트로부터 받아온 onCreate 통해서 새로운 일기 추가 !!!!!!
    const onSubmit = (input) => {onCreate(input.createDate.getTime(), input.emotionId, input.content);
        nav('/', {replace:true}) // 이렇게 해두면, 작성 완료 버튼 누르면 뒤로 가져서 Home으로 가지고 replace true 해놔서 뒤로가기 방지!!
    }; // 인자 다 넘겨줌. 날짜는 timestamp 형식으로 ㄱㄱ

    return <div>
        <Header title = {"새 일기 쓰기"}
        leftChild = {<Button onClick ={()=> nav(-1)} text = {"< 뒤로 가기"}></Button>}>
        </Header>
        <Editor onSubmit = {onSubmit}></Editor>
    </div>
}

export default New;