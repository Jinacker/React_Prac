import "./Button.css"

// 하나의 컴포넌트로 여러개를 표현하기 위해. 안에 넣을 text, 버튼의 색을 고르기 위한 type, onClick 이벤트 헨들러를 props로 받음
const Button = ({text, type, onClick}) => { // 이런식으로 백틱 써서 $ 해서 type 해놓으면 ... 이제 type에 따라 다르게 받은수 있는겨 (동적으로 받을 수 있음)
    return <button onClick = {onClick} className= {`Button Button_${type}`}> 
        {text}
        </button>
};

export default Button;