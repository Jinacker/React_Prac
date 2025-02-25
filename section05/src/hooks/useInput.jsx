import {useState} from "react";

function useInput(){ // 커스텀훅 제작법 함수 이름을 use@@@@으로 하면 리엑트 내부에서 알아서 인식.
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }
    return [input, onChange];
}

export default useInput;

// hook도 따로 폴더 파서 다루는게 좋다.