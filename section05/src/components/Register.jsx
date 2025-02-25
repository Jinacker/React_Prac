// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

import {useState} from "react";
import {useRef} from "react"; // useRef 실습 ! => 얘도 리엑트에서 제공해주는 내장함수임.

const Register = () => {

    // 통합 state 설정 => 이렇게 그냥 객체로 만들어서 때려박기.
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();
    console.log("Register 렌더링");
    // let count = 1; => 얘로 쓰면 결국 값 안바뀜 => 계속 리렌더링 되면서 전체가 실행, 다시 1로 리셋됨.
    // 그래서 useRef 쓰는거임 => 얘는 기능적으로 리셋 안되게 되어있음.

    // 통합 이벤트 핸들러
    const onChange = (e) => {
        countRef.current++; // 기능 => 수정횟수가 올라감
        console.log(countRef.current); // 수정횟수 출력.
        console.log(e.target.name, e.target.value);
        setInput({ // 객체를 만들어서 전달 
            ...input,
            [e.target.name]: e.target.value, // [ (name)프로퍼티 키 자리 ]: 벨류 => 이런식으로 작동함. 
        }) // 개똑똑하네....
    }

    const onSubmit = () =>{
        if (input.name ===""){
            // 이름을 입력하는 DOM 요소에 포커스 
            inputRef.current.focus();

        }
    }

    console.log(input);

    // 메인문

    return ( // 이벤트 핸들러와 state 생성 => onChange 쓸때 초기값 있으면 value = {}도 꼭 써주기.
        <div>
            <div>
                <input 
                ref = {inputRef}
                name = "name" // e.target.name 에 name으로 들어가라고 이렇게 설정.
                value = {input.name} 
                onChange= {onChange} 
                placeholder="이름"></input>
                {input.name}
            </div>

            <div>
                <input name = "birth" value = {input.birth} onChange = {onChange} type = "date"></input>
                {input.birth}
            </div>

            <div>
                <select name = "country" value = {input.country} onChange = {onChange}>
                    <option></option>
                    <option value ="kr">한국</option>
                    <option value = "uk">영국</option>
                    <option value = "us">미국</option>
                </select>
                {input.country}
            </div>

            <div>  
                <textarea name = "bio" value = {input.bio} onChange = {onChange}>
                </textarea>
                {input.bio}
            </div>

            <button onClick = {onSubmit}>제출</button>
        </div> 
    );
}

export default Register;


// 정리 => 1. state 만들기 2. 이벤트 핸들러 만들기 3. html과 연결