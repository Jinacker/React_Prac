// 형 변환 => 묵시적 형변환 (내가 안해도 알아서 변환됨) + 명시적 형 변환 (내가 생각해서 바꿈)

//1. 묵시적 형변환.
// => 자바 스크립트 엔진이 알아서 형 변환 하는것.

let num = 10;
let str = "20";

const result = num + str;
//console.log(result); // 1020 출력됨. => num이 묵시적으로 str 타입으로 바뀜.
// 이렇게 오류 안만드려고 묵시적 형변황이 이루어짐.

// 2. 명시적 형 변환.
// 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// 문자열 => 숫자
let str1 = "10";
let strTonum = Number(str1);

let str2 = "10개";
let strTonum2= parseInt(str2); // parseInt => 숫자 + 문자열일때 사용 => 숫자가 먼저 나와야함.
// 그냥 Number 하면 nan 나옴.

console.log(strTonum2);

/////////////////
// => 숫자 => 문자열 
let num1 = 20;
let numTostr1 = String(num1); // 숫자 문자열로

console.log(numTostr1 + "입니다");