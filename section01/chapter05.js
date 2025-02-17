// js의 자료형 => 원시 타입 + 객체 타입
// 이번 챕터 => 원시 타입.


// 1. number 타입 => 모든 숫자 다 지원해줌.
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
let inf = Infinity;
let minf = -Infinity;

let nan = NaN; // 얘는 막 계산 안되는거는 다 NaN으로 나타냄. 그래서 좀 더 안전.

// 2. String 타입
let myName = "김땡";
let myLocation = "인천";
let introduce = myName+myLocation; // 문자열에도 + 연산자 지원.

//console.log(introduce); => 김땡인천으로 나온다.

// 템플릿 로케이션 문법 !!!!! 중요
// ₩ 백틱 ' 이거 아님. 이런식으로 포매팅해서 출력 가능. 많이 쓰인다고 함.
let introducetext = `${myName}은 ${myLocation}에 거주합니다`;  
//console.log(introducetext)

//3. Boolean 타입.
let isSwitchOn = true;
let isEmpty = false;
// 얘는 true false

// 4. Null 타입 (아무것도 없다)
let empty = null;

//5. Undefined 타입. => 변수 선언하고 아무것도 안넣었을때 기본적으로 넣어져있는거.
// Null과 비슷한 의미.
let none;
console.log(none);
