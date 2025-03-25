// UI 구성: 헤더 / 일기 상세보기 (감정 랜더링 / 일기 내용 랜더링)

import {useParams} from "react-router-dom"; // 페이지의 URL 파라미터를 가져오는 훅임. 
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
    const params = useParams();
    return <div>
        <Header title ={"YYYY-MM-DD 기록"} 
        leftChild={<Button text ={"< 뒤로가기"}></Button>}
        rightChild={<Button text ={"수정하기"}></Button>}
        ></Header>
        <Viewer></Viewer>
    </div>
}

export default Diary;

