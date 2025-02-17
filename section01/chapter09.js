// 조건문

// if와 swicth 가 존재.

let num = 10;

if (num>=10) 
{
    console.log("num은 10 이상입니다.");
}
else if(num >=5)
{
    console.log("num은 5 이상입니다.");
}
else if(num >=3)
    {
        console.log("num은 3 이상입니다.");
    }
else
{
    console.log("조건이 거짓입니다.");
}

//2. switch 문
// 다수의 조건을 처리할때 if문보다 더 직관적임.

let animal = "cat";

switch(animal)
{
    case "cat": 
        {
            console.log("고양이");
            break; // 스위치문은 조건 맞으면 밑에꺼도 쭉 출력됨. 그래서 break; 필수.
        }
    case "dog":
        {
            console.log("개");
            break;
        }
    case "bear":
        {
            console.log("곰");
            break;
        }
    case "tiger":
        {
            console.log("호랑이");
            break;
        }
    default: // if문의 else 같은놈임 => 다 해당안되면 이거 나옴.
        {
            console.log("그런 동물은 전 모릅니다.");
        }
}