// 자바 스크립트에만 있는 특별 연산자 !

// 1. null 병합 연산자
// => 존재하는 값을 추려내는 기능
// => null, undefined가 아닌 값을 찾아내는 연산자.

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // ?? => 언디파인이나 널 아닌값 찾아내서 그 값 출력.
// => 10 출력됨.
// 둘다 값 있다면 앞에꺼 출력. 

// 이게 실무에서 요긴하게 쓰임.
// 회원 닉네임 정하기 만들어보자.
let username = "이정환";
let usernickname = "hellow";

let displayname = usernickname ?? username;
// => 이러면 둘중 있는걸로 들어감. 닉네임 정해놨으면 닉네임이 들어가고 이름만 있으면 이름 들어가고 ㅇㅇ

// 2. typeof 연산자.
// => 값의 타입을 문자열로 반환하는 기능을 하는 연산자.

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
// 지금은 string으로 나옴.
// 자바 스크립트는 신기한게 => 변수 자료형이 계속해서 바뀔수있음.

// 3. 삼항 연산자
// => 항을 3개 사용하는 연산자.
// 조건식을 이용해서 참이나 거짓을때의 값을 다르게 반환 가능.

let var8 = 10;
//요구사항: 변수 res에 var8의 값이 짝수 => "짝", 홀수 => "홀" 출력.
let res = var8 % 2 === 0? "짝수" : "홀수";
console.log(res); // => 짝수 출력.
// 구조: 조건식 ? 참 : 거짓 ;