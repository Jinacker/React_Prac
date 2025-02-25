// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import {useState} from "react";


const Register = () => {

    // state 설정
    const [name, setName] = useState(""); // 초기값 "이름"인 state 생성
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");


    // 이벤트 핸들러들
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeName = (e) => {
        setName(e.target.value); // 이렇게 input에 들어간 값에 접근가능하다.
    };

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }


    // 메인문

    return ( // 이벤트 핸들러와 state 생성 => onChange 쓸때 초기값 있으면 value = {}도 꼭 써주기.
        <div>
            <div>
                <input value = {name} onChange= {onChangeName} placeholder="이름"></input>
                {name}
            </div>

            <div>
                <input value = {birth} onChange = {onChangeBirth} type = "date"></input>
                {birth}
            </div>

            <div>
                <select value = {country} onChange = {onChangeCountry}>
                    <option></option>
                    <option value ="kr">한국</option>
                    <option value = "uk">영국</option>
                    <option value = "us">미국</option>
                </select>
                {country}
            </div>

            <div>
                <textarea value = {bio} onChange = {onChangeBio}>
                </textarea>
                {bio}
            </div>
        </div> 
    );
}

export default Register;


// 정리 => 1. state 만들기 2. 이벤트 핸들러 만들기 3. html과 연결