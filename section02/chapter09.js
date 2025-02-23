// 배열 메서드 3: 배열 변형

// 5가지의 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건에 만족하는 요소들만 필터링해서 새로운 배열로 변환
// 나중에 카테고리 필터 만드는데 필수로 사용하니까 중요하다.

let arr1 = [
    {name: "이정환1", hobby: "테니스"},
    {name: "이정환2", hobby: "테니스"},
    {name: "이정환3", hobby: "독서"},
]
// 얘도 이런식으로 콜백함수로 구동되는 메서드임 
// () => {};
const tennisPeople = arr1.filter(
    (item)=> item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// 많이 쓰이니까 중요함
// 배열의 모든 요소 순회 => 각각 콜백 함수 실행 => 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapRes = arr2.map((item,idx,arr)=> {return item*2});
console.log(mapRes);
// 이런식으로 뭔가 조작을 해서 새로운 배열을 만들 수 있음

// 이런 용도로 사용 가능 => 아까 위에서 만든 배열 객체의 이름만 가져와서 새 배열 만들기
let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort 
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
let arr4 = [10,3,5]; // 요런식으로 숫자로 넣으면 작동 안함
arr3.sort();

// 숫자 정렬하려면 콜백함수를 넣어야한다 sort에
arr4.sort((a, b) => {
    if(a>b)
    {
        // b가 a 앞으로 와라
        return 1; // b, a 배치
    }
    else if (a<b)
    {
        // a가 b앞에 와라
        return -1; // => a,b배치
    }
    else
    {
        // 그대로 냅둬라
        return 0; // a b 자리 유지.
    }
}); // 이러면 오름차순 정렬됨 => 내림차수는 어케 해야될지 알겠지?

console.log(arr3);
console.log(arr4); 


// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
// 최신 함수임

console.log(arr3.toSorted());


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드

let arr6 = ["hi","im","JIN"];
const joined = arr6.join();
console.log(joined);
// 이러면 hi,im,JIN 으로 됨. "," 이게 기본 구분자

const joined2 = arr6.join("_"); // 요런식으로 구분자 바꿀수있음
console.log(joined2);