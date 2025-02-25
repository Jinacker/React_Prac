import "./Main.css"; // 그냥 이렇게만 해두면 css 알아서 불러와짐 => 리엑트 앱 기능임

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. => 한줄로 표현안되는 for문 if문 사용불가
// 2. 숫자 문자열 배열 값만 렌더링 된다. => true(boolean값)이나 [1,2,3] 이런식으론 안됨
// 3. 모든 태그는 닫혀있어야한다. => <@@@> </@@@> 이렇게 
// 4. 최상위 태그는 반드시 하나여야 한다. => 여기선 <main>이 유일한 최상위 태그 => 없을경우 => 빈태그로 <> 냅두기.


const Main = () => {
    const user =
    {
        name: "이정환",
        isLogin: false,
    };

    if (user.isLogin) // 이렇게 if문으로도 할 수 있다.
    {
        return (
        <div // 근데 요런식으로 리턴문마다 스타일 지정하는거 써두면 난잡 
        sytle = {{ // => css 관리용 파일을 따로 만들자 => Main.css
        backgroundColor: "red",
        borderBottom: "5px solid blue",
        }}
        >로그아웃</div>
        );
    }
    else
    {
        return <div className = "logout">로그인</div>
    } // 요런식으로 css 연결 가능 => className으로 ㅇㅇ

    // return ( // 삼항 연산자로 깔끔하게 할수도 있음.
    //     <>
    //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // );
}

export default Main;