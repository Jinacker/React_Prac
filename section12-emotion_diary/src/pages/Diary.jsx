// UI 구성: 헤더 / 일기 상세보기 (감정 랜더링 / 일기 내용 랜더링)

import {useParams, useNavigate} from "react-router-dom"; // 페이지의 URL 파라미터를 가져오는 훅임. 
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringDate } from "../util/get-stringed-date";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();

    const curDiaryItem = useDiary(params.id); // 최초 호출시 undefined 반환 => 그 후에 제대로된 내용 반환
    if (!curDiaryItem) { // undefined 일떄 대비
        return <div>데이터 로딩중...!</div>
    }
    // 잘 들어가지면 => 이렇게 구조분해 할당으로 값 받아오기.
    const {createDate, emotionId, content} = curDiaryItem;
    const title = getStringDate(new Date(createDate));

    return <div>
        <Header title ={`${title} 기록`} 
        leftChild={<Button onClick ={()=>nav(-1)} text ={"< 뒤로가기"}></Button>}
        rightChild={<Button onClick ={() => nav(`/edit/${params.id}`)} text ={"수정하기"}></Button>}
        ></Header>
        <Viewer emotionId = {emotionId} content ={content}></Viewer>
    </div>
}

export default Diary;

