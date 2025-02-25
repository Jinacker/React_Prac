const Button = ({children, text, color = "black"}) => 
{// 합성 이벤트 객체 => 매개 변수로 들어간 e 임
 // 정말 좋은 기능이다. => 브라우저마다 다른 이벤트 핸들링 기법을 => 리액트에서 통합해놓은거임. => 이거만 잘쓰면 된다.
    const onClickButton =(e) => { // 이렇게 이벤트 헨들링 함수 만들어두고 쓰면됨.
        console.log(e);
        console.log(text);
    }

    return <button 
    onClick = {onClickButton}
    //onMouseEnter={onClickButton} // 마우스 가져다 대면 반응
    style = {{color: color}}>
        {text} - {color.toUpperCase()}
        {children} 
        </button>;
}// children 같은 Html 요소도 넘겨줄수있다.

// 컬러 값이 없는 경우도 있음.
// 이런식으로 구조분해 할당 이용해서 기본값을 할당해주는게 안전하다.
export default Button;