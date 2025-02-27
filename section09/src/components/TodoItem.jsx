import "./TodoItem.css";

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

export default TodoItem;