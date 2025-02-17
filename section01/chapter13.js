// 콜백함수
// 다른 함수의 인수로서 전달된 함수
// main(sub) 이런느낌?

function main(value)
{
    value();
}
function sub()
{
    console.log("i am sub");
}

//main(sub); // 이렇게 함수를 함수의 인수로 사용....
// 콜백 함수: 뒷전에 실행됨. 나중에 실행됨. => 메인함수가 알아서 실행한다.
// => 이렇게 쓰면 메인함수에서 우리가 실행 타이밍을 정할 수 있음.

main(() => // 이렇게까지도 줄일수있음. 익명 + 함수 표현식 사용.
{
    console.log("i am sub");
});

// 콜백 함수의 활용

function repeat(count, callback)
{
    for(let idx = 1; idx <= count; idx++)
    {
       callback(idx); // 여기서 인수 속 함수(출력문) 콜백됨
    }
}

// function repeatDouble(count)
// {
//     for(let idx = 1; idx <= count; idx++)
//     {
//         console.log(idx*2);
//     }
// }

repeat(5, function (idx) {console.log(idx)});
//repeatDouble(5);
repeat(5, function (idx) {console.log(idx*2)});
//triple
repeat(5, (idx) => {console.log(idx*3)}); // 이렇게 줄이기 가능.

// 콜백함수... 이거 사용하면 중복코드 제거 + 간결성 이점.