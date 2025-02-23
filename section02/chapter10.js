// Date 객체와 날짜

// 1. date 객체를 생성하는 방법

let date1 = new Date(); // 생성자 암것도 안넣으면 지금 시간 들어감
console.log(date1);

let date2 = new Date("1997-01-07 10:10:10");
date2 = new Date(1997,1,27,10,10,10); // 요런식으로 넣어서도 쓸수있다

console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초" 즉 UTC(세계협정시)로부터 몇 ms 지났는지 

let ts1 = date1.getTime(); // getTime() 사용
console.log(ts1);

let date4 = new Date(ts1); // 요론식으로 타임스탬프 넣어서 date 객체 만들기 가능
console.log(date4);

////// 서비스 개발할때 많이 쓰임 그래서 중요하다 

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월 = 0월부터 시작해서 안헷갈리게 + 1해서 쓰자
let date = date1.getDate();

let hour = date1.getHours();
let min = date1.getMinutes();
let sec = date1.getSeconds();
// 요런식으로 각각 다 뽑아서 시간 편하게 나타낼수있을듯

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(2); // => 실제론 3월이 되겠구나 
// 약간 요런식으로 Set@@ 으로 수정 가능

// 5. 시간을 여러 포맷으로 출력하기

console.log(date1.toDateString()); // 시간제외 연도와 날짜만 출력
console.log(date1.toLocaleString()); // 이러면 우리나라에 맞게 현지화돼서 시간 출력됨 
//2024. 3. 23. 오후 11:01:25 깔끔하게 출력됨 !