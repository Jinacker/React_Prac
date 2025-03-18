import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

// 각 이모션의 이미지와 이름을 출력하는... 그런 컴포넌트임 => Editor 컴포넌트에서 쓰임.

// 밑에 ` 백틱에 $에 ㅈㄹ을 해둔 이유 => 삼항연산자 (조건문)으로 클래스명을 그떄그때 바꿔주기 위함. 
// 1번이면 무슨색 3번이면 무슨색 이렇게 => EmotionItem_on_5 대충 이런식으로 클래스 이름이 정해짐.

const EmotionItem = ({emotionId, emotionName, isSelected}) => { 
    return (<div className = {`EmotionItem ${isSelected ? `EmotionItem_on_${emotionId}`:""}`}>
        <img className ="emotion_img" src = {getEmotionImage(emotionId)}></img>
        <div className = "emotion_name">{emotionName}</div>
    </div>)
};

export default EmotionItem;