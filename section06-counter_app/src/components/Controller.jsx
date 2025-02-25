const Controller = ({ onClickButton }) => {
    return(
        <div>
            <button 
            onClick = {() => {
                onClickButton(-1);
            }}
            >-1</button>
            <button
            onClick = {() => { // 이렇게 한 이유 => 인수를 우리가 원하는 값으로 넘길라고.
                onClickButton(-10);
            }}>-10</button>
            <button
            onClick = {() => {
                onClickButton(-100);
            }}>-100</button>
            <button
            onClick = {() => {
                onClickButton(+100);
            }}
            >+100</button>
            <button
            onClick = {() => {
                onClickButton(+10);
            }}
            >+10</button>
            <button
            onClick = {() => {
                onClickButton(+1);
            }}
            >+1</button>

        </div>
    );
}; 

export default Controller;