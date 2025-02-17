// 1. 변수
let age = 27; // js는 let으로 변수 선언. + 초기화
//console.log(age);

age = 30;
//console.log(age);
// 저장시 바로 새로고침됨.

// 2. 상수 => 값 못바꿈.

const birth = "2001.03.20"; // 상수는 초기화 필수. (값 넣어줘야함)

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $ _ 제외한 기호는 사용 못함.
let name_1;

//3-2. 변수 이름은 숫자로 시작할 수 없다.
let name1;
// let 1name; => 안됨.

//3-3. 변수는 예약어 사용할 수 없다.
// let let; => 안됨
//let if; => 안됨

// 4. 변수 명명 가이드 (추천)
let a = 1;
let b = 1;
let c = a-b;
// 이렇게 이름 뭔지 모르게 지으면 안좋음.

let salesCount = 1;
let refundCount = 1;
// 이런식으로 의미 있게 지어주면 나중에 협업 + 리뷰 할때 좋다.