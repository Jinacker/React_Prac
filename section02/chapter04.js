// spread 연산자와 rest 매개변수

// 1. spread 연산자
// => spread: 흩뿌리다, 혈치다
// => 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
//let arr2 = [4, arr1[0], arr1[1], arr1[2], 5 , ];
// 이런식으로 안해도 된다

let arr2 = [4, ...arr1, 5, 6]; // ...해서 넣음됨
console.log(arr2);

// 배열 말고도 객체도 가능
let obj1 = 
{
    a: 1,
    b: 2,
};

let obj2 = 
{
    ...obj1, // 요런식으로 객체 안에도 가능  
    c: 3,
    d: 4,
};

//obj2(...arr1); // => 요런식으로 함수 매개변수로도 사용가능

// 2. Rest 매개변수
// => Rest는 나머지 매개변수

function funcB(one, ...rest) // 이렇게 한방에 모든 매개변수를 받아올수있다
{ // 저런식으로 첫번째 변수는 one에 저장 => 나머지는 rest에 저장.
// rest 매개변수 뒤에는 추가적인 매개변수 못들어옴.
// 매개변수 짬통 느낌으로 쓰면 될듯..?
    console.log(rest);
};

funcB(...arr1);