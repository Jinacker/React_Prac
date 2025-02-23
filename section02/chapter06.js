// 반복문으로 배열과 객체 순회

// 순회란 => 여러개의 값에 순서대로 하나씩 접근


// 1. 배열 순회

let arr = [1,2,3];

// 1.1 배열 인덱싱

for (let i =0; i<arr.length; i++) // .length 쓰면 길이 나옴 => 3
{
    console.log(arr[i]);
}

// 1.2 for of 반복문 => 오로지 순회를 위한놈

for (let item of arr) // item에 arr값 하나씩 들어가서 나옴 for of
{
    console.log(item);
}

// 둘다 성능 똑같. 암거나 써라.

// 2. 객체 순회
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

// 2.1 Object.keys 내장함수 사용
// => 객체에서 key 값들만 뽑아서 새로운 배열로 반환

let keys = Object.keys(person);
console.log(keys);

for (let i=0; i< keys.length; i++)
{
    console.log(keys[i], " ", person[keys[i]]);
}

for (let key of keys)
{
    const value = person[key]; // 이렇게 벨류 값도 출력 가능.
    console.log(key, value);
}

// 2.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

for (let value of values)
{
    console.log(value);
}

// 2.3 for in => 객체 순회만을 위한 용도의 놈 == 아까 for of랑 같은거
// for of랑 헷갈리면 안됨 => 객체 전용

for (let key in person)
{
    const value = person[key];
    console.log(key, value);
}
