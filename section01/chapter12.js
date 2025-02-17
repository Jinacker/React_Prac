// 1. 함수 표현식

function funcA()
{
    console.log("funcA");
}

let varA = funcA; // 자바 스크립트는 함수를 변수에 담을수가있음.
varA();

let varB = function funcB() { // 이런건 "익명함수" => "함수 표현식" 이라고 불림.
    console.log("funcB");
} // 요런식으로 선언과 동시에 담기도 가능.
// 하지만 이런 경우엔 값으로서 들어간거라. 함수는 존재 x
// => varB()는 출력되지만, funcB는 출력되지 않는다.
// 얘네는 호이스팅 대상이 아님.

// 2. 화살표 함수 => 함수 빠르고 간결하게 만들수있게 해주는 자바스크립트만의 기능.
let varC = () => {
    console.log("화살표 함수");
    return 1;
}

let varD = (value) => value + 1; // 리턴(반환)만 할거면 이렇게 까지 줄여도됨.

console.log(varC());
console.log(varD(10));