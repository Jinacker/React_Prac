// 객체 1

// 객체 생성.

let obj1 = new Object() // 객체 생성자 내장 함수

let obj2 = {} // 객체 리터럴 방법 => 훨씬 간결해서 이걸 주로 쓴다.


// 2. 객체 프로퍼티 => 객체 속성.
let person = 
{
    name: "이정환", // key: value 구조를 가짐.
    age: 27,
    hobby: "테니스",
    job: "FE Dev",
    extra: {}, // value 값은 객체가 들어와도 되고 함수가 들어와도 됨.
    10: 20,
    "like cat": true, // 이런식으로 띄어쓰기 포함된건 "" 안에 넣어서 ㅇㅇ
};

// 3. 객체 프로퍼티 다루는법

// 3.1 특정 프로퍼티에 접근 하는법 ( 점 표기법과 괄호 표기법)

// => 점 표기법 => 변화 필요 없다면 간단한 이걸 쓰면 된다.

let name = person.name;
console.log(name); // 

// 존재하지 않는 프로퍼티 접근 => undefined

// => 괄호 표기법 => 동적으로 프로퍼티 변화 필요.

let age = person["age"]; // "프로퍼티" 이렇게 따옴표 안에 넣어서 해야됨. 안그러면 변수로 인식.
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티 추가하는법

person.job = "fe dev";
person["favoriteFood"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티 수정 방법

person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티 존재 유무를 확인하는 방법 => in 연산자 이용

let result1 = "name" in person;
console.log(result1); // => 있어서 true
let result2 = "cat" in person;
console.log(result2); // => 없어서 false
