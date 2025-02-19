// 배열 !

let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 => 간결해서 주로 사용

let arrC = [1,2,3, true, "hello", null,{}]; // 이렇게 자료형 막 넣어도 된다 !

// 2. 배열 요소 접근.

let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello"; // 일케 값도 바꿀수 있음.

console.log(item1, item2);
console.log(arrC);