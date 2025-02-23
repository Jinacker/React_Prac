// truthy 와 falsy
// 자바스크립트에서는 참 거짓이 아닌 값도 참 거짓으로 판단 (조건문)
// truthy == 참으로 판단하는 값
// falsy == 거짓으로 판단하는 값

// => 이걸 이용하면 조건문을 굉장히 간결하게 만들 수 있다 !

// 1. falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// => 조건문에서 거짓으로 판단

// 2. truthy한 값.
// => 7자리 falsy한 값들 제외한 나머지 모든 값

let t1 = "hello";
let t2  = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용사례

function printName(person) 
{
    if (!person) // 이런식으로 person의 값 이상 없는지 확인용도로 사용
    { // 이런식으로 앞에 " ! " 이거 붙여서 사용해야함. => null의 반대 => true 돼서 뒤에 조건문 돌아감.
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
};

let person;
printName(person);
