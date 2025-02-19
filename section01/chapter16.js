// 객체 2 => 1의 심화.
// 상수 객체

const animal = { // 상수 객체 생성. => 상수는 못바꾸는가 ?
    type: "고양이",
    name: "나비",
    color: "black",
};

// animal = { a:1 }; => 이렇게 animal에 새로운 객체를 생성하는건 안되지만

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
// 이렇게 추가 수정 삭제는 할 수 잇음.
// => 객체값의 프로퍼티 수정은 가능.

// 상수: 새로운 값을 할당하지 못한다는 의미. => 이미 저장된 객체의 프로퍼티 조작은 얼마든지 가능.

// 2. 메서드
// => 값이 함수인 프로퍼티를 말함

const person =
{
    name: "이정환",
   
    sayHi: function() //메서드: 이 객체의 동작을 정의하는데 사용.
    {
        console.log("안녕!");
    },
    sayhello() // 축약 버전 => 메서드 선언
    {
        console.log("반가워!");
    }
};

person.sayHi();
person["sayhello"](); 

