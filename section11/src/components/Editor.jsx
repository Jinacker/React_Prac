import "./Editor.css";
import {useState, useRef, useContext} from "react";
import {TodoContext} from "../App";

const Editor = () => {

    const {onCreate}= useContext(TodoContext); // Provide 받은 데이터 중에 onCreate만 필요해서 이거만 받음

    const [content, setContent] = useState(""); // 인풋 받는용 state
    const contentRef = useRef(); // 

    const onChangeContent = (e) => { // 입력창에 뭐 쓰는경우 => 이벤트 핸들러
        setContent(e.target.value); // 셋 콘텐츠 => 콘텐츠
    }
    
    const onSubmit = () => { // 버튼 눌러서 제출.
        if (content === ""){ // 안에 암것도 안써져있을때 추가 안되게 하기.
            contentRef.current.focus(); // 포커스되게 하기.
            return; // 강제 리턴
        }
        onCreate(content);  // 버튼 누르면 onCreate 함수에 content 값 전달 
        setContent(""); // 추가되면 칸 초기화.
    }

    const onKeydown = (e) => {
        if(e.keyCode === 13){ // 13이 엔터임 => 엔터 누르면 onSubmit 함수 호출 => 제출.
            onSubmit();
        }
    };


    return (
        <div className = "Editor">
            <input 
            ref = {contentRef}
            value = {content}
            onKeyDown ={onKeydown} // 키보드 누를때 필요한거
            onChange = {onChangeContent}
            placeholder="새로운 Todo..."></input>

            <button onClick={onSubmit}>추가</button>
        </div>
    )
};

export default Editor; 