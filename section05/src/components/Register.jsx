// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

import {useState} from "react";


const Register = () => {

    // 통합 state 설정 => 이렇게 그냥 객체로 만들어서 때려박기.
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });


    // 통합 이벤트 핸들러
    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({ // 객체를 만들어서 전달 
            ...input,
            [e.target.name]: e.target.value, // [ (name)프로퍼티 키 자리 ]: 벨류 => 이런식으로 작동함. 
        }) // 개똑똑하네....
    }

    console.log(input);

    // 메인문

    return ( // 이벤트 핸들러와 state 생성 => onChange 쓸때 초기값 있으면 value = {}도 꼭 써주기.
        <div>
            <div>
                
                <input name = "name" // e.target.name 에 name으로 들어가라고 이렇게 설정.
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
        </div> 
    );
}

export default Register;


// 정리 => 1. state 만들기 2. 이벤트 핸들러 만들기 3. html과 연결