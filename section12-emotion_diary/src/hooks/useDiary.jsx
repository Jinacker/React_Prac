// 함수 이름 앞에 use 붙이면 자동으로 커스텀 hook 이 됨
// 커스텀 훅 되면 리액트 훅스 자유롭게 호출 가능

import { useContext, useState , useEffect} from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

// 기존 일기 내용 가져오는 함수를 커스텀 훅으로 만듬.

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState(); // useEffect 결과물 담을 용도 => 초기값 undefined로 되어있음
    const nav = useNavigate();

    useEffect(()=>{
        const currentDiaryItem =  data.find((item) => String(item.id) === String(id));

        if (!currentDiaryItem) { // 일치하는 id의 페이지가 없으면 => 사용자가 잘못 들어간거
            window.alert("존재하지 않는 일기입니다.") // 경고창 띄우기
            nav("/", {replace:true}); // 홈페이지로 강제로 이동 => 작동 안됨 =? why? 컴포넌트가 마운트 안됐기 떄문. => 그 창 들어가자마자 바로 돌아가길 바랬기 때문임.
        }; // => useEffect를 이용해야한다 => [] deps 설정 => 이거 바뀌면 리렌더링 되게 ㅇㅇ

        setCurDiaryItem(currentDiaryItem); // id 존재시 그냥 그 아이디의 데이터를 반환
    },[id]); // 노란줄은 그냥 무시 ㄱ // => deps에서 data 빼야 오류 사라짐. !!!!!!!!
    // 이제 잘 작동한다 ~
    
    return curDiaryItem;
};

export default useDiary;
