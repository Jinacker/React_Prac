// Edit 페이지 UI는 => 사실상 헤더의 일기수정하기랑 right child의 삭제하기 정도 다른거 빼곤 다 똑같음
// => Diary페이지 만들었던거 가져다쓰면 된다.

import {useParams, useNavigate} from "react-router-dom"; // Edit/n 이거 표시할라고 쓰는거
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import {DiaryDispatchContext} from "../App";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete} = useContext(DiaryDispatchContext); // App 컴포넌트에서 만든 onDelete context 가져오기

    const onClickDelete = () => {
        if( // 이걸 if 문에 넣어서 true면 일기 삭제되게 로직 짜기.
        window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.") // 브라우저 내부에서 기본으로 주는 팝업창 기능임.
        //확인시 True / 취소 시 False
        ) { // 일기 삭제 로직
            onDelete(params.id); // params에서 가져온 아이디에 해당하는거 삭제
            nav('/', {replace:true}) // 삭제 후 홈으로 가기 + replace true로 해서 뒤로가기 방지 (삭제된 일기 숙소창으로 못가게)
        }


    }; // 삭제하기 버튼 팝업창 전용 이벤트 핸들러

    return <div>
        <Header
        title ={"일기 수정하기"}
        leftChild = {<Button onClick ={()=>nav(-1)} text ={"< 뒤로가기"} ></Button>}
        rightChild = {<Button onClick ={onClickDelete} text ={"삭제하기"} type = {"NEGATIVE"}> </Button>}
        >
        </Header>
        <Editor></Editor>
    </div>; // 이미 만들어둔 Editor 컴포넌트 불러오기 => 이걸로 UI 구현 완료
};

export default Edit;