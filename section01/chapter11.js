// 함수 선언
// 코드 중복 방지.

function greeting() // function으로 함수 선언함.
{
    console.log("안녕하세요 !");
}

greeting();

// 직사각형 너비 구하기 함수

function getArea(width, height) // 자료형 안쓰고 변수 이름만 쓰면됨.
{
    function another() // 함수안의 함수 => 중첩 함수.
    {
        console.log("another");
    }

    another(); 
    //let width = 10;
    //let height = 20;
    let area = width*height;
    return area;
}

let area1 = getArea(10,20);
let area2 = getArea(30,20);

console.log(area1);
console.log(area2);

// 자바 스크립트는 신기하게 => 호이스팅: 함수 선언이 밑에 있어도 정상적으로 돌아감.
// 다른 언어는 위에서 선언을 해야되는데 신기하다잉. => 유연하게 프로그래밍 가능.