import { getEmotionImage } from "../util/get-emotion-image"; // 사진 불러오기용 util에 만들어뒀던거 불러오기
import Button from "./Button";

import "./DiaryItem.css";
// className으로 역할 나누기

const DiaryItem = () => {

    const emotionId = 3; // emotionId 가 들어오면 밑에 $로 동적으로 들어가서 거기에 맞는 이미지 가져옴  

    return (<div className = "DiaryItem">
        <div className = {`img_section img_section_${emotionId}`}>
            <img src = {getEmotionImage(emotionId)}></img>
        </div>
        <div className="info_section">
            <div className = "created_date">
                {new Date().toLocaleDateString()}
            </div>
            <div className = "content">일기 컨텐츠</div>
        </div>
        <div className ="button_section">
            <Button text = {"수정하기"}></Button>
        </div>
    </div>)
}

export default DiaryItem;