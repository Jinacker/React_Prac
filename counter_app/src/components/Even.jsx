import {useEffect} from "react";


const Even = () => {
    useEffect(() => {
        // 클린업, 정리함수
        return () => { // 사라질때 호출됨.
            console.log("unmount");
        };
    },[]); // deps(배열) 가 없다 => 마운트 될때만 실행
    return <div>짝수입니다</div>
};

export default Even;