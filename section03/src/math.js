// math 모듈

function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

// 1. 첫번째 모듈시스템: common.js 사용 예제
// => math.js를 index.js와 연결하겠다.
// module.exports = {
//     add: add, // 요런식으로 => 원하는 이름: 함수 이름,
//     sub: sub,
// };


// 2. 두번째 모듈 시스템: Es module 사용 예제
// ES Module 시스템 사용 => 먼저 package.json 에서 license 밑에 "type": "module" 넣기 
// => 이게 내가 이 03 섹션에서는 ES 모듈 시스템을 사용하겠다는 뜻임.
// ES module scope, you can use import instead => 이런 오류 뜬다? => 이러면 내가 모듈시스템을 헷갈리지 않았나 생각

export { add, sub }; // 그냥 이렇게 간결하게 가능.

export default multiply(a,b) // 이런식으로 함수 선언과 동시에 export 가능
{ // 그리고 추가로 default 붙이면 => 이 math 모듈의 기본값이 됨.
    return a*b;
}