// useReducer 예제 => useReducer란 => useState를 외부 컴포넌트 단위에서 관리할수있게 해주는 훅.
// Reducer 사용시 컴포넌트 내부 깔끔하게 유지 가능 !


import { useReducer } from "react";

// reducer: 변환기
// => 상태를 실제로 변화시키는 변환기 역할.
function reducer(state, action){
    console.log(state, action);
    // if (action.type === "INCREASE"){
    //     return (state + action.data);
    // }
    // else if(action.type === "DECREASE"){
    //     return state - action.data;
    // }


    // 리듀서 함수에서 보통 상태 변화할거 많아지면 => 일반적으로 switch문 쓰임
    switch(action.type){
        case "INCREASE" : return state + action.data;
        case "DECREASE" : return state - action.data;
        default: return state;
    }
}

const Exam = () => {
    // dispatch 발송하다 급송하다
    // => 상태 변화가 있어야한다는 사실을 알리는, 발송하는 함수

    const [state, dispatch] = useReducer(reducer, 0); // 인수로 함수 직접 만들어서 넣어야함.

    const onClickPlus = () => {//인수: 상태가 어떻게 변화되길 원하는지
        dispatch({ // 객체 전달됨 => 이걸 "액션객체"라고 부름
            type: "INCREASE",// 더해라 전달
            data: 1,// 1만큼 전달
        })
    }
    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        })
    }

    return (
    <div>
        <h1>{state}</h1>
        <button onClick ={onClickPlus}>+</button>
        <button onClick ={onClickMinus}>-</button>
    </div>)
}

export default Exam;