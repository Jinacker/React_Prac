// React Hooks => 클래스에서 원하는기능만 빼와서 쓰는거
// useState랑 useRef가 사실 훅이었음.

import {useState} from "react";

// 커스텀 Hook도 별도 폴더 만들어서 관리하는게 좋음
import useInput from "./../hooks/useInput.jsx"; // ../ 하는 이유 => 상위폴더로 한번 올라가야됨.

// 3가지 훅 관련된 팁
// 1. 반드시 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문과 반복문 내부에서 호출될 수 없다.
// 3. 제일 중요!! => 커스텀 훅을 직접 만들 수 있다.

// function useInput(){ // 커스텀훅 제작법 함수 이름을 use@@@@으로 하면 리엑트 내부에서 알아서 인식.
//     const [input, setInput] = useState("");

//     const onChange = (e) => {
//         setInput(e.target.value);
//     }
//     return [input, onChange];
// }

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
    <div>
        <input value = {input} onChange ={onChange}></input>
    </div>);
};

export default HookExam;