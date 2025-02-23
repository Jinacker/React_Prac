// 배열 메서드 2. 순회와 탐색

// 5가지의 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소 순회 => 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function (item,idx,arr) {
    console.log(idx,item * 2);
});

// 요런식으로 요소 돌면서 콜백함수로 뭔가 하게 만들수있어서 유용 => 앞으로 자주 쓰일것이다 !
let doubleArr = [];
arr1.forEach((item) => {
    doubleArr.push(item * 2);
});

console.log(doubleArr);

// 2. includes 
// 배열에 특정 요소가 있는지 확인하는 메서드

let arr2 = [1,2,3];
let isInclude = arr2.includes(3);

console.log(isInclude); // true 출력

// 3. indexOf
// 특정 요소의 인덱스 반환 메서드

let index = arr2.indexOf(2);
console.log(index);
// 동일 값 있음 => 맨 처음꺼만 반환
// 찾는 값 없음 => -1 반환

// 4. findIndex
// 모든 요소 순회 => 콜백함수에 만족하는 그런
// 특정 요소의 인덱스를 반환하는 메서드

let arr4 = [1,2,3];
arr4.findIndex((item) => {
    if (item % 2 !== 0) return true;
});

// 근데 왜 ... findIndex를 쓰냐? indexOf가 있는데..?
// => 인덱스 of는 기본적으로 얕은 비교 => 객체 타입에서는 작동을 안함
// 이럴때 findIndex 써서 하면 밑에 같이 콜백함수 간단하게 짜서 인덱스값 뽑아올수있음.
arr4.findIndex((item) => item.name === "이정환");

// 5, find
// 모든 요소 순호 => 콜백함수 만족하는 요소 찾음 => 요소를 그대로 반환

let arr5 =
[
    {name: "이정환"},
    {name: "홍길동"},
];

arr5.find((item) => item.name === "이정환"); 
// findIndex와 유사 but 객체 자체가 반환됨.