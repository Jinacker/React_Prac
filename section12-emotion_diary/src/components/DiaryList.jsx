
// 윗 div => 정렬 / 새일기 추가
// 아랫 div => diaryitem 나열

// 대충 위에서부터 구현한다.


// 각 역할에 맡게 className 부여
// value값 따로 주는 이유 => 나중에 state에 넣어야돼서 영어로 따로 벨류를 줘야한다.

import Button  from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

const DiaryList = () => {
    return (
        <div className = "DiaryList">
            <div className = "menu_bar">
                <select>
                    <option value = {"latest"}>최신순</option>
                    <option value = {"oldest"}>과거순</option>
                </select>
                <Button text = {"새로운 일기 쓰기"} type = {"POSITIVE"}></Button> 
            </div>
            <div className = "list_wrapper">
                <DiaryItem></DiaryItem>
            </div>
        </div>
    )
}

export default DiaryList;