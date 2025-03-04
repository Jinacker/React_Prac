import "./List.css"
import TodoItem from "./TodoItem";
import {useState, useMemo, useContext} from "react";
import { TodoStateContext } from "../App";

const List = () => { // map함수와 콜백함수 이용해서 렌더링 => todo의 콘텐츠를 리스트 형태로 => 아예 컴포넌트 자체를 리턴할 수 도 있음.
    const todos = useContext(TodoStateContext); // 이제 객체가 아니라 이렇게 받아야함.
    
    const [search, setSearch] = useState(""); // 검색용 state 생성.
    
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }; // 검색용 이벤트 헨들러 만들기
    
    const getFilteredDate = () => {
        if (search === "")
        {
            return todos; // 검색어 없으면 전체 todos 리스트 리턴.
        }
        else{ // 이 부분 그냥 리턴 하는거임... => () => {} 이게 아니라 그냥 값 하나임.
            return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()) ); // filter((#) => includes @@) => # 다 순회하면서 포함된 true 값꺼 찾아옴.
        }
         // 서치값이 존재하는 값들만 필터링. => 있으면 T 없으면 F 반환
    };// toLowerCase 로 => 소문자든 대문자든 검색하면 검색되게 추가 기능 추가.

    const filteredTodos = getFilteredDate();

    // useMemo의 등장으로 기존 함수 필요없 => 지움

    // const getAnalyzedDate = () => {
    //     console.log("getAnalyzedData 호출!")
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo) => todo.isDone).length; // filter 메서드 => 호출될때마다 todo 전체를 순회 => 비효율적
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     };
    // };

    // useMemo 훅!!!
    // 현재 search 해도 게속 리렌더링됨 => 비효율적 => 불필요한 리렌더링을 줄이자.
    // memo는 결국 => 내가 원하는 상태값이 바꼈을때만 해당 연산을 작동하게 할 수 있는 그런 용도이다.
    // 구조분해 할당으로 값도 받을 수 있으니 좋다.

    const {totalCount, doneCount, notDoneCount} = // 여기에 useMemo를 받는다
    useMemo(() => {
        // memoriztaion: 즉 기억하고 싶은 연산을 여기에 넣음 됨.

        // 위에 analyzed 함수 연산부분 넣기
        console.log("getAnalyzedData 호출!")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length; // filter 메서드 => 호출될때마다 todo 전체를 순회 => 비효율적
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        };
    }, [todos]) // 라이프 사이클때 배웠던 의존성배열: deps => 배열 내용 바뀌면 => 콜백함수 호출
//이거 다 빈칸으로 냅두면 라이프 사이클에서 배웠듯 => 마운트 될때만 딱 한번 실행됨.  



    // 리렌더링 될때마다 함수 실행돼서 카운트 올라감.
    //const {totalCount, doneCount, notDoneCount} = getAnalyzedDate();

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>

            <input value = {search} onChange ={onChangeSearch} placeholder="검색어를 입력하세요"></input>
            <div className ="todos_wrapper">
                {filteredTodos.map((todo)=>{return <TodoItem key = {todo.id} {...todo}></TodoItem>})}
            </div>
        </div>
    ) // list로 넘겨 줄때 key값을 넣어서 줘야함. => 이래서 id값을 만든거. => 키값도 같이 전달해줘야함.
};

export default List; 