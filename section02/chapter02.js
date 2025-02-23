// 단락 평가

// => 자바 스크립트에서는 조건문 => A && B => A에서 이미 성립 => B값에는 접근 조차 안하고 끝

// function returnFalse()
// {
//     console.log("False 함수");
//     return false;
// }

// function returnTrue()
// {
//     console.log("True 함수");
//     return true;
// }

// console.log(returnFalse() && returnTrue());  
// // 이 경우엔 returnFalse() 함수의 호출만됨
// // "단락평가"가 작동해서 두번째 피연산자는 접근조차 안함.

// console.log(returnTrue() && returnFalse());  
// // 이 경우는 첫번째에서 논리연산이 완수 안돼서 T && ? 이기떄문에
// // => 단락평가 x => 뒤에꺼도 접근

// 2. 단락평가 활용 사례.

function printName(person)
{
    // if (!person) => 챕터 1때 쓴 방법보다 진보한 방법으로 사용가능.
    //console.log(person && person.name);
    // => person에서 Falsy한 값 나오면 바로 논리연산 끝나서 뒤에꺼 출력 안됨.

    // 좀 더 멋있는 방법
    const name = person && person.name; // person => F => 단락평가로 name => F
    console.log(name || "person의 값이 없음"); // name = F => 2번째 값 문장 출력.
    // T || T => 첫번째 T 값 반환 => 이정환 출력
}

printName();
printName({ name: "이정환"}); // person에 이름 넣어서 Truthy한 값 넣기