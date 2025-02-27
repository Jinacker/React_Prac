import "./Header.css";
import { memo } from "react"; // memo => 얘도 훅인데... => use가 아니네?

const Header = () => {
    return (
        <div className = "Header">
            <h3>오늘은 📅</h3>
            <h1> {new Date().toDateString()}</h1>
        </div>
    )
};

// // memo(컴포넌트) 해서 => 추출을 memo된 걸로함.
// const memorizedHeader = memo(Header);

// // 일케 기존 Header가 아니라 바뀐 Header export
// export default memorizedHeader; 

// 아니면 걍 이렇게 한줄로 ㄱㄱ

export default memo(Header);