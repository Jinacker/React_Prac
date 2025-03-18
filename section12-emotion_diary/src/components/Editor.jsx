import "./Editor.css";
import EmotionItem from "./Emotionitem";
import Button from "./Button.jsx";
// 오늘의 날짜 입력 / 오늘의 감정 입력 / 오늘의 일기 입력 / 취소 및 저장 버튼 => 4개의 섹션

const emotionList = [ // 하나씩 설정해서 일일이 입력해주는건 안좋은 방법 => 이렇게 리스트로 만들어서 물려주는게 나중에 유지보수에 좋음/
    {
        emotionId: 1,
        emotionName: "완전 좋음"
    },
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "그럭저럭"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    },
];

const Editor = () => {
    const emotionId = 5; //isSelected = {item.emotionId === emotionId} 이걸 넣어서 => 선택된 애 true => 이때만 스타일 넣도록 추가.

    return (<div className = "Editor">
        <section className = "date_section">
            <h4>오늘의 날짜</h4>
            <input type = "date"></input>
        </section>
        <section className = "emotion_section">
            <h4>오늘의 감정</h4>
            <div className = "emotion_list_wrapper">
            {emotionList.map((item)=> <EmotionItem key = {item.emotionId} {...item} isSelected = {item.emotionId === emotionId}></EmotionItem>)}
            </div>
        </section>
        <section className = "content_section">
            <h4>오늘의 일기</h4>
            <textarea placeholder="오늘은 어땠나요?"></textarea>
        </section>
        <section className = "button_section">
            <Button text = {"취소하기"}></Button>
            <Button text = {"작성완료"} type = "POSITIVE"></Button>
        </section>
    </div>);
}; // emotionList => 저런식으로 맵핑 => ...item으로 스프레드 해서 나타내기.

export default Editor;