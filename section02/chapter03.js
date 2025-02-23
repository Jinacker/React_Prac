// 1. 배열의 구조 분해 할당

let arr = [1,2,3];

// 기존 방법
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 새 방법
let [one, two, three, four = 4 ] = arr;

// 2. 배열의 구조분해할당

let person =
{
    name: "이정환",
    age: 27,
    hobby: "테니스",
};
// 프로퍼티 이름도 바꿀수있음.
let {name, age: myAge, hobby, extra = "hello"} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 법
// 파라미터 부분에 구조분해 할당을 이용해서 쓸 수 있음.
const func = ({name, age, hobby, extra}) => 
{
    console.log(name,age,hobby,extra);
}

func(person);