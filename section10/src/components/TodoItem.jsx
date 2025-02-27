import "./TodoItem.css";
import {memo} from "react";

// 기본적으로 값 같다고 같은게 아니라 주소값을 기반으로 비교
// 얘네도 결국 맨날 생성될때마다 다른 주소값으로 설정된겨 => 그래서 결국 바꼈기때문에 memo해도 계속 리렌더링된거.
const TodoItem = ({id, isDone,content, date, onUpdate, onDelete}) => {

    const onChangeCheckbox = () => {onUpdate(id)}; // 체크박스용 이벤트 헨들러

    const onClickButtonDelete = () => { // 삭제용 이벤트 헨들러
        onDelete(id)
    };

    return (<div className ="TodoItem">
        <input 
        onChange = {onChangeCheckbox} // 체크박슨데 onChange인 이유 => 체크박스지만 결국 input에서 값이 바뀌는것이기 때문.
        readOnly checked = {isDone} type ="checkbox"></input>
        <div className = "content"> {content} </div>
        <div className ="date"> {new Date(date).toLocaleDateString()} </div>
        <button onClick ={onClickButtonDelete}>삭제</button>
    </div>);
};

// 얘도 안에 내용이 바뀔때만 렌더링되게 memo
// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevProps, nextProps) => { // 과거Props와 현재Props가 있다
    // 반환값에 따라, props가 바뀌엇는지 안바뀌었는지 판단
    // T => props 안바뀜 => 리렌더링 x
    // F => props 바뀜 => 리렌더링 o
    if(prevProps.id !== nextProps.id) return false; // 이런식으로 직접 비교해서 리렌더링 제어.
    if(prevProps.isDone !== nextProps.isDone) return false; 
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.Date !== nextProps.Date) return false;

    return true;
}); // 이렇게 콜백함수 넣어버리면 => 이런식으로 직접 비교해서 가능.

// memo => 과거의 props와 현재 props와 비교해서 실행할지 생각함. => 얕은 비교함 
// => 객체 타입의 값은 항상 다른 주소값 => memo에서 props 바꼈다고 판단.