//const moduleDate = require("./math"); // common.js => 모듈 보낸거 받기
// 여기서 moduleDate 는 객체 배열임.

// ES module 사용법. 주의점: .js도 꼭 넣기 위와 다름.
// import mul, {add, sub} from "./math.js"; // import 써서 훨씬 간단
// default인 애는 이렇게 따로 import 해줘야함.


//console.log(moduleDate.add(1,2)); // 모듈은 이런식으로 @@.@@() 이런식으로 불러와서 쓴다.
//console.log(moduleDate.sub(1,2));

// 이런식으로 우리가 구조 분해 할당 배운거 쓰면
// 더 간편하게 쓸 수 있음.

console.log();

//const {add, sub} = require("./math"); // 간편

//console.log(add(1,2)); // 이러면 그냥 바로 부르기 가능.
//console.log(sub(1,2));


////// 라이브러리 실습 
import randomColor from "randomcolor"; // 이름만 명시해주면됨

const color = randomColor();
console.log(color);



