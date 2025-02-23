// 비동기 작업 처리하기 1. 콜백함수
// 개어렵네... 킵

function add(a, b, callback)
{
    setTimeout(() => {
    const sum = a + b; // 3
    callback(sum);
    }, 3000);
}

add(1,2, (value) => {
    console.log(value);
});

// 음식을 주문하는 상황

function orderFood() 
{
    setTimeout() => 
    {
        const food = 
    }
}