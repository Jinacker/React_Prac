import "./Editor.css";
import EmotionItem from "./Emotionitem";
import Button from "./Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 오늘의 날짜 입력 / 오늘의 감정 입력 / 오늘의 일기 입력 / 취소 및 저장 버튼 => 4개의 섹션

const getStringDate = (targetDate) => { // 
    // 날짜 => YYYY-MM-DD (09 이런식으로 한자리 두자리로 표시하게 해야함 이건 밑에서 if 조건문으로 ㄱ)
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    // 이런식으로 $를 이용해서 한자리 수면 => 0붙여서 2자리 수로 만들어주기
    if (month < 10){
        month = `0${month}`;
    }
    if (date <10){
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`; // 이런식으로 리턴.
}

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




///////////////////////


const Editor = ({onSubmit}) => {
    const emotionId = 5; //isSelected = {item.emotionId === emotionId} 이걸 넣어서 => 선택된 애 true => 이때만 스타일 넣도록 추가.
    
    const [input, setInput] = useState({ // state를 객체 형태로 나눠줘서, 여러개의 값을 input이라는 하나의 값으로 받음.
        createDate: new Date(), // 초기값들 설정.
        emotionId: 3,
        content: "",
    }); 


    // 이벤트 헨들러 생성
    const onChangeInput = (e) => {
    //console.log(e.target.name) // 어떤 요소에 입력이 들어온건지
    //console.log(e.target.value) // 현재 요소에 입력된 값이 무엇인지?

    // 바로 넣어버리면 문자열로 들어가서 getTime으로 넣기 위해 이런 추가 공정을 거쳐야함.
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createDate") {
        value = new Date(value);
    }
    // 이러면 화면은 문자열로 잘 나오고, 실제로는 timestamp로 들어가있음.

    setInput({ // 실제 값을 바꾸는 부분.
        ...input,
        [name]: value, // 벨류로 바꿔줌.
    })
    }
    // 감정 고르는거는... 그냥 컴포넌트이기 떄문에 => 이벤트 객체가 자동으로 전달 안됨 => 우리가 직접 만들어줘야함. 
    // <EmotionItem onClick ={()=>onChangeInput({target: {name: "emotionId", value: item.emotionId,}})} key = {item.emotionId} {...item} isSelected = {item.emotionId === emotionId}></EmotionItem>)}
    
    const onClickSubmitButton = () => { // New 컴포넌트로 input 이 전달.
        onSubmit(input);
    };

    const nav = useNavigate(); // 취소하기 버튼용 라우터

    return (<div className = "Editor">
        <section className = "date_section">
            <h4>오늘의 날짜</h4>
            <input name = "createDate" onChange = {onChangeInput} value = {getStringDate(input.createDate)} type = "date"></input>
        </section>
        <section className = "emotion_section">
            <h4>오늘의 감정</h4>
            <div className = "emotion_list_wrapper">
            {emotionList.map((item)=> <EmotionItem onClick ={()=>onChangeInput({target: {name: "emotionId", value: item.emotionId,}})} key = {item.emotionId} {...item} isSelected = {item.emotionId === input.emotionId}></EmotionItem>)}
            </div>
        </section>
        <section className = "content_section">
            <h4>오늘의 일기</h4>
            <textarea 
            name = "content"
            value = {input.content}
            onChange = {onChangeInput} 
            placeholder="오늘은 어땠나요?"></textarea>
        </section>
        <section className = "button_section">
            <Button onClick = {() => nav(-1)}text = {"취소하기"}></Button>
            <Button onClick = {onClickSubmitButton} text = {"작성완료"} type = "POSITIVE"></Button>
        </section>
    </div>);
}; // emotionList => 저런식으로 맵핑 => ...item으로 스프레드 해서 나타내기.

export default Editor;


// 작성완료 버튼 문제가 생길수있다 => new 컴포넌트에서만 쓰는게 아니라 edit 페이지에서도 쓰기 때문에 
// 이게 공통 컴포넌트라 => 어떤 페이지에서 사용되었는지에 따라 다르게 동작하게 해줘야함.