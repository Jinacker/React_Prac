import "./Viewer.css";
import {getEmotionImage} from "../util/get-emotion-image";
import { emotionList } from "../util/constants.js";

// 일기 상세 렌더링 => 감정 이미지 / 일기 내용 랜더링
const Viewer = ({emotionId, content}) => {

    const emotionItem = emotionList.find( // item 중에서 찾기 !!!! (이거는 ()=>{}가 아님 () => 임)
        (item) => String(item.emotionId)===String(emotionId)); // id 같은거 아이템으로 가져오기. find 써서 


    return <div className ="Viewer">
        <section className = "img_section">
            <h4>오늘의 감정</h4>
            <div className ={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
            <img src ={getEmotionImage(emotionId)}></img>
            <div>{emotionItem.emotionName}</div>
            </div>
        </section>
        <section className = "content_section">
            <h4>오늘의 일기</h4>
            <div className = "content_wrapper">
                <p>{content}</p>
            </div>
        </section>
    </div>
}

export default Viewer;