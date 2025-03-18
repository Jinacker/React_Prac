
// 윗 div => 정렬 / 새일기 추가
// 아랫 div => diaryitem 나열

// 대충 위에서부터 구현한다.


// 각 역할에 맡게 className 부여
// value값 따로 주는 이유 => 나중에 state에 넣어야돼서 영어로 따로 벨류를 줘야한다.

import Button  from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom"; // 새 일기쓰기 창으로 가기위한 라우터 import
import { useState } from "react"; // 최신순 과거순 정렬을 위해선 가변적인 변수가 필요 => useState 호출.

const DiaryList = ({data}) => { // 이제 리스트에 실제 data들을 띄우기 위해 매개변수로 data 객체 받음.

    const nav = useNavigate(); // nav 라우터 생성.
    const [sortType, setSortType] = useState("latest"); //정렬타입을 위한 state 선언. => 보통 최신순이 기본이라 초기값 latest로 설정.

    const onChangeSortType = (e) => { // 정렬을 위한 이벤트 핸들러 생성 및 e(이벤트 객체) 매개변수로 줌.
        setSortType(e.target.value);
    };

    const getSortedData = () => { // 위에 state 이용해서 정렬 함수 만들기
        return data.toSorted((a,b)=>{
            if (sortType === "oldest") {
                return Number(a.createDate) - Number(b.createDate);
            }
            else {
                return Number(b.createDate) - Number(a.createDate); // 혹시 모르니까 형변환
            }
        }); // toSorted 메서드 => 원본 배열은 냅두고 => 정렬된 배열을 반환해주는 함수임. (원본 바꾸면 문제 생길수있어서)
    }

    const sortedData = getSortedData(); // 이렇게 정렬된 데이터를 sorteddata로 줌. => 리렌더링될때마다 갱신됨.

    return ( // select에 onChange 이벤트 핸들러를 주고, 이제 타입 바뀔때마다 onChangeSortType함수 호출 => 리랜더링
        <div className = "DiaryList">
            <div className = "menu_bar">
                <select onChange = {onChangeSortType}>
                    <option value = {"latest"}>최신순</option>
                    <option value = {"oldest"}>과거순</option>
                </select>
                <Button onClick = {() => nav("/new")} text = {"새로운 일기 쓰기"} type = {"POSITIVE"}></Button> 
            </div>
            <div className = "list_wrapper">
                {sortedData.map((item)=><DiaryItem key = {item.id} {...item}></DiaryItem>)}
            </div>
        </div>
    ) // data에서 map 메서드를 이용해 아이템의 아이디와 아이템이 가진 것들을 스프레드 연산자를 사용해 다 key값으로 전달.
    //map 쓸때 그냥 data 대신 sortedData 줘서 애초에 정렬된걸로 나오게 ㄱ
}

export default DiaryList;