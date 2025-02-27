import "./List.css"
import TodoItem from "./TodoItem";
import {useState} from "react";

const List = ({ todos, onUpdate, onDelete }) => { // map함수와 콜백함수 이용해서 렌더링 => todo의 콘텐츠를 리스트 형태로 => 아예 컴포넌트 자체를 리턴할 수 도 있음.
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

    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <input value = {search} onChange ={onChangeSearch} placeholder="검색어를 입력하세요"></input>
            <div className ="todos_wrapper">
                {filteredTodos.map((todo)=>{return <TodoItem key = {todo.id} {...todo} onUpdate = {onUpdate} onDelete={onDelete}></TodoItem>})}
            </div>
        </div>
    ) // list로 넘겨 줄때 key값을 넣어서 줘야함. => 이래서 id값을 만든거. => 키값도 같이 전달해줘야함.
};

export default List; 