// Edit 페이지 UI는 => 사실상 헤더의 일기수정하기랑 right child의 삭제하기 정도 다른거 빼곤 다 똑같음
// => Diary페이지 만들었던거 가져다쓰면 된다.

import {useParams, useNavigate} from "react-router-dom"; // Edit/n 이거 표시할라고 쓰는거
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useEffect, useContext, useState } from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App";
import useDiary from "../hooks/useDiary"; // 커스텀 훅으로 만든거 불러오기

import usePageTitle from "../hooks/usePageTitle"; // 페이지 이름 바꾸기 용 커스텀훅 불러오기


const Edit = () => {
    const params = useParams(); // 이제 수정하기 누르면, 기존의 일기의 저장된 값과 날짜가 뜨게 할거 => 지금은 작성된 날짜가 아니라 지금 날짜가 뜸
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기 수정`); // 이렇게 $ 써서 몇번일기 수정 타이틀 넣기.
    
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext); // App 컴포넌트에서 만든 onDelete context 가져오기 + onUpdate
   

    // 자 이제 이렇게 일기 내용 가져오는 거를 Diary 페이지에서도 써야되는데 => 이거 그대로 가져다쓴다? => 중복코드 비효율적임
    // 그래서 이걸 커스텀 훅으로 만들거다! => 여기 안에 있던건 삭제

    const curDiaryItem = useDiary(params.id); // 커스텀 훅 만든걸로 대체

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요?")){ // 일기 삭제용 이벤트 핸들러
            onDelete(params.id);
            nav("/", {replace:true})
        }
    }

    const onSubmit = (input) => { // 작성 완료 버튼 => onSubmit으로 Editor랑 연결됨.
        if(window.confirm("일기를 정말 수정할까요?")){
        onUpdate(params.id, input.createDate.getTime(), input.emotionId, input.content); // 수정값 넣기 (createDate는 getTime 함수로 타임 스탬프 형식으로 넣기)
        // 순서 잘 지키기.
        nav("/",{replace: true}); // 뒤로가기 설정
        };
    }; // 수정 작성완료 기능 구현
    
    return <div>
        <Header
        title ={"일기 수정하기"}
        leftChild = {<Button onClick ={()=>nav(-1)} text ={"< 뒤로가기"} ></Button>}
        rightChild = {<Button onClick ={onClickDelete} text ={"삭제하기"} type = {"NEGATIVE"}> </Button>}
        >
        </Header>
        <Editor
        initData = {curDiaryItem}
        onSubmit = {onSubmit}
        ></Editor>
    </div>;  // Editor에 초기값 props로 넘겨줌
    // 이미 만들어둔 Editor 컴포넌트 불러오기 => 이걸로 UI 구현 완료
};

export default Edit;


// 삭제하기 버튼 누르면 => (alert)존재하지 않는 페이지입니다 창 뜸 => 의도와 다른 동작
// v7 으로 업데이트 되면서 nav 함수 동작 방식 변화됨
// 기존: 동기적으로 실행.
// 변화: 비동기적으로 실행.
// => callback 함수 실행돼서 뜨는 오류임.