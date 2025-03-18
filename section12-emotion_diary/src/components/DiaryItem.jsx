import { getEmotionImage } from "../util/get-emotion-image"; // 사진 불러오기용 util에 만들어뒀던거 불러오기
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import "./DiaryItem.css";
// className으로 역할 나누기

const DiaryItem = ({id, emotionId, createDate, content}) => { // 실제 값들을 리스트에서 나타내기 위해 매개변수로 받아옴.

    const nav = useNavigate(); // 라우터 전용
    //const emotionId = 3; // emotionId 가 들어오면 밑에 $로 동적으로 들어가서 거기에 맞는 이미지 가져옴  

// 각각에 다 넣기 {이렇게 동적으로}
// + nav로 라우터 설정 => 이미지 클릭시 => 해당 다이어리 페이지로 이동 ${id} 동적 라우팅 사용.
    return (<div className = "DiaryItem">
        <div onClick = {()=>nav(`/diary/${id}`)} className = {`img_section img_section_${emotionId}`}>
            <img src = {getEmotionImage(emotionId)}></img>
        </div>
        <div onClick = {()=>nav(`/diary/${id}`)} className="info_section">
            <div className = "created_date">
                {new Date(createDate).toLocaleDateString()} 
            </div>
            <div className = "content">{content}</div>
        </div>
        <div className ="button_section">
            <Button onClick = {()=>nav(`/edit/${id}`)} text = {"수정하기"}></Button>
        </div>
    </div>)
}

export default DiaryItem;