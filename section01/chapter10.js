// 반복문.
// for( 초기식; 조건식; 증감식){}

for (let idx = 1; idx <= 10; idx++)
{
    if (idx % 2 === 0 )
        {
            continue; // 이러면 짝수는 스킵.
        }
    console.log(idx + " 반복");

    if (idx >= 5) // 중간에 브레이크 가능.
    {
        break;
    }
}