// Header / DIaray List / DIaryItem 컴포넌트로 구성됨
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

import {useState, useContext} from "react";
import { DiaryStateContext } from "../App";

// 콜백 함수로 이번달에 해당되는 데이터만 불러와야함
// 필터링 함수 작성.
const getMonthlyData = (pivotDate, data) => { // 필터링을 만드려면 이번달이 시작되는 점과 끝 점을 알아야함.
    
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1,0,0,0).getTime(); // 이번달이 시작하는 시간 1일 0시 0분 0초 .getTime() 해서 타임 스탬프로 저장

    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1, 0,23,59,59).getTime(); // 이번달이 끝나는 시간 => month +1 하고 0일 하면, 자동으로 그 전달의 마지막날이 됨 =>  23시 59분 59초

    //필터링 하는 함수
    return data.filter((item) => (beginTime <= item.createDate && item.createDate <= endTime)); // 시작 시간 >= 생성 날짜 >= 끝 시간 => 이 사이에 들어가면 그 달에 작성된 데이터이다 !
}

const Home = () => {

    const data = useContext(DiaryStateContext); // 아까 만든 context로 계층성 무시하고 바로 data를 내려받을 수 있음.

    const [pivotDate, setPivotDate] = useState(new Date()); // 날짜 저장하는 state 생성. 현재 시간을 초기값으로 지정
    
    const monthlyData = getMonthlyData(pivotDate, data);

    //state를 이용해 < 버튼 누르면 월 바뀌게 ㄱㄱ    
    //이를 위한 이벤트 핸들러 생성.
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1 )) // 연도는 동일, 한달 뒤 저장하게 state + 1
    };
    const onDecreaseMonth = () => {
        setPivotDate(
            new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1 ) // 딱히 연도는 안바꿔도 알아서 되네..?
        )
    };

    return ( // $ 이용해 동적으로 현재 날짜 넣기
        //getMonth + 1 해야 현재 월이 나옴 아니면 -1 월로 나옴.

    <div>
    <Header title = {`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+ 1}월`} 
    leftChild={<Button onClick = {onDecreaseMonth} text = {"<"}></Button>}
    rightChild={<Button onClick = {onIncreaseMonth} text = {">"}></Button>}>
    </Header>
    <DiaryList data= {monthlyData}></DiaryList>
    </div>
    );
}

export default Home;